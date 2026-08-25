import { Link } from 'react-router-dom';

const footerNavLinks = [
  { label: 'Who We Are', href: '/who-we-are/' },
  { label: 'What We Offer', href: '/what-we-offer/' },
  { label: 'Manufacturing Drug Substances', href: '/manufacturing-drug-substances/' },
  { label: 'Manufacturing Drug Products', href: '/manufacturing-drug-products/' },
  { label: 'Leadership', href: '/leadership/' },
  { label: 'Get in touch', href: '/get-in-touch/' },
  { label: 'Work with Us', href: '/work-with-us/' },
];

const legalLinks = [
  { label: 'Legal Disclaimer', href: '/legal-disclaimer/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="d-flex">
            <div className="logo">
              <Link to="/">
                <img src="/images/extrovis-logo-white.svg" alt="Extrovis" />
              </Link>
            </div>
            <div className="navs">
              <ul>
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex">
            <div className="copyright">
              <span>Copyright &copy; 2025 Extrovis | Powered by Extrovis</span>
            </div>
            <div className="legals">
              <ul>
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
