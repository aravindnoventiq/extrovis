import PageLayout from '@/components/feature/PageLayout';
import { useEffect, useRef } from 'react';

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

function TrapezeLine({ count = 12 }: { count?: number }) {
  return (
    <div className="flex flex-wrap gap-0.5 my-4">
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={`${IMG}/trapeze-blue.svg`}
          alt=""
          className="w-3 h-3 object-contain"
        />
      ))}
    </div>
  );
}

const deliveryCapabilities = [
  {
    label: 'GLOBAL STABILITY AND METHOD VALIDATION CAPABILITIES',
    icon: `${IMG}/our-way/global-stability-blue.svg`,
  },
  {
    label: 'PRIMARY & SECONDARY PACKAGING INCLUDING LATE-STAGE CUSTOMIZATION OF VARIOUS DOSAGE FORMS',
    icon: `${IMG}/our-way/packaging-blue.svg`,
  },
  {
    label: 'SERIALIZATION',
    icon: `${IMG}/our-way/serialization-blue.svg`,
  },
  {
    label: 'IMPORTATION, RE-TESTING AND RELEASE IN THE EU',
    icon: `${IMG}/our-way/packaging-blue.svg`,
  },
  {
    label: 'REGULATORY AND PHARMACOVIGILANCE PROCEDURES',
    icon: `${IMG}/our-way/managing-blue.svg`,
  },
  {
    label: 'SUPPLY CHAIN CO-ORDINATION AND CUSTOMER CARE',
    icon: `${IMG}/our-way/customer-care-blue.svg`,
  },
];

const fdfStrategyItems = [
  { title: 'Niche Opportunities', icon: `${IMG}/our-way/niche-opportunities-blue.svg` },
  { title: 'In-depth Research', icon: `${IMG}/our-way/in-depth-research-blue.svg` },
  { title: 'Speed & Flexibility', icon: `${IMG}/our-way/speed-flexibility-blue.svg` },
];

