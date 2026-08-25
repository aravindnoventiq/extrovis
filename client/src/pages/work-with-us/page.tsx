import PageLayout from '@/components/feature/PageLayout';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageData } from '@/hooks/usePageData';
import { api, type CareerBenefit } from '@/lib/api';

type CareersContent = {
  intro: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  applyTitle: string;
  applyBody: string;
  hrEmail: string;
};

const fallback: CareersContent = {
  intro: {
    title: 'Unique opportunity',
    paragraphs: [
      'We aim to create a working environment where you are given professional opportunities to employ your skill set and evolve into other areas of proficiency.',
      'Your gender, your religion or political orientation and your skin colour are of no consequence to us. You earn merits based on your enthusiasm, open-mindedness, and engagement.',
      'We are based out of Switzerland with offices at multiple locations globally. We are looking to hire progressive employees who are passionate about their work wherever they are.',
    ],
    image: '/images/careers/unique-opportunity.png',
    imageAlt: 'Unique opportunity',
  },
  applyTitle: 'Apply Now',
  applyBody: 'Please submit your CV and application below, or send an e-mail to hr@extrovis.com.',
  hrEmail: 'hr@extrovis.com',
};

const fallbackBenefits: CareerBenefit[] = [
  {
    id: 1,
    title: 'International\nOpportunity',
    image: '/images/careers/international-opportunity.png',
    cardClass: 'international-opportunity',
    sortOrder: 0,
  },
  {
    id: 2,
    title: 'Diverse\nWorkforce',
    image: '/images/careers/diverse-workforce.png',
    cardClass: 'diverse-workforce',
    sortOrder: 1,
  },
  {
    id: 3,
    title: 'Professional\nDevelopment',
    image: '/images/careers/professional-development.png',
    cardClass: 'professional-development',
    sortOrder: 2,
  },
];

export default function WorkWithUsPage() {
  const navigate = useNavigate();
  const introRef = useScrollReveal<HTMLDivElement>();
  const { data } = usePageData<CareersContent>('work-with-us', fallback);
  const intro = { ...fallback.intro, ...data.intro };
  const applyTitle = data.applyTitle || fallback.applyTitle;
  const hrEmail = data.hrEmail || fallback.hrEmail;
  const [benefits, setBenefits] = useState(fallbackBenefits);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    api
      .getCareerBenefits()
      .then((res) => {
        if (res.benefits?.length) setBenefits(res.benefits);
      })
      .catch(() => {
        /* keep fallback */
      });
  }, []);

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

    if (!cvFile) {
      setStatus('error');
      setErrorMsg('Please upload your CV.');
      return;
    }

    formData.delete('phone_alt');
    formData.set('cv', cvFile);

    try {
      await api.submitCareer(formData);
      navigate('/thank-you/');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const clearCv = () => {
    setCvFile(null);
    const input = document.getElementById('cv') as HTMLInputElement | null;
    if (input) input.value = '';
  };

  return (
    <PageLayout title="Work with Us" headerId="careers-header" navyTitle>
      <section id="unique-opportunity">
        <div ref={introRef} className="d-flex fade-in">
          <div className="text">
            <h3 className="title">{intro.title}</h3>
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <div className="img">
            <img src={intro.image} alt={intro.imageAlt} />
          </div>
        </div>
      </section>

      <section id="careers">
        <div className="d-flex">
          {benefits.map((card) => (
            <div key={card.cardClass} className={`card ${card.cardClass}`}>
              <img src={card.image} alt="" />
              <div className="text">
                <h3 className="title">
                  {card.title.split('\n').map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
                <div className="line">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <img key={i} src="/images/trapeze-white.svg" alt="" className="trapeze" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="apply-now">
        <div className="container">
          <div className="apply-now-container">
            <h3 className="title">{applyTitle}</h3>
            <p>
              Please submit your CV and application below, or send an e-mail to{' '}
              <a href={`mailto:${hrEmail}`}>{hrEmail}</a>.
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
              <div className="form-control custom-upload">
                <label htmlFor="cv">
                  Upload CV* <small>(PDF/DOC/PNG | 25 MB max.)</small>
                </label>
                {!cvFile ? (
                  <button
                    type="button"
                    className="upload-cv"
                    onClick={() => document.getElementById('cv')?.click()}
                  >
                    <img src="/images/upload-red.svg" alt="" /> Upload file
                  </button>
                ) : (
                  <div className="uploaded-file">
                    <span className="filename">{cvFile.name}</span>
                    <button type="button" className="remove-cv" onClick={clearCv}>
                      <img src="/images/delete-red.svg" alt="" />
                      Delete
                    </button>
                  </div>
                )}
                <input
                  type="file"
                  name="cv"
                  id="cv"
                  accept=".pdf,.doc,.docx,.png"
                  hidden
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
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
                {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
              {status === 'error' && <p>{errorMsg}</p>}
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
