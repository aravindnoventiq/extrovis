import { useEffect, useRef } from 'react';

/**
 * Marks .fade-in children with .fade-in-done when they enter the viewport
 * (matches live Extrovis fade behavior).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(_options: unknown = {}) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = root.querySelectorAll('.fade-in');
    if (!items.length) {
      // If the section itself is fade-in
      if (root.classList.contains('fade-in')) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-done');
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
        );
        obs.observe(root);
        return () => obs.disconnect();
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-done');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
