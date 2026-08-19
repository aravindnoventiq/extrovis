import { useEffect, useState } from 'react';
import { api, type CareerApplication, type ContactSubmission } from '@/lib/api';

function InboxAdmin() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [apps, setApps] = useState<CareerApplication[]>([]);
  const [error, setError] = useState('');

  const load = async () => {
    const [c, a] = await Promise.all([api.adminContacts(), api.adminApplications()]);
    setContacts(c.items);
    setApps(a.items);
  };

  useEffect(() => {
    load().catch((e) => setError(e.message));
  }, []);

  return (
    <div>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Inbox</h1>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}

      <h2 style={{ color: '#14146e' }}>Contact submissions</h2>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginBottom: 28 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: 8 }}>When</th>
            <th style={{ padding: 8 }}>Source</th>
            <th style={{ padding: 8 }}>Name</th>
            <th style={{ padding: 8 }}>Email</th>
            <th style={{ padding: 8 }}>Message</th>
            <th style={{ padding: 8 }} />
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id} style={{ borderBottom: '1px solid #eee', background: c.isRead ? '#fff' : '#f0f4ff' }}>
              <td style={{ padding: 8, whiteSpace: 'nowrap' }}>{new Date(c.createdAt).toLocaleString()}</td>
              <td style={{ padding: 8 }}>{c.source}</td>
              <td style={{ padding: 8 }}>{c.name}</td>
              <td style={{ padding: 8 }}>{c.email}</td>
              <td style={{ padding: 8 }}>{c.message || '—'}</td>
              <td style={{ padding: 8, whiteSpace: 'nowrap' }}>
                {!c.isRead ? (
                  <button
                    type="button"
                    onClick={async () => {
                      await api.adminMarkContactRead(c.id);
                      await load();
                    }}
                  >
                    Mark read
                  </button>
                ) : null}{' '}
                <button
                  type="button"
                  onClick={async () => {
                    if (confirm('Delete?')) {
                      await api.adminDeleteContact(c.id);
                      await load();
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ color: '#14146e' }}>Career applications</h2>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: 8 }}>When</th>
            <th style={{ padding: 8 }}>Name</th>
            <th style={{ padding: 8 }}>Email</th>
            <th style={{ padding: 8 }}>CV</th>
            <th style={{ padding: 8 }} />
          </tr>
        </thead>
        <tbody>
          {apps.map((a) => (
            <tr key={a.id} style={{ borderBottom: '1px solid #eee', background: a.isRead ? '#fff' : '#f0f4ff' }}>
              <td style={{ padding: 8 }}>{new Date(a.createdAt).toLocaleString()}</td>
              <td style={{ padding: 8 }}>{a.name}</td>
              <td style={{ padding: 8 }}>{a.email}</td>
              <td style={{ padding: 8 }}>
                <a href={a.cvPath} target="_blank" rel="noreferrer">
                  Download
                </a>
              </td>
              <td style={{ padding: 8 }}>
                {!a.isRead ? (
                  <button
                    type="button"
                    onClick={async () => {
                      await api.adminMarkApplicationRead(a.id);
                      await load();
                    }}
                  >
                    Mark read
                  </button>
                ) : null}{' '}
                <button
                  type="button"
                  onClick={async () => {
                    if (confirm('Delete?')) {
                      await api.adminDeleteApplication(a.id);
                      await load();
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdminInboxPage() {
  return <InboxAdmin />;
}
