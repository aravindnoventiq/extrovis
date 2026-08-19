import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '@/lib/api';

function PagesList() {
  const [pages, setPages] = useState<{ id: number; slug: string; updatedAt: string }[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .adminPages()
      .then((r) => setPages(r.pages))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Pages</h1>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: 12 }}>Slug</th>
            <th style={{ padding: 12 }}>Updated</th>
            <th style={{ padding: 12 }} />
          </tr>
        </thead>
        <tbody>
          {pages.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: 12 }}>{p.slug}</td>
              <td style={{ padding: 12 }}>{new Date(p.updatedAt).toLocaleString()}</td>
              <td style={{ padding: 12 }}>
                <Link to={`/admin/pages/${p.slug}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PageEditor() {
  const { slug = '' } = useParams();
  const [json, setJson] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .getPage(slug)
      .then((r) => setJson(JSON.stringify(r.data, null, 2)))
      .catch((e) => setError(e.message));
  }, [slug]);

  const save = async () => {
    setStatus('');
    setError('');
    try {
      const data = JSON.parse(json);
      await api.adminUpdatePage(slug, data);
      setStatus('Saved');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Save failed');
    }
  };

  return (
    <div>
      <p>
        <Link to="/admin/pages">← Pages</Link>
      </p>
      <h1 style={{ color: '#14146e', marginTop: 0 }}>Edit: {slug}</h1>
      <p style={{ color: '#666', fontSize: 14 }}>Edit page JSON. Image paths must stay as existing /images/… URLs.</p>
      {error ? <p style={{ color: '#ff0018' }}>{error}</p> : null}
      {status ? <p style={{ color: 'green' }}>{status}</p> : null}
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        spellCheck={false}
        style={{
          width: '100%',
          minHeight: 480,
          fontFamily: 'ui-monospace, monospace',
          fontSize: 13,
          padding: 12,
          border: '1px solid #ccc',
          borderRadius: 8,
        }}
      />
      <button
        type="button"
        onClick={save}
        style={{
          marginTop: 12,
          background: '#14146e',
          color: '#fff',
          border: 'none',
          padding: '10px 18px',
          cursor: 'pointer',
          borderRadius: 6,
        }}
      >
        Save page
      </button>
    </div>
  );
}

export function AdminPagesListPage() {
  return <PagesList />;
}

export function AdminPageEditPage() {
  return <PageEditor />;
}
