import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

function Dashboard() {
  const [stats, setStats] = useState<{
    pages: number;
    members: number;
    unreadContacts: number;
    unreadApplications: number;
    jobs: number;
  } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .adminStats()
      .then(setStats)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Dashboard</h1>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}
      {stats ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 16 }}>
          {[
            { label: 'Pages', value: stats.pages },
            { label: 'Leadership', value: stats.members },
            { label: 'Jobs', value: stats.jobs },
            { label: 'Unread contacts', value: stats.unreadContacts },
            { label: 'Unread applications', value: stats.unreadApplications },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                background: '#fff',
                padding: 20,
                borderRadius: 10,
                color: '#14146e',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 700 }}>{c.value}</div>
              <div style={{ fontSize: 14, opacity: 0.75 }}>{c.label}</div>
            </div>
          ))}
        </div>
      ) : (
        !error && <p>Loading…</p>
      )}
    </div>
  );
}

export default function AdminDashboardPage() {
  return <Dashboard />;
}
