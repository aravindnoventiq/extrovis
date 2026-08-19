import OfferPageLayout from '@/components/feature/OfferPageLayout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
  {
    icon: '/images/icon01.svg',
    text: 'Accelerated progression to clinic and regulatory submission',
  },
  {
    icon: '/images/icon02.svg',
    text: 'Reduced time to launch',
  },
  {
    icon: '/images/icon03.svg',
    text: 'Timely and successful market entry',
  },
];

export default function ResearchDevelopmentPage() {
  const rowRef = useScrollReveal<HTMLDivElement>();

  return (
    <OfferPageLayout
      title="Research & Development"
      breadcrumbs={[
        { label: 'What We Offer', href: '/what-we-offer/' },
        { label: 'Research & Development' },
      ]}
    >
      <section id="our-company">
        <div ref={rowRef} className="d-flex fade-in">
          <div className="text">
            <p>
              We develop novel and differentiated dosage forms in an increasingly complex
              environment, driven by advanced delivery technologies and dynamic global regulatory
              landscape. Extrovis supports sponsors in addressing these challenges through deep
              scientific expertise and proven development capabilities.
            </p>
            <p>
              Our teams bring decades of industry-leading experience to advance a broad range of
              dosage forms from early development through successful scale-up and regulatory
              approval. Depending on program requirements, we offer both fully integrated,
              end-to-end development services and stand-alone capabilities to provide targeted
              support at any stage.
            </p>
            <p>
              We partner with clients across small-molecule and synthetic peptide programs, ensuring
              a seamless transition from development to commercial manufacturing. Our global R&amp;D
              organization—comprising more than 200 scientists across three continents—has
              successfully delivered over 50 dosage forms and 30 drug substances, from concept
              through scale-up, regulatory approval, and commercialization across major global
              markets.
            </p>
            <p>
              Our expertise spans a wide range of drug product platforms, including oncology solid
              oral dosage forms, oral liquids, topicals, nasal sprays, and complex parenterals.
              Leveraging innovative technologies and well-established development strategies, we
              enable efficient formulation optimization and robust manufacturing processes to
              consistently deliver high-quality drug products.
            </p>
            <p className="pt25">
              Extrovis provides fully integrated, phase-appropriate solutions encompassing
              formulation development, process design, and primary packaging. This holistic approach
              supports product differentiation, accelerates development timelines, and enables
              effective lifecycle management—helping clients achieve:
            </p>
            {benefits.map((item, i) => (
              <h3 key={item.text} className={i === 0 ? 'pt25 benefit-line' : 'benefit-line'}>
                <img src={item.icon} alt="" className="image" /> {item.text}
              </h3>
            ))}
          </div>
          <div className="img">
            <img src="/images/RD.png" alt="Research and Development" />
          </div>
        </div>
      </section>
    </OfferPageLayout>
  );
}
