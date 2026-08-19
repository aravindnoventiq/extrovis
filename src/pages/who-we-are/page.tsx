import { useEffect, useState, Fragment } from 'react';
import PageLayout from '@/components/feature/PageLayout';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageData } from '@/hooks/usePageData';
import { useOffices, type OfficeView } from '@/hooks/useOffices';

type WhoWeAreContent = {
  usps: { title: string; image: string; delay: string }[];
  teamStats: { label: string; count: number; delay: string }[];
};

const fallbackContent: WhoWeAreContent = {
  usps: [
    { title: 'Innovative Products', image: '/images/our-company/innovative-products.svg', delay: '' },
    { title: 'Quality assurance', image: '/images/our-company/quality-assurance.svg', delay: ' delay-200' },
    { title: 'Worldwide supply chain', image: '/images/our-company/worldwide-supply-chain.svg', delay: ' delay-400' },
    { title: 'Ethical operations', image: '/images/our-company/ethical-operations.svg', delay: ' delay-600' },
  ],
  teamStats: [
    { label: 'Research & development', count: 250, delay: '' },
    { label: 'MANUFACTURING AND QUALITY', count: 450, delay: ' delay-200' },
    { label: 'REGULATORY, CLINICAL & PRODUCT DELIVERY', count: 50, delay: ' delay-400' },
    { label: 'Total FTEs', count: 750, delay: ' delay-400' },
  ],
};

const countryCols = [
  [
    { name: 'India', flag: '/images/our-company/india.svg', count: 340, suffix: '+' },
    { name: 'US', flag: '/images/our-company/usa.svg', count: 70, suffix: ' + ' },
  ],
  [
    { name: 'Hungary', flag: '/images/our-company/hungary.svg', count: 40, suffix: ' +' },
    { name: 'Italy', flag: '/images/our-company/italy.svg', count: 290, suffix: ' +' },
  ],
  [{ name: 'Switzerland', flag: '/images/our-company/switzerland.svg', count: 10, suffix: ' +' }],
];

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

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const duration = 1200;
    let raf = 0;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setValue(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return value;
}

function TeamStat({
  label,
  count,
  active,
  delay,
}: {
  label: string;
  count: number;
  active: boolean;
  delay: string;
}) {
  const value = useCountUp(count, active);
  return (
    <div className={`flex fade-in${delay}`}>
      <h4 className="title">{label}</h4>
      <h3 className="title">
        <span className="counter" data-number={count}>
          {value}
        </span>
        +<small>employees</small>
      </h3>
    </div>
  );
}

function CountryCount({ count, suffix, active }: { count: number; suffix: string; active: boolean }) {
  const value = useCountUp(count, active);
  return (
    <strong>
      <span className="counter" data-number={count}>
        {value}
      </span>
      {suffix}
    </strong>
  );
}

