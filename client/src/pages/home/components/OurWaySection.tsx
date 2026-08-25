import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useHomeContent } from '../HomeContent';

export default function OurWaySection() {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 60, stagger: 0.15 });
  const { ourWayCards: cards } = useHomeContent();

  return (
    <section ref={sectionRef} id="our-way-home">
      <div className="cards">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`card fade-in${i === 1 ? ' delay-200' : i === 2 ? ' delay-400' : ''}`}
          >
            <img src={card.bgImage} alt="" className="image-bg" />
            <div className="gradient-bg" />
            <img src={card.trapeze} alt="" className="trapeze-bg" />
            <div className="text">
              <h4 className="title">{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
