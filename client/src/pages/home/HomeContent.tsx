import { createContext, useContext } from 'react';
import { usePageData } from '@/hooks/usePageData';

export type HomeContent = {
  hero: { headline: string; body: string; tagline: string };
  ourWayCards: {
    title: string;
    description: string;
    bgImage: string;
    trapeze: string;
  }[];
  servicesIntro: {
    title: string;
    paragraphs: string[];
    closing: string;
  };
  serviceCards: {
    title: string;
    description: string;
    lightIcon: string;
    blueIcon: string;
  }[];
  advancingMedicine: {
    title: string;
    subtitle: string;
    pillars: { title: string; description: string; image: string }[];
  };
  leadershipCta: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  contactIntro: {
    title: string;
    paragraphs: string[];
  };
};

const fallback: HomeContent = {
  hero: {
    headline: 'Advancing the Future of Specialty Medicine',
    body: "We partner with the world's leading pharmaceutical companies to develop and manufacture complex therapeutics that improve patient outcomes worldwide.",
    tagline: 'Dedicated to Better',
  },
  ourWayCards: [
    {
      title: 'Healthcare-Centric Innovation',
      description:
        'We focus on creating solutions that improve treatment delivery and practical use for patients and healthcare providers.',
      bgImage: '/images/home/our-way-bg-2.png',
      trapeze: '/images/home/our-way-trapeze-1.svg',
    },
    {
      title: 'Partnership with Purpose',
      description:
        'We collaborate with global pharmaceutical companies through long-term, strategic alliances grounded in shared responsibility.',
      bgImage: '/images/home/our-way-bg-4.png',
      trapeze: '/images/home/our-way-trapeze-2.svg',
    },
    {
      title: 'Excellence in Specialty Manufacturing',
      description:
        'We are committed to high-value, high-precision therapeutic categories where quality and continuity are critical.',
      bgImage: '/images/home/our-way-bg-3.png',
      trapeze: '/images/home/our-way-trapeze-3.svg',
    },
  ],
  servicesIntro: {
    title: 'At the Heart of Evolving Therapies',
    paragraphs: [
      'Extrovis is an Indo-Swiss global CRDMO committed to the successful delivery of innovative and complex therapeutics to patients worldwide. Our global team, of scientific and manufacturing experts brings decades of experience, supported by state-of-the-art manufacturing infrastructure across India, Europe, and the United States.',
      'Extrovis partners with customers to meet the evolving expectations of regulatory and government agencies, while effectively navigating supply-chain complexities in global markets.',
      'Our capabilities span sterile antibiotics (APIs and dosage forms), cytotoxic formulations (OSDs, injectables, and topicals), and female hormone products, serving regulated markets across the globe.',
    ],
    closing: 'We enable safer, smarter, and more accessible medicines - from molecule to market.',
  },
  serviceCards: [
    {
      title: 'R&D Excellence',
      description:
        'Next-generation drug-device combinations, advanced delivery systems, peptides, sterile injectables, and platform technologies engineered to solve clinical and patient pain points.',
      lightIcon: '/images/home/what-we-offer-1-light.svg',
      blueIcon: '/images/home/what-we-offer-1-blue.svg',
    },
    {
      title: 'Global Manufacturing',
      description:
        'USFDA- and EU-GMP-approved facilities delivering high-containment manufacturing, sterile antibiotics, oncology formulations, and specialized dosage forms at global scale.',
      lightIcon: '/images/home/what-we-offer-2-light.svg',
      blueIcon: '/images/home/what-we-offer-2-blue.svg',
    },
    {
      title: 'Strategic Partnership',
      description:
        'Collaborative models built around speed, flexibility, and reliability — empowering our partners to accelerate development and global market access.',
      lightIcon: '/images/home/what-we-offer-3-light.svg',
      blueIcon: '/images/home/what-we-offer-3-blue.svg',
    },
  ],
  advancingMedicine: {
    title: 'Advancing Medicine',
    subtitle: 'Innovating to improve lives',
    pillars: [
      {
        title: 'Research',
        description:
          'Our research centres operate at the heart of new and differentiated FDFs, APIs and Intermediates, with strategy and development teams in India, the EU and US.',
        image: '/images/home/extrovis-group-1.png',
      },
      {
        title: 'Manufacturing',
        description:
          'Extrovis Group operates a worldwide network of state-of-the-art manufacturing facilities that comply with the highest international quality standards and accreditations from all major global regulatory bodies.',
        image: '/images/home/extrovis-group-2.png',
      },
      {
        title: 'Commercial',
        description:
          'A global supply chain with an international customer care hub and local capabilities for key activities guarantees that we can deliver innovative solutions improving compliance and convenience.',
        image: '/images/home/extrovis-group-3.png',
      },
    ],
  },
  leadershipCta: {
    title: 'Leadership with Purpose',
    body: 'Our leadership team brings decades of global experience across research, regulatory sciences, manufacturing, and commercialization — steering Extrovis with clarity, responsibility, and long-term vision.',
    ctaLabel: 'Meet our leadership team',
    ctaHref: '/leadership/',
  },
  contactIntro: {
    title: 'Get in touch',
    paragraphs: [
      'Whether you would like to explore the future of medicine or learn more about our global network and innovative solutions, use this form to send us your name and e-mail address.',
      'Our customer service team will be in contact soon.',
    ],
  },
};

const HomeCtx = createContext<HomeContent>(fallback);

export function HomeContentProvider({ children }: { children: React.ReactNode }) {
  const { data } = usePageData<HomeContent>('home', fallback);
  return <HomeCtx.Provider value={{ ...fallback, ...data }}>{children}</HomeCtx.Provider>;
}

export function useHomeContent() {
  return useContext(HomeCtx);
}