export default function WhoWeArePage() {
  const { data } = usePageData<WhoWeAreContent>('who-we-are', fallbackContent);
  const usps = data.usps?.length ? data.usps : fallbackContent.usps;
  const teamStats = data.teamStats?.length ? data.teamStats : fallbackContent.teamStats;
  const offices = useOffices(fallbackOffices);
  const [openOffice, setOpenOffice] = useState('switzerland');
  const [statsActive, setStatsActive] = useState(false);
  const [countriesActive, setCountriesActive] = useState(false);
  const mainRef = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const el = document.getElementById('extrovis-group');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsActive(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById('countries');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountriesActive(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const totalFte = useCountUp(750, statsActive);

  return (
    <PageLayout title="Who We Are" documentTitle="Who We Are - Extrovis" navyTitle>
      <div ref={mainRef} className="who-we-are-page">
        <section id="our-company">
          <div className="d-flex fade-in">
            <div className="text">
              <h3 className="title">We believe better science leads to better health outcomes</h3>
              <p>
                Extrovis exists to create meaningful impact in global healthcare — by transforming
                complex pharmaceutical innovation into therapies that are safer, more accessible, and
                optimized for real-world use by patients and healthcare providers.
              </p>
              <p>
                Headquartered in Switzerland, with operations across the USA, Italy, Hungary, and
                India, we operate as a global Contract Research, Development &amp; Manufacturing
                Organization (CRDMO).
              </p>
              <p>
                We partner with leading pharmaceutical companies through long-term, accountable
                collaboration models — supporting them in the launch, scale, and sustained
                availability of advanced specialty medicines across high-need therapeutic areas.
              </p>
              <p>
                Our strength lies in deep R&amp;D capabilities, global manufacturing excellence, and
                strategic alliance mindset — working with a clear purpose: to enable reliable access
                to critical medicines for healthcare systems worldwide.
              </p>
            </div>
            <div className="img">
              <img src="/images/our-company/unique-research-centres.png" alt="" />
            </div>
          </div>
          <div className="d-flex fade-in" style={{ background: '#14146e', color: '#FFF' }}>
            <div className="text" style={{ borderRight: '1px solid #FFF' }}>
              <h3 className="title" style={{ color: '#FFF' }}>
                Mission
              </h3>
              <p>
                To build a future-ready, quality centric integrated pharmaceutical ecosystem
                delivering specialty products across diverse therapies that enhance the quality of
                life.
              </p>
              <p>
                To drive sustainable growth through science-led innovation, technology-driven
                solutions, and trusted partnerships that ensure superior patient outcomes and reliable
                global manufacturing and supply chain excellence.
              </p>
            </div>
            <div className="text">
              <h3 className="title" style={{ color: '#FFF' }}>
                Vision
              </h3>
              <p>
                From Molecules into meaningful Innovations through Science, Collaboration, and
                Human-centereddelivery
              </p>
              <p style={{ color: '#14146e' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
        </section>

        <section id="our-company">
          <div className="d-flex">
            <div className="text">
              <h3 className="title large">A Global CRDMO with Purpose and Precision</h3>
              <p>
                Our approach is grounded in quality excellence, strategic global partnerships, and
                manufacturing integrity — focused on delivering meaningful therapeutic value to
                healthcare systems worldwide.
              </p>
              <p>
                With 750+ professionals across Switzerland, the USA, Italy, Hungary, and India,
                Extrovis combines scientific expertise, operational excellence, and regulatory rigor
                to advance medicines with measurable health impact.
              </p>
              <h2>
                <strong>We specialize in high-impact therapy areas such as:</strong>
              </h2>
              <h3 className="pt25">Oncology</h3>
              <h3>Sterile Antibiotics &amp; Anti-infectives</h3>
              <h3>High-Containment and Complex Manufacturing</h3>
            </div>
          </div>
          <div className="usps">
            {usps.map((usp) => (
              <div key={usp.title} className={`usp fade-in${usp.delay}`}>
                <div className="img">
                  <img src={usp.image} alt="" />
                </div>
                <h5 className="title">{usp.title}</h5>
              </div>
            ))}
          </div>
        </section>

        <section id="our-company-header" className="h1-navy">
          <div className="container">
            <h1 className="title">How We Make It Possible</h1>
          </div>
        </section>

        <section id="our-company">
          <div className="d-flex fade-in">
            <div className="text">
              <h3 className="title">Deep R&amp;D Intelligence</h3>
              <p>
                Complex generics, drug–device combinations, peptides, sterile injectables, and
                bioavailability enhancement technologies.
              </p>
              <h3 className="title pt50">Global Manufacturing Backbone</h3>
              <p>
                US FDA &amp; EU-GMP approved sites in USA, Italy &amp; Hungary, with packaging and
                late-stage customization in Europe and Asia.
              </p>
              <h3 className="title pt50">Alliance Management Excellence </h3>
              <p>
                We collaborate with top global pharma through scalable, trust-driven partnership
                models.
              </p>
              <h3 className="title pt50">Patient &amp; HCP Centricity </h3>
              <p>
                Every innovation is designed with real-world usability, safety, and treatment
                efficiency in mind.
              </p>
            </div>
            <div className="img">
              <img src="/images/our-company/worldwide-network.png" alt="" />
            </div>
          </div>
        </section>

        <section id="extrovis-group-header" className="page-header-navy">
          <div className="container">
            <h2 className="title">Team Extrovis</h2>
          </div>
        </section>

        <section id="extrovis-group" className="counter-outter">
          <div className="d-flex">
            {teamStats.map((stat) => (
              <TeamStat
                key={stat.label}
                label={stat.label}
                count={stat.count}
                active={statsActive}
                delay={stat.delay}
              />
            ))}
          </div>
        </section>

        <section id="total-fte" className="counter-outter">
          <div className="container">
            <div className="d-flex">
              <div className="flex">
                <span>Total FTE</span>
              </div>
              <div className="full">
                <div className="full-line" />
              </div>
              <div className="flex">
                <span>
                  <strong className="counter" data-number={750}>
                    {totalFte}
                    <sup>+</sup>
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="map">
          <img src="/images/map/map-2.svg" alt="" className="bg" />
          {offices.map((office) => (
            <div
              key={office.id}
              className={`office ${office.id} ${openOffice === office.id ? 'open' : ''}`}
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
                    <div className="hided-text">
                      {office.address.length > 0 && (
                        <div className="overflow">
                          {office.address.map((line) => (
                            <small key={line}>{line}</small>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="countries" className="counter-outter-2">
          <div className="container">
            <div className="d-flex">
              {countryCols.map((col, ci) => (
                <div key={ci} className="flex">
                  <hr />
                  {col.map((country) => (
                    <Fragment key={country.name}>
                      <div className="country">
                        <div className="left">
                          <img src={country.flag} alt="" />
                          <span>{country.name}</span>
                        </div>
                        <div className="right">
                          <CountryCount
                            count={country.count}
                            suffix={country.suffix}
                            active={countriesActive}
                          />
                        </div>
                      </div>
                      <hr />
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
