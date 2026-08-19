import PageLayout from '@/components/feature/PageLayout';
import { useEffect, useRef, useState } from 'react';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const IMG = '/images';

const usps = [
  { title: 'Innovative Products', image: `${IMG}/our-company/innovative-products.svg` },
  { title: 'Quality assurance', image: `${IMG}/our-company/quality-assurance.svg` },
  { title: 'Worldwide supply chain', image: `${IMG}/our-company/worldwide-supply-chain.svg` },
  { title: 'Ethical operations', image: `${IMG}/our-company/ethical-operations.svg` },
];

const rdFeatures = [
  {
    title: 'Of over 200 scientists',
    image: `${IMG}/our-company/of-over-200-scientists.png`,
    text: 'Our entities employ a team of over 200 scientists and researchers dedicated to developing our complex APIs and finished dosage form pharmaceutical products.',
  },
  {
    title: 'Collaboration + Specialization',
    image: `${IMG}/our-company/collaboration-specialization.png`,
    text: 'Each of our teams specialize in different areas of expertise, with the full support and collaboration of all our other divisions, particularly our experienced Development Quality Assurance and Analytical Teams.',
  },
  {
    title: 'Cross-functional approach',
    image: `${IMG}/our-company/cross-functional-approach.png`,
    text: 'We apply a cross-functional approach utilizing expertise from multiple disciplines such as analytical, engineering, quality assurance, clinical, and regulatory affairs.',
  },
  {
    title: 'Passion and professionalism',
    image: `${IMG}/our-company/passion-and-professionalism.png`,
    text: 'Our scientific and technical teams maintain a mindset of passion, and exceptional professionalism, matched by speed, flexibility, and a desire for value creation for stakeholders and customers worldwide.',
  },
];

const manufacturingFeatures = [
  {
    title: 'MULTIPLE DOSAGE FORMS',
    image: `${IMG}/our-company/diverse-subsidiaries.svg`,
    text: 'Our manufacturing subsidiaries are equipped with infrastructure to produce a wide range of oral, parenteral and topical dosage forms including high containment products like antibiotics, oncology and female hormonal products.',
  },
  {
    title: 'Supply continuity',
    image: `${IMG}/our-company/supply-continuity.svg`,
    text: 'Our backward integration approach combined with quality centricity and regulatory compliance at the core of the entire value chain ensures long term supply continuity.',
  },
  {
    title: 'Quality management',
    image: `${IMG}/our-company/quality-management.svg`,
    text: 'The Extrovis Global Quality Management System oversees the entire manufacturing process, while our alliance management function gets involved with our partners every step of the way.',
  },
];

const commercialCapabilities = [
  'GLOBAL STABILITY AND METHOD VALIDATION CAPABILITIES',
  'PRIMARY & SECONDARY PACKAGING INCLUDING LATE-STAGE CUSTOMIZATION OF VARIOUS DOSAGE FORMS',
  'SERIALIZATION',
  'IMPORTATION, RE-TESTING AND RELEASE IN THE EU',
  'REGULATORY AND PHARMACOVIGILANCE PROCEDURES',
  'SUPPLY CHAIN CO-ORDINATION AND CUSTOMER CARE',
];

const teamStats = [
  { label: 'Research & development', count: '250' },
  { label: 'MANUFACTURING AND QUALITY', count: '450' },
  { label: 'REGULATORY, CLINICAL & PRODUCT DELIVERY', count: '50' },
];

const countries = [
  { name: 'India', flag: `${IMG}/our-company/india.svg`, count: '275' },
  { name: 'US', flag: `${IMG}/our-company/usa.svg`, count: '90' },
  { name: 'Hungary', flag: `${IMG}/our-company/hungary.svg`, count: '40' },
  { name: 'Italy', flag: `${IMG}/our-company/italy.svg`, count: '330' },
  { name: 'Switzerland', flag: `${IMG}/our-company/switzerland.svg`, count: '10' },
];

const offices = [
  { name: 'Kavis Pharma LLC', country: 'USA', map: `${IMG}/map/usa-map.svg`, top: '35%', left: '18%' },
  { name: 'Extrovis AG', country: 'Switzerland', map: `${IMG}/map/switzerland-map.svg`, top: '32%', left: '48%' },
  { name: 'Pharma Pack Ltd', country: 'Hungary', map: `${IMG}/map/hungary-map.svg`, top: '30%', left: '52%' },
  { name: 'Extrovis EU Ltd', country: 'Hungary', map: `${IMG}/map/hungary-map.svg`, top: '34%', left: '53%' },
  { name: 'Latina Pharma SpA', country: 'Italy', map: `${IMG}/map/italy-map.svg`, top: '36%', left: '49%' },
  { name: 'Development Centres', country: 'India', map: `${IMG}/map/india-map-2.svg`, top: '48%', left: '68%' },
];

