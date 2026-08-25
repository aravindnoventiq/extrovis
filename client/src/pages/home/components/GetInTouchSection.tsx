import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { api } from '@/lib/api';
import { useHomeContent } from '../HomeContent';

export default function GetInTouchSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const navigate = useNavigate();
  const { contactIntro } = useHomeContent();
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const phone_alt = String(fd.get('phone_alt') || '');
    try {
      await api.submitContact({
        source: 'home',
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone_alt,
      });
      navigate('/thank-you/');
    } catch {
      navigate('/thank-you/');
    }
  };

  return (
    <section ref={sectionRef} id="get-in-touch-home">
      <div className="container">
        <div className="d-flex">
          <div className="text fade-in">
            <h3 className="title large">{contactIntro.title}</h3>
            {contactIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <div className="form fade-in delay-200">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="home-name">Full name</label>
                <input type="text" id="home-name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-control">
                <label htmlFor="home-email">E-mail address</label>
                <input
                  type="email"
                  id="home-email"
                  name="email"
                  placeholder="Your e-mail"
                  required
                />
              </div>
              <input
                type="text"
                name="phone_alt"
                className="company-phone-field"
                tabIndex={-1}
                autoComplete="off"
              />
              <button type="submit" className="primary-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
          <div className="placeholder" />
        </div>
      </div>
    </section>
  );
}
