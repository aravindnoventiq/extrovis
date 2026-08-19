import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useHomeContent } from '../HomeContent';

export default function AdvancingMedicineSection() {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 70, stagger: 0.18 });
  const { advancingMedicine } = useHomeContent();
  const pillars = advancingMedicine.pillars;

  return (
    <section ref={sectionRef} id="extrovis-group-home">
      <div className="container">
        <h2
          className="title-n fade-in"
          style={{ margin: '20px 0', color: '#14146e', fontWeight: 600 }}
        >
          {advancingMedicine.title}
          <br />
          <span>{advancingMedicine.subtitle}</span>
        </h2>
        <div className="line">
          {Array.from({ length: 26 }).map((_, i) => (
            <img key={i} src="/images/trapeze-red.svg" className="trapeze" alt="" />
          ))}
        </div>
        <div className="d-flex">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`flex fade-in${i === 1 ? ' delay-200' : i === 2 ? ' delay-400' : ''}`}
            >
              <div className="text">
                <h3 className="title">{pillar.title}</h3>
                <img src={pillar.image} alt="" />
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