export default function OurWayPage() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();
  const ref5 = useScrollAnimation();

  return (
    <PageLayout title="Our Way">
      {/* Intro */}
      <section className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-12 md:py-16">
        <div ref={ref1} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:w-3/5 space-y-5 text-foreground-600 ">
              <h2 className="text-xl md:text-2xl  text-secondary-500 uppercase tracking-wide leading-snug">
                From Research to Product Delivery Dedicated to Serve the Needs of Global
                Pharmaceutical Company
              </h2>
              <p>
                The Extrovis Group incorporates subsidiaries that span from research &amp;
                development and manufacturing to regulatory approval. Our state-of-the-art
                manufacturing facilities ensure the production of high-quality pharmaceutical
                products that meet rigorous industry standards and comply with global regulatory
                requirements.
              </p>
            </div>
            <div className="lg:w-2/5 w-full">
              <img
                src={`${IMG}/our-way/from-research-to-commercial.png`}
                alt="From research to commercial"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="w-full bg-secondary-100/50 py-10 md:py-14">
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl  text-secondary-500 uppercase tracking-wide mb-8 md:mb-12">
            Strategic Pillars
          </h2>

          <div ref={ref2} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-10 md:mb-14">
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                  Research &amp; Development
                </h4>
                <TrapezeLine count={16} />
                <p className="text-sm text-foreground-600 ">
                  Our research and development centres are focused on creating solutions to address
                  un/undermet needs of the healthcare professionals and patients around the world by
                  delivering differentiated products, new dosage forms and complex APIs. To keep us
                  at the forefront of innovation in pharmaceutical process and intellectual property
                  development, Extrovis concurrently maintains strategy and development teams in
                  India, the EU, and the USA.
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                  STRATEGIC PARTNERSHIPS
                </h4>
                <TrapezeLine count={16} />
                <p className="text-sm text-foreground-600  mb-4">
                  As B2B is at the heart of our business model we work with several of the top
                  pharmaceutical companies globally. Products based on our proprietary ideas are
                  partnered for one or more territories at different stages of the development
                  cycle.
                </p>
                <p className="text-sm text-foreground-600 ">
                  We operate with the combination of product supply and our supporting services that
                  provides our partners with the flexibility of choosing between product supply from
                  the Extrovis sites or bringing manufacturing in-house.
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 flex items-center justify-center lg:justify-end">
                <img
                  src={`${IMG}/our-way/strategic-pillars-trapeze.svg`}
                  alt=""
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* End-to-end product delivery */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                  END-TO-END PRODUCT DELIVERY
                </h4>
                <TrapezeLine count={10} />
                <p className="text-sm text-foreground-600  mb-6">
                  We are dedicated to address the supply chain complexity of global pharmaceutical
                  markets by reconciling high volume, efficient manufacturing with medium to small
                  volume order demand.
                </p>
                <ul className="space-y-4">
                  {deliveryCapabilities.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-8 h-8 md:w-9 md:h-9 shrink-0 object-contain mt-0.5"
                      />
                      <p className="text-xs md:text-sm  text-secondary-500 uppercase tracking-wide leading-snug">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GMP Manufacturing */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                  GMP Manufacturing
                </h4>
                <TrapezeLine count={10} />

                <h5 className="text-sm  text-secondary-500 uppercase tracking-wide mb-2">
                  API GMP Manufacturing
                </h5>
                <p className="text-sm text-foreground-600  mb-5">
                  Extrovis Group operates state-of-the-art API manufacturing facilities with decades
                  of experience and regulatory track record. The API manufacturing site is located
                  in Italy with capabilities to handle high containment tonnage products including
                  Penicillin, sterile Cephalosporins and Monobactams (Oral and Sterile).
                </p>

                <hr className="border-secondary-200 mb-5" />

                <h5 className="text-sm  text-secondary-500 uppercase tracking-wide mb-2">
                  FDF GMP Manufacturing
                </h5>
                <div className="space-y-4  text-foreground-600 ">
                  <p>
                    Our manufacturing subsidiaries are equipped with infrastructure to produce a
                    wide range of oral, parenteral and topical dosage forms including high
                    containment products like antibiotics, oncology and female hormonal products.
                  </p>
                  <p>
                    A part of our portfolio is manufactured by contract manufacturing partners based
                    on capacity sharing arrangements with the Extrovis Group to ensure long term
                    supply continuity. The Extrovis Global Quality Management System oversees the
                    entire manufacturing process, while our alliance management function gets
                    involved with our partners every step of the way.
                  </p>
                  <p>
                    Our manufacturing sites are located in India, Italy, Hungary and in the United
                    States of America.
                  </p>
                  <p>
                    Our sites are approved by several regulatory authorities including USFDA and EU.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finished Dosage Forms */}
      <section className="w-full py-12 md:py-16">
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  text-secondary-500 uppercase tracking-wide mb-8 md:mb-12 leading-tight">
            Finished
            <br />
            Dosage Forms
          </h2>

          {/* Row 1: Portfolio Strategy + trapeze + R&D */}
          <div ref={ref3} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-12 md:mb-16 items-start">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                FDF Portfolio Strategy
              </h4>
              <TrapezeLine count={9} />
              <p className="text-sm text-foreground-600  mb-6">
                We maintain a balanced FDF portfolio that is driven by innovation. Our strategy
                focuses on formulation improvements that offer increased bioavailability, patient
                compliance and convenience, overall cost efficiency of therapy and/or medical waste
                management.
              </p>
              <ul className="space-y-4">
                {fdfStrategyItems.map((item) => (
                  <li key={item.title} className="flex items-center gap-4">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-10 h-10 shrink-0 object-contain"
                    />
                    <h5 className="text-sm  text-secondary-500 uppercase tracking-wide">
                      {item.title}
                    </h5>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 flex justify-center">
              <img
                src={`${IMG}/our-way/finished-dosage-forms-1-trapeze.svg`}
                alt=""
                className="w-full max-w-xs h-auto object-contain"
              />
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                FDF Research and development
              </h4>
              <TrapezeLine count={9} />
              <p className="text-sm text-foreground-600  mb-4">
                The R&amp;D teams of the Extrovis Group apply a cross-functional approach utilizing
                expertise from multiple disciplines such as analytical, engineering, quality
                assurance, clinical, and regulatory affairs.
              </p>
              <p className="text-sm text-foreground-600 ">
                Our state-of-the-art development centres supported by a team of over 200 scientists
                has a proven track record of taking highly complex products and unique technologies
                from a portfolio concept to commercialisation.
              </p>
            </div>
          </div>

          {/* Row 2: trapeze + Backward Integration + Regulatory Affairs */}
          <div ref={ref4} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-12 md:mb-16 items-start">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex justify-center lg:justify-start">
              <img
                src={`${IMG}/our-way/finished-dosage-forms-2-trapeze.svg`}
                alt=""
                className="w-full max-w-xs h-auto object-contain"
              />
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                Backward Integration
              </h4>
              <TrapezeLine count={9} />
              <p className="text-sm text-foreground-600 ">
                In-house development of critical or low availability APIs to ensure long term cost
                competitiveness and supply chain continuity for our key projects.
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 relative">
              <h4 className="text-base md:text-lg  text-secondary-500 uppercase tracking-wide">
                Regulatory Affairs
              </h4>
              <TrapezeLine count={9} />
              <p className="text-sm text-foreground-600  mb-6">
                The regulatory teams of the Extrovis Group are located globally across Europe, the
                United States, and India are capable of developing regulatory strategies and
                managing dossier submissions and compliance in multiple regulatory territories.
              </p>
              <img
                src={`${IMG}/our-way/regulatory-affairs-bg.svg`}
                alt=""
                className="w-full max-w-sm h-auto object-contain opacity-90"
              />
            </div>
          </div>

          {/* Bottom trapeze decoration */}
          <div ref={ref5} className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src={`${IMG}/our-way/finished-dosage-forms-3-trapeze.svg`}
                alt=""
                className="w-full h-auto object-contain relative z-10"
              />
              <img
                src={`${IMG}/our-way/finished-dosage-forms-3-bg.png`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80 -z-0"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
