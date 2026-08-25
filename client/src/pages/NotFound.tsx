import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-5 py-32">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl md:text-8xl  text-secondary-100">404</h1>
          <h2 className="mt-4 text-2xl md:text-3xl  text-secondary-500 uppercase">
            Page Not Found
          </h2>
          <p className="mt-4 text-foreground-800 ">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/"
            className="clip-btn inline-block mt-8 px-8 py-3 bg-primary-500 text-white  font-semibold uppercase tracking-wider hover:bg-primary-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
