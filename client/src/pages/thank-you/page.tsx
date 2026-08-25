import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function ThankYouPage() {
  useEffect(() => {
    document.title = 'Thank you - Extrovis';
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-5 py-32">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  text-secondary-500 uppercase tracking-wide">
            Thank you
          </h1>
          <p className="mt-6  md:text-lg text-foreground-800 ">
            Thank you very much for your message, we will contact you soon!
          </p>
          <Link
            to="/"
            className="clip-btn inline-block mt-10 px-8 py-3 bg-primary-500 text-white  font-semibold uppercase tracking-wider hover:bg-primary-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