function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-secondary-500 px-6 md:px-10 lg:px-16 py-5 md:py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl  text-white uppercase tracking-wide">
          {children}
        </h2>
        <img
          src={`${IMG}/triangle-red.svg`}
          alt=""
          className="w-5 h-5 md:w-6 md:h-6 shrink-0"
        />
      </div>
    </div>
  );
}

export default function OurCompanyPage() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();
  const ref5 = useScrollAnimation();
  const ref6 = useScrollAnimation();
  const ref7 = useScrollAnimation();
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);

  return (
    <PageLayout title="Our company">
      {/* Global Presence */}
      <section className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-12 md:py-16">
        <div ref={ref1} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-3/5 space-y-5 text-foreground-600 ">
              <h2 className="text-xl md:text-2xl  text-secondary-500 uppercase tracking-wide">
                Global Presence
              </h2>
              <p>
                The Extrovis Group is headquartered in Switzerland, operating worldwide with
                subsidiaries and affiliates in India, the EU and the US, focusing on serving diverse
                pharmaceutical companies through a combination of products and services. We are
                dedicated to creating a value for our customers by developing and delivering quality
                products that make human lives better, simpler, and more convenient - through the
                improvement of healthcare and medicine.
              </p>
            </div>
            <div className="lg:w-2/5 w-full">
              <img
                src={`${IMG}/our-company/global-presence.png`}
                alt="Global presence"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto pb-12 md:pb-16">
        <div ref={ref2} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
            <div className="lg:w-3/5 space-y-5 text-foreground-600 ">
              <h2 className="text-xl md:text-2xl  text-secondary-500 uppercase tracking-wide">
                VALUE PROPOSITION
              </h2>
              <p>
                At Extrovis, we are dedicated to enable a healthier world by supporting our
                pharmaceutical customers on product development, regulatory process and commercial
                manufacturing and supply. Working across three continents, our global community of
                approximately 750+ colleagues help pharmaceutical companies to bring their products
                to market.
              </p>
              <p>
                United by our vision &lsquo;Dedicated to Better&rsquo;, we support our customers with
                a combination of Scientific expertise, technological insight, world-class
                manufacturing, process excellence and innovation. Through our teamwork, we enable
                development and commercialization of their therapeutic discoveries of our customers
                across the globe.
              </p>
            </div>
            <div className="lg:w-2/5 w-full">
              <img
                src={`${IMG}/our-company/strategic-approach.png`}
                alt="Strategic approach"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="w-full bg-secondary-500">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
          {usps.map((usp, index) => (
            <div
              key={usp.title}
              className={`p-6 md:p-8 lg:p-10 text-center border-b md:border-b-0 border-white/10 ${
                index < usps.length - 1 ? 'md:border-r border-white/10' : ''
              }`}
            >
              <img src={usp.image} alt={usp.title} className="w-12 h-12 mx-auto mb-4" />
              <h5 className="text-xs md:text-sm  text-white uppercase tracking-wide">
                {usp.title}
              </h5>
            </div>
          ))}
        </div>
      </section>

      {/* Research & development */}
      <section className="w-full">
        <PanelTitle>Research &amp; development</PanelTitle>
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-12 md:py-16">
          <div ref={ref3} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-12 md:mb-16">
              <div className="lg:w-3/5 space-y-5 text-foreground-600 ">
                <h3 className="text-lg md:text-xl  text-secondary-500 uppercase tracking-wide">
                  PASSION FOR RESEARCH
                </h3>
                <p>
                  Our research and development centers are focused on creating solutions to address
                  un/undermet needs of the healthcare professionals and patients around the world by
                  delivering differentiated products, new dosage forms, and complex APIs for our
                  customers.
                </p>
              </div>
              <div className="lg:w-2/5 w-full">
                <img
                  src={`${IMG}/our-company/unique-research-centres.png`}
                  alt="Unique research centres"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {rdFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${
                    index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-contain mb-4"
                  />
                  <h5 className="text-sm   text-secondary-500 uppercase tracking-wide mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-foreground-600 ">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="w-full bg-secondary-100/40">
        <PanelTitle>Manufacturing</PanelTitle>
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-12 md:py-16">
          <div ref={ref4} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-12 md:mb-16">
              <div className="lg:w-3/5 space-y-5 text-foreground-600 ">
                <h3 className="text-lg md:text-xl  text-secondary-500 uppercase tracking-wide">
                  GLOBAL NETWORK AND COMPLIANCE
                </h3>
                <p>
                  The Extrovis Group operates a worldwide network of state-of-the-art manufacturing
                  facilities seamlessly integrated into the group. These facilities comply with the
                  highest international quality standards with accreditations from the USFDA, EU and
                  other global regulatory bodies.
                </p>
              </div>
              <div className="lg:w-2/5 w-full">
                <img
                  src={`${IMG}/our-company/worldwide-network.png`}
                  alt="Worldwide network"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {manufacturingFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`text-center md:text-left animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${
                    index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-14 h-14 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 object-contain"
                  />
                  <h5 className="text-sm  text-secondary-500 uppercase tracking-wide mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-foreground-600 ">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="w-full">
        <PanelTitle>Commercial</PanelTitle>
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-12 md:py-16">
          <div ref={ref5} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="lg:w-3/5 space-y-5 text-foreground-600 ">
                <h3 className="text-lg md:text-xl  text-secondary-500 uppercase tracking-wide">
                  END-TO-END PRODUCT DELIVERY
                </h3>
                <p>
                  We are dedicated to address the supply chain complexity of the global
                  pharmaceutical markets by reconciling high volume, efficient manufacturing with
                  medium to small volume order demand.
                </p>
                <ul className="space-y-3 pt-2">
                  {commercialCapabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3  font-semibold text-secondary-500 uppercase tracking-wide"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-2/5 w-full">
                <img
                  src={`${IMG}/our-company/reliable-supply-chain.png`}
                  alt="Reliable supply chain"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Extrovis */}
      <section className="w-full bg-background-100 py-12 md:py-16">
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl  text-secondary-500 uppercase tracking-wide mb-8 md:mb-10">
            Team Extrovis
          </h2>
          <div ref={ref6} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {teamStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white p-6 md:p-8 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${
                  index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''
                }`}
              >
                <h4 className="text-xs  text-secondary-500 uppercase tracking-wide mb-3 min-h-[2.5rem] flex items-center justify-center">
                  {stat.label}
                </h4>
                <h3 className="text-3xl md:text-4xl  text-secondary-500">
                  {stat.count}
                  <span className="text-base align-top">+</span>
                </h3>
                <p className="text-xs text-foreground-500 mt-1">employees</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Total FTE bar */}
      <section className="w-full bg-secondary-500 py-4 md:py-5">
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-sm  text-white uppercase tracking-wide whitespace-nowrap">
              Total FTE
            </span>
            <div className="flex-1 h-1 bg-white/20">
              <div className="h-full bg-white" style={{ width: '100%' }} />
            </div>
            <span className="text-xl md:text-2xl  text-white whitespace-nowrap">
              750<sup className="text-sm">+</sup>
            </span>
          </div>
        </div>
      </section>

      {/* World map */}
      <section className="w-full relative py-8 md:py-12 overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <img src={`${IMG}/map/map-2.svg`} alt="World map" className="w-full h-auto" />
          {offices.map((office, idx) => (
            <div
              key={office.name}
              className="absolute cursor-pointer"
              style={{ top: office.top, left: office.left }}
              onMouseEnter={() => setHoveredOffice(idx)}
              onMouseLeave={() => setHoveredOffice(null)}
            >
              <img src={office.map} alt={office.country} className="w-8 md:w-12 h-auto" />
              {hoveredOffice === idx && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-secondary-500 text-white text-xs p-3 whitespace-nowrap z-10">
                  <p className="font-bold">{office.name}</p>
                  <p className="text-white/70">{office.country}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Country FTE breakdown */}
      <section className="w-full bg-background-100 py-8 md:py-12">
        <div ref={ref7} className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className={`flex items-center gap-4 py-4 border-y border-background-300 -mt-px animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${
                  index === 1
                    ? 'delay-100'
                    : index === 2
                      ? 'delay-200'
                      : index === 3
                        ? 'delay-300'
                        : index === 4
                          ? 'delay-400'
                          : ''
                }`}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <span className="text-sm font-medium text-secondary-500 flex-1">{country.name}</span>
                <strong className="text-lg text-secondary-500 whitespace-nowrap">
                  {country.count} FTE ≈
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
