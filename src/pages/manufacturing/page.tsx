import OfferPageLayout from '@/components/feature/OfferPageLayout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ManufacturingPage() {
  const rowRef = useScrollReveal<HTMLDivElement>();

  return (
    <OfferPageLayout
      title="Manufacturing"
      breadcrumbs={[
        { label: 'What We Offer', href: '/what-we-offer/' },
        { label: 'Manufacturing' },
      ]}
    >
      <section id="our-company">
        <div ref={rowRef} className="d-flex fade-in">
          <div className="text">
            <h3 className="title">Delivering Quality | Ensuring Reliability</h3>
            <p>
              We support your project&apos;s journey to market by streamlining every stage through a
              right-first-time approach.
            </p>
            <p>
              Our robust technology transfer processes enable rapid program initiation, while
              advanced process analytical technologies enhance operational efficiency and cost
              effectiveness—accelerating progression through critical development milestones and
              toward successful regulatory approval.
            </p>
            <p>
              With decades of experience in the manufacture of sterile antibiotics and complex
              dosage forms, including highly potent, hormonal, and cytotoxic products, we
              consistently deliver high-quality outcomes.
            </p>
            <p>
              Supported by specialized technologies and state-of-the-art facilities accredited by
              leading global regulatory authorities (including US FDA, EU GMP, and PMDA), we provide
              the infrastructure and expertise required to meet the most demanding drug substance
              and drug product requirements.
            </p>
            <p>
              Employing a right-first-time approach and lightspeed principles to enhance lead-time
              efficiency, align with evolving requirements, and manage supply-chain complexities.
            </p>
            <h2 className="pt25">Simplicity in scale and scope.</h2>
            <p>Transparent partnerships - Real-time data-sharing</p>
            <p>From clinical to commercial - precisely adapting to your evolving requirements.</p>
          </div>
          <div className="img">
            <img src="/images/RD.png" alt="Manufacturing" />
          </div>
        </div>
      </section>
    </OfferPageLayout>
  );
}
