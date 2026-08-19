import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface OfferPageLayoutProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}

export default function OfferPageLayout({ title, breadcrumbs, children }: OfferPageLayoutProps) {
  useEffect(() => {
    document.title = `${title} - Extrovis`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div>
      <Navbar />
      <main>
        <section id="what-we-offer-header">
          <div className="container">
            <ul
              className="breadcrumb"
              style={{
                background: 'linear-gradient(90deg, #f5f5f5 0%, #ffffff 100%)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                alignItems: 'center',
                listStyle: 'none',
                margin: '0 0 1rem',
                padding: '0.5rem 0.75rem',
              }}
            >
              {breadcrumbs.map((item, i) => (
                <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {i > 0 && <span style={{ color: '#ababab' }}>/</span>}
                  {item.href ? (
                    <Link to={item.href} style={{ color: '#0275d8' }}>
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <h1 className="title">{title}</h1>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
