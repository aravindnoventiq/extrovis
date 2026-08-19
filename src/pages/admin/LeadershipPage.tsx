import { useEffect, useState } from 'react';
import { api, type LeadershipMember } from '@/lib/api';

const empty: LeadershipMember = {
  name: '',
  role: '',
  shortDesc: '',
  fullDesc: [''],
  image: '/images/leadership/',
  alt: '',
  group: 'leadershipTeam',
  sortOrder: 0,
};

function LeadershipAdmin() {
  const [members, setMembers] = useState<LeadershipMember[]>([]);
  const [editing, setEditing] = useState<LeadershipMember | null>(null);
  const [error, setError] = useState('');

  const load = () =>
    api
      .adminLeadership()
      .then((r) => setMembers(r.members))
      .catch((e) => setError(e.message));

  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    if (!editing) return;
    setError('');
    try {
      if (editing.id) {
        await api.adminUpdateLeadership(editing.id, editing);
      } else {
        await api.adminCreateLeadership(editing);
      }
      setEditing(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    }
  };

  const remove = async (id: number) => {
    if (!confirm('Delete this member?')) return;
    await api.adminDeleteLeadership(id);
    await load();
  };

  return (
    <div>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Leadership</h1>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}
      <button
        type="button"
        onClick={() => setEditing({ ...empty })}
        style={{ marginBottom: 16, background: '#14146e', color: '#fff', border: 'none', padding: '8px 14px', cursor: 'pointer' }}
      >
        Add member
      </button>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: 10 }}>Name</th>
            <th style={{ padding: 10 }}>Role</th>
            <th style={{ padding: 10 }}>Group</th>
            <th style={{ padding: 10 }} />
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: 10 }}>{m.name}</td>
              <td style={{ padding: 10 }}>{m.role}</td>
              <td style={{ padding: 10 }}>{m.group}</td>
              <td style={{ padding: 10, whiteSpace: 'nowrap' }}>
                <button type="button" onClick={() => setEditing({ ...m, fullDesc: [...(m.fullDesc || [])] })}>
                  Edit
                </button>{' '}
                <button type="button" onClick={() => m.id && remove(m.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editing ? (
        <div
          style={{
            marginTop: 24,
            background: '#fff',
            padding: 20,
            borderRadius: 8,
            display: 'grid',
            gap: 10,
          }}
        >
          <h2 style={{ margin: 0, color: '#14146e' }}>{editing.id ? 'Edit member' : 'New member'}</h2>
          {(['name', 'role', 'shortDesc', 'image', 'alt', 'group'] as const).map((field) => (
            <label key={field} style={{ display: 'grid', gap: 4, fontSize: 14 }}>
              {field}
              <input
                value={String(editing[field] ?? '')}
                onChange={(e) => setEditing({ ...editing, [field]: e.target.value })}
                style={{ padding: 8, border: '1px solid #ccc' }}
              />
            </label>
          ))}
          <label style={{ display: 'grid', gap: 4, fontSize: 14 }}>
            fullDesc (one paragraph per line)
            <textarea
              value={(editing.fullDesc || []).join('\n\n')}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  fullDesc: e.target.value.split(/\n\n+/).map((s) => s.trim()).filter(Boolean),
                })
              }
              rows={6}
              style={{ padding: 8, border: '1px solid #ccc', fontFamily: 'inherit' }}
            />
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" onClick={save} style={{ background: '#14146e', color: '#fff', border: 'none', padding: '8px 14px' }}>
              Save
            </button>
            <button type="button" onClick={() => setEditing(null)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function AdminLeadershipPage() {
  return <LeadershipAdmin />;
}
