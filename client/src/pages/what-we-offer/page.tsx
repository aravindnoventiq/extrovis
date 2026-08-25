import PageLayout from '@/components/feature/PageLayout';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageData } from '@/hooks/usePageData';

type Offering = {
  title: string;
  description: string;
  href: string;
  cardClass: string;
  delay?: string;
};

type WhatWeOfferContent = {
  intro: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  offerings: Offering[];
};

const fallback: WhatWeOfferContent = {
  intro: {
    title: 'Integrated Expertise | Global Execution | Reliable Outcomes',
    paragraphs: [
      'Extrovis integrates scientific depth, manufacturing expertise, and global execution to advance complex dosage forms—from oncology solids and parenterals to liquids and topicals—efficiently and compliantly.',
      'Backed by decades of experience in sterile antibiotics and highly potent products, and supported by US FDA, EU GMP, and PMDA-accredited facilities, we deliver consistent quality from clinical development through commercial scale.',
      'Our streamlined supply chain, disciplined project management and regulatory pathway ensure reliable market access across 50+ countries.',
    ],
    image: '/images/our-company/reliable-supply-chain.png',
    imageAlt: 'Reliable supply chain',
  },
  offerings: [
    {
      title: 'R & D',
      description:
        'We develop novel and differentiated dosage forms in an increasingly complex environment, driven by advanced delivery technologies in a dynamic global regulatory landscape.',
      href: '/research-development/',
      cardClass: 'therapeutically-relevant-molecules',
    },
    {
      title: 'Manufacturing',
      description:
        'Our robust technology transfer processes enable rapid program initiation, while advanced process analytical technologies enhance operational efficiency and cost effectiveness',
      href: '/manufacturing/',
      cardClass: 'intensive-characterisation',
      delay: ' delay-200',
    },
    {
      title: 'Supply Chain… Truly Global',
      description:
        'As a pharmaceutical CDMO, Extrovis is uniquely positioned to support clients worldwide, delivering reliable and compliant solutions across more than 50 markets.',
      href: '/supply-chain/',
      cardClass: 'therapeutically-relevant-molecules',
      delay: ' delay-400',
    },
  ],
};

export default function WhatWeOfferPage() {
  const introRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();
  const { data } = usePageData<WhatWeOfferContent>('what-we-offer', fallback);
  const intro = { ...fallback.intro, ...data.intro };
  const offerings = data.offerings?.length ? data.offerings : fallback.offerings;

  return (
    <PageLayout title="What we offer" headerId="what-we-offer-header" navyTitle>
      <section id="our-company">
        <div ref={introRef} className="d-flex fade-in">
          <div className="text">
            <h3 className="title">{intro.title}</h3>
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="img">
            <img src={intro.image} alt={intro.imageAlt} />
          </div>
        </div>
      </section>

      <section id="our-portfolio" style={{ marginBottom: 100 }}>
        <div ref={cardsRef} className="d-flex complex-products fade-in-done">
          {offerings.map((item) => (
            <div
              key={item.title}
              className={`flex ${item.cardClass} fade-in fade-in-done${item.delay ?? ''}`}
            >
              <h4 className="title">{item.title}</h4>
              <hr />
              <p>{item.description}</p>
              <p className="pt50">
                <Link to={item.href} className="primary-btn">
                  Know More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
