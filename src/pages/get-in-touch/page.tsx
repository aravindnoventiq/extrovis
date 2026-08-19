import PageLayout from '@/components/feature/PageLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/api';
import { useOffices, type OfficeView } from '@/hooks/useOffices';

const fallbackOffices: OfficeView[] = [
  {
    id: 'usa',
    name: 'Kavis Pharma LLC',
    country: 'USA',
    map: '/images/map/usa-map.svg',
    line: '/images/map/usa-line.svg',
    address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
  },
  {
    id: 'switzerland',
    name: 'Extrovis AG',
    country: 'Switzerland',
    map: '/images/map/switzerland-map.svg',
    line: '/images/map/switzerland-line.svg',
    address: [],
    defaultOpen: true,
  },
  {
    id: 'hungary-1',
    name: 'Pharma Pack Ltd',
    country: 'Hungary',
    map: '/images/map/hungary-map.svg',
    line: '/images/map/hungary-line-1.svg',
    address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
  },
  {
    id: 'hungary-2',
    name: 'Extrovis EU Ltd',
    country: 'Hungary',
    map: '/images/map/hungary-map.svg',
    line: '/images/map/hungary-line-2.svg',
    address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
  },
  {
    id: 'italy',
    name: 'Latina Pharma SpA',
    country: 'Italy',
    map: '/images/map/italy-map.svg',
    line: '/images/map/italy-line.svg',
    address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
  },
  {
    id: 'india-1',
    name: 'R & D Manufactureing',
    country: 'Pune',
    map: '/images/map/india-map-2.svg',
    line: '/images/map/india-line-1.svg',
    address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
  },
  {
    id: 'india-2',
    name: 'R & D Drug Product & Drug Substances',
    country: 'Hyderabad',
    map: '/images/map/india-map-2.svg',
    line: '/images/map/india-line-2.svg',
    address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
  },
];

export default function GetInTouchPage() {
  const navigate = useNavigate();
  const offices = useOffices(fallbackOffices);
  const [openOffice, setOpenOffice] = useState('switzerland');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get('phone_alt');
    if (honeypot && typeof honeypot === 'string' && honeypot.trim() !== '') {
      navigate('/thank-you/');
      return;
    }

    try {
      await api.submitContact({
        source: 'get-in-touch',
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        message: String(formData.get('message') || ''),
        phone_alt: typeof honeypot === 'string' ? honeypot : '',
      });
      navigate('/thank-you/');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <PageLayout title="Get in Touch" headerId="contact-header">
      <section id="contact">
        <div className="container">
          <div className="d-flex">
            <div className="left">
              <h3 className="title">Extrovis</h3>
              <div className="line">
                {Array.from({ length: 12 }).map((_, i) => (
                  <img key={i} src="/images/trapeze-red.svg" alt="" className="trapeze" />
                ))}
              </div>
              <ul>
                <li style={{ alignItems: 'flex-start' }}>
                  <div className="icon">
                    <img src="/images/location.png" alt="" className="trapeze" />
                  </div>
                  <div className="text">
                    <h1 className="title" style={{ fontSize: 28, lineHeight: '28px' }}>
                      Global Corporate Office
                    </h1>
                    <p>
                      <a href="https://maps.app.goo.gl/7UxmKULzUavq9ZdF6">
                        Bahnhof-Park 4, Baar 6340, Switzerland
                      </a>
                    </p>
                    <h1
                      className="title"
                      style={{ fontSize: 28, lineHeight: '28px', paddingTop: 40 }}
                    >
                      Corporate Office
                    </h1>
                    <p>
                      <a href="https://maps.app.goo.gl/nawmKZvtmVyWpu6a7">
                        67, Bazullah Road, T Nagar, Chennai 600017
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/images/telephone.png" alt="" className="trapeze" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:+41417401120">+41 41 740 1120</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/images/email.png" alt="" className="trapeze" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:corporate@extrovis.com">corporate@extrovis.com</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="right">
              <h4 className="title">Send a message</h4>
              <p>
                Whether you would like to explore the future of medicine or learn more about our
                global network and innovative solutions, send us a short message and our customer
                service team will be in contact soon.
              </p>
              <form data-readdy-form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="name">Full name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">E-mail address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your e-mail"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="message">
                    Message* <small>(max. 500 character)</small>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={1}
                    placeholder="Your message"
                    maxLength={500}
                    required
                  />
                </div>
                <div className="company-phone-field" aria-hidden="true">
                  <input
                    type="text"
                    name="phone_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    readOnly
                  />
                </div>
                <button type="submit" className="primary-btn" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Submit'}
                </button>
                {status === 'error' && <p>{errorMsg}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="map">
        <img src="/images/map/map-2.svg" alt="" className="bg" />
        {offices.map((office) => (
          <div
            key={office.id}
            className={`office ${office.id}${openOffice === office.id ? ' open' : ''}`}
            onMouseEnter={() => setOpenOffice(office.id)}
            onClick={() => setOpenOffice(office.id)}
          >
            <img src={office.map} alt="" className="office-map" />
            <div className="line">
              <div className="line-inner">
                <img src={office.line} alt="" className="line-img" />
                <div className="line-text">
                  <p className="name">{office.name}</p>
                  <small className="country">{office.country}</small>
                  {office.address.length > 0 && (
                    <div className="hided-text">
                      <div className="overflow">
                        {office.address.map((line) => (
                          <small key={line}>{line}</small>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
