import { useHomeContent } from '../HomeContent';

export default function HeroSection() {
  const { hero } = useHomeContent();

  return (
    <section id="hero">
      <section id="slider">
        <div className="my-swiper">
          <div className="swiper-slide-static">
            <img src="/images/home/hero/hero-bg-1.svg" alt="" className="hero-bg desktop" />
            <img src="/images/home/hero/hero-1.png" alt="" className="hero desktop" />
            <img
              src="/images/home/hero/hero-foreground.svg"
              alt=""
              className="hero-foreground desktop"
            />
            <img src="/images/home/hero/hero-bg-m.svg" alt="" className="hero-bg mobile" />
            <img src="/images/home/hero/hero-1-m.png" alt="" className="hero mobile" />
            <img
              src="/images/home/hero/hero-foreground-m.svg"
              alt=""
              className="hero-foreground mobile"
            />
            <div className="text">
              <div className="text-inner">
                <h1>{hero.headline}</h1>
                <p>{hero.body}</p>
                <h2 style={{ fontSize: 22, fontWeight: 400, color: '#ff0018' }}>{hero.tagline}</h2>
              </div>
              <a href="#our-way-home">
                <img src="/images/arrow.png" alt="arrow" style={{ height: 65, cursor: 'pointer' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
