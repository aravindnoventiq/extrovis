import { useEffect } from 'react';

/** Only run once per full browser load (survives React StrictMode double-mount). */
let didScheduleInitialHide = false;

/**
 * Controls the static `.page-loader` in index.html — first load only.
 * Client-side navigations do not show the loader again.
 */
export default function PageLoader() {
  useEffect(() => {
    if (didScheduleInitialHide) return;
    didScheduleInitialHide = true;

    const el = document.querySelector<HTMLElement>('.page-loader');
    if (!el) return;

    const boot = typeof performance !== 'undefined' ? performance.now() : Date.now();
    // Live spinner animation starts after 1s — keep overlay visible long enough to see it
    const minVisibleMs = 1600;

    const hide = () => {
      el.classList.add('loaded');
      el.setAttribute('aria-busy', 'false');
      el.setAttribute('aria-hidden', 'true');
    };

    const finishWhenReady = () => {
      const elapsed =
        (typeof performance !== 'undefined' ? performance.now() : Date.now()) - boot;
      const wait = Math.max(0, minVisibleMs - elapsed);
      window.setTimeout(hide, wait);
    };

    if (document.readyState === 'complete') {
      finishWhenReady();
    } else {
      window.addEventListener('load', finishWhenReady, { once: true });
    }
  }, []);

  return null;
}
