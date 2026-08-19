import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AdminAuthProvider, useAdminAuth } from './AdminAuth';

function LoginForm() {
  const { login, user, ready } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  if (ready && user) {
    const to = (location.state as { from?: string } | null)?.from || '/admin';
    return <Navigate to={to} replace />;
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f7',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          background: '#fff',
          padding: 32,
          borderRadius: 12,
          width: '100%',
          maxWidth: 400,
          boxShadow: '0 8px 32px rgba(20,20,110,0.12)',
        }}
      >
        <h1 style={{ margin: '0 0 8px', color: '#14146e', fontSize: 24 }}>Admin login</h1>
        <p style={{ margin: '0 0 24px', color: '#666', fontSize: 14 }}>Extrovis content management</p>
        <label style={{ display: 'block', marginBottom: 12, color: '#14146e', fontSize: 14 }}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', width: '100%', marginTop: 6, padding: 10, border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: 16, color: '#14146e', fontSize: 14 }}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: 'block', width: '100%', marginTop: 6, padding: 10, border: '1px solid #ccc' }}
          />
        </label>
        {error ? <p style={{ color: '#ff0018', fontSize: 14 }}>{error}</p> : null}
        <button
          type="submit"
          disabled={busy}
          style={{
            width: '100%',
            padding: 12,
            background: '#14146e',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <AdminAuthProvider>
      <LoginForm />
    </AdminAuthProvider>
  );
}
