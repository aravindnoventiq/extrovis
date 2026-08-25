import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { AdminAuthProvider, AdminGate, useAdminAuth } from './AdminAuth';

const nav = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/pages', label: 'Pages' },
  { to: '/admin/leadership', label: 'Leadership' },
  { to: '/admin/careers', label: 'Careers' },
  { to: '/admin/offices', label: 'Offices' },
  { to: '/admin/inbox', label: 'Inbox' },
];

function Shell() {
  const { user, logout } = useAdminAuth();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', background: '#f5f5f7' }}>
      <aside
        style={{
          width: 220,
          background: '#14146e',
          color: '#fff',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 16 }}>EXTROVIS CMS</div>
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={{ color: '#dfdff2', textDecoration: 'none', padding: '8px 10px', borderRadius: 6 }}
          >
            {item.label}
          </Link>
        ))}
        <div style={{ marginTop: 'auto', fontSize: 13, opacity: 0.85 }}>
          <div>{user?.name}</div>
          <div style={{ opacity: 0.7 }}>{user?.email}</div>
          <button
            type="button"
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            style={{
              marginTop: 12,
              background: '#ff0018',
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: 100,
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Log out
          </button>
        </div>
      </aside>
      <main style={{ flex: 1, padding: 28, overflow: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default function AdminLayout() {
  return (
    <AdminAuthProvider>
      <AdminGate>
        <Shell />
      </AdminGate>
    </AdminAuthProvider>
  );
}
