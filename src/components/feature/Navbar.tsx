import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';

const navLinks = [
  { label: 'Who We Are', href: '/who-we-are/' },
  { label: 'What We Offer', href: '/what-we-offer/' },
  { label: 'Manufacturing : Drug Substances', href: '/manufacturing-drug-substances/' },
  { label: 'Manufacturing : Drug Products', href: '/manufacturing-drug-products/' },
  { label: 'Leadership', href: '/leadership/' },
  { label: 'Get in touch', href: '/get-in-touch/' },
  { label: 'Work with Us', href: '/work-with-us/' },
];

function normalizePath(path: string) {
  if (path === '/') return '/';
  return path.replace(/\/$/, '') || '/';
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const current = normalizePath(location.pathname);
  const isHome = current === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const drawer = (
    <>
      <div
        className={`grey-bg${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <div className={`menu nav-drawer${menuOpen ? ' open' : ''}`} role="dialog" aria-modal={menuOpen}>
        <ul>
          <li className="nav-link">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="/images/extrovis-logo.svg" alt="Extrovis" width={300} height="auto" />
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.label} className="nav-link">
              <Link
                to={link.href}
                className={current === normalizePath(link.href) ? 'active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav
        className={[menuOpen ? 'menu-is-open' : '', isHome ? 'nav-home' : ''].filter(Boolean).join(' ') || undefined}
      >
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <img src="/images/extrovis-logo.svg" alt="Extrovis" width={320} height="auto" />
              </Link>
            </div>
            <button
              type="button"
              className={`collapse nav-hamburger${menuOpen ? ' open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      {mounted ? createPortal(drawer, document.body) : drawer}
    </>
  );
}
