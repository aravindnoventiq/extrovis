import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useHomeContent } from '../HomeContent';

export default function WhatWeOfferSection() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.15 });
  const { servicesIntro, serviceCards: services } = useHomeContent();

  return (
    <section ref={sectionRef} id="what-we-offer-home" style={{ padding: '4rem 0 0' }}>
      <div className="container-n fade-in">
        <h3 className="title">{servicesIntro.title}</h3>
        {servicesIntro.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
        <p style={{ fontWeight: 600, color: '#333' }}>{servicesIntro.closing}</p>
      </div>
      <div className="cards">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`card fade-in${i === 1 ? ' delay-200' : i === 2 ? ' delay-400' : ''}`}
          >
            <div className="imgs">
              <div className="img">
                <img src={service.lightIcon} alt="" className="light" />
              </div>
              <div className="img">
                <img src={service.blueIcon} alt="" className="blue" />
              </div>
            </div>
            <div className="text">
              <h4 className="title">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
