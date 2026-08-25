import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  documentTitle?: string;
  /** Use navy 80px H1 (manufacturing drug pages) instead of lavender display scale */
  navyTitle?: boolean;
  headerId?: string;
}

export default function PageLayout({
  children,
  title,
  documentTitle,
  navyTitle = false,
  headerId = 'our-company-header',
}: PageLayoutProps) {
  useEffect(() => {
    document.title = documentTitle ?? `${title} - Extrovis`;
    window.scrollTo(0, 0);
  }, [title, documentTitle]);

  return (
    <div>
      <Navbar />
      <main>
        <section
          id={headerId}
          className={navyTitle ? 'h1-navy page-header-navy' : undefined}
        >
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
