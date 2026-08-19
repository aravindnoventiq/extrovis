import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

/** Load CMS page JSON; falls back to null so pages can keep hardcoded defaults. */
export function usePageData<T>(slug: string, fallback: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .getPage(slug)
      .then((res) => {
        if (!cancelled && res.data) setData(res.data as T);
      })
      .catch(() => {
        /* keep fallback when API offline */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { data, loading };
}
