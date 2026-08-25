import { useEffect, useState } from 'react';
import { api, type Office } from '@/lib/api';

function OfficesAdmin() {
  const [offices, setOffices] = useState<Office[]>([]);
  const [error, setError] = useState('');

  const load = () =>
    api
      .adminOffices()
      .then((r) => setOffices(r.offices))
      .catch((e) => setError(e.message));

  useEffect(() => {
    load();
  }, []);

  const save = async (o: Office) => {
    await api.adminUpdateOffice(o.id, o);
    await load();
  };

  return (
    <div>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Offices</h1>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}
      {offices.map((o) => (
        <div key={o.id} style={{ background: '#fff', padding: 16, marginBottom: 12, borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: '#888' }}>{o.officeKey}</div>
          <label>
            Name
            <input
              value={o.name}
              onChange={(e) =>
                setOffices((list) => list.map((x) => (x.id === o.id ? { ...x, name: e.target.value } : x)))
              }
              style={{ display: 'block', width: '100%', padding: 8, margin: '4px 0 8px' }}
            />
          </label>
          <label>
            Country
            <input
              value={o.country}
              onChange={(e) =>
                setOffices((list) => list.map((x) => (x.id === o.id ? { ...x, country: e.target.value } : x)))
              }
              style={{ display: 'block', width: '100%', padding: 8, margin: '4px 0 8px' }}
            />
          </label>
          <label>
            Address (one line per entry)
            <textarea
              value={(Array.isArray(o.address) ? o.address : []).join('\n')}
              onChange={(e) =>
                setOffices((list) =>
                  list.map((x) =>
                    x.id === o.id
                      ? { ...x, address: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean) }
                      : x,
                  ),
                )
              }
              rows={3}
              style={{ display: 'block', width: '100%', padding: 8, margin: '4px 0 8px' }}
            />
          </label>
          <button type="button" onClick={() => save(o)} style={{ background: '#14146e', color: '#fff', border: 'none', padding: '8px 12px' }}>
            Save
          </button>
        </div>
      ))}
    </div>
  );
}

export default function AdminOfficesPage() {
  return <OfficesAdmin />;
}
