import { createContext, useContext, useMemo, useState, useEffect, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { api, type AdminUser } from '@/lib/api';

type AuthCtx = {
  user: AdminUser | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  ready: boolean;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem('cms_token'));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!token) {
        setReady(true);
        return;
      }
      try {
        const { user: u } = await api.me();
        if (!cancelled) setUser(u);
      } catch {
        sessionStorage.removeItem('cms_token');
        if (!cancelled) {
          setToken(null);
          setUser(null);
        }
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const value = useMemo<AuthCtx>(
    () => ({
      user,
      token,
      ready,
      async login(email, password) {
        const res = await api.login(email, password);
        sessionStorage.setItem('cms_token', res.token);
        setToken(res.token);
        setUser(res.user);
      },
      logout() {
        sessionStorage.removeItem('cms_token');
        setToken(null);
        setUser(null);
      },
    }),
    [user, token, ready],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAdminAuth outside provider');
  return ctx;
}

export function AdminGate({ children }: { children: ReactNode }) {
  const { user, ready } = useAdminAuth();
  const location = useLocation();
  if (!ready) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        Loading admin…
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}
