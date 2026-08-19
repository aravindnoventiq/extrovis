import OfferPageLayout from '@/components/feature/OfferPageLayout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SupplyChainPage() {
  const rowRef = useScrollReveal<HTMLDivElement>();

  return (
    <OfferPageLayout
      title="Supply Chain… Truly Global"
      breadcrumbs={[
        { label: 'What We Offer', href: '/what-we-offer/' },
        { label: 'Supply Chain… Truly Global' },
      ]}
    >
      <section id="our-company">
        <div ref={rowRef} className="d-flex fade-in">
          <div className="text">
            <h3 className="title">Global Reach | Seamless Supply | Trusted Expertise.</h3>
            <p>
              As a pharmaceutical CDMO, Extrovis is uniquely positioned to support clients
              worldwide, delivering reliable and compliant solutions across more than 50 markets. We
              are a trusted partner to diverse customer segments, from small biotech to global
              pharmaceutical companies, providing market-specific solutions that align with local
              regulatory and commercial requirements.
            </p>
            <h2 className="pt25 text-blue">Seamless Supply Chain</h2>
            <p>
              Our integrated approach combines sourcing, manufacturing, and distribution across 200+
              SKUs, ensuring reliable supply continuity with built-in risk mitigation. This
              end-to-end capability allows us to respond rapidly to evolving market demands while
              maintaining consistent product availability.
            </p>
            <h2 className="pt25 text-blue">Project Management Excellence</h2>
            <p>
              Extrovis delivers disciplined project execution through proactive planning, transparent
              communication, and rigorous milestone tracking. Our approach accelerates timelines
              across all various stages of development, regulatory filings and supply chain,
              ensuring projects progress efficiently from concept to commercialization.
            </p>
            <h2 className="pt25 text-blue">Proven Regulatory Expertise</h2>
            <p>
              With deep knowledge of country-specific requirements and filings, our regulatory teams
              enable faster approvals through compliant, right-first-time submissions. This
              expertise reduces risk, supports global market entry, and ensures our clients can
              confidently bring products to patients worldwide.
            </p>
            <p>
              By combining global reach, robust supply chain management, project management rigor,
              and regulatory expertise, Extrovis provides the infrastructure, experience, and
              agility to meet the most demanding pharmaceutical development and manufacturing needs.
            </p>
          </div>
          <div className="img">
            <img src="/images/RD.png" alt="Supply Chain" />
          </div>
        </div>
      </section>
    </OfferPageLayout>
  );
}
