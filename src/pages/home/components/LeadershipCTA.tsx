import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useHomeContent } from '../HomeContent';

export default function LeadershipCTA() {
  const sectionRef = useScrollReveal<HTMLElement>({ y: 50 });
  const { leadershipCta } = useHomeContent();

  return (
    <section ref={sectionRef} id="leadership-home">
      <div className="cta-s fade-in delay-200" style={{ background: '#14146e' }}>
        <div className="join-us" style={{ width: '80%', maxWidth: '80%' }}>
          <h3 className="title large">{leadershipCta.title}</h3>
          <p>{leadershipCta.body}</p>
          <Link to={leadershipCta.ctaHref} className="secondary-btn">
            {leadershipCta.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
