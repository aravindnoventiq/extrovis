import { useEffect, useState } from 'react';
import { api, type Office } from '@/lib/api';

export type OfficeView = {
  id: string;
  name: string;
  country: string;
  map: string;
  line: string;
  address: string[];
  defaultOpen?: boolean;
};

function toView(o: Office): OfficeView {
  return {
    id: o.officeKey,
    name: o.name,
    country: o.country,
    map: o.mapImage || '',
    line: o.lineImage || '',
    address: Array.isArray(o.address) ? (o.address as string[]) : [],
    defaultOpen: o.defaultOpen,
  };
}

export function useOffices(fallback: OfficeView[]): OfficeView[] {
  const [offices, setOffices] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    api
      .getOffices()
      .then((res) => {
        if (!cancelled && res.offices?.length) {
          setOffices(res.offices.map(toView));
        }
      })
      .catch(() => {
        /* keep fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return offices;
}
