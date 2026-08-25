import PageLayout from '@/components/feature/PageLayout';
import ManufacturingTabs, {
  type ManufacturingTab,
} from '@/components/feature/ManufacturingTabs';

const tabs: ManufacturingTab[] = [
  {
    id: 'solids',
    label: 'Oncology Solids',
    title: 'Oncology Solids',
    description: '30+ years experience in oncology oral solid dose manufacturing.',
    bullets: [
      'Handling of potent compounds across OEB 1–5 (program-dependent).',
      'Proven cGMP systems and regulatory inspection readiness.',
      'OSD production capabilities include: granulation, blending, compression, Capsule Filling, packaging (Blister & Bottle), tech transfer, scale-up & commercial supply.',
    ],
    image: '/images/sterile-cephalosporins.png',
  },
  {
    id: 'injectables',
    label: 'Oncology Injectables',
    title: 'Oncology Injectables',
    description: 'Sterile fill-finish experience for oncology injectables with strong quality focus.',
    bullets: [
      'Robust sterility assurance, particulate control, and batch consistency.',
      'Regulated-market documentation and lifecycle support.',
      'Capabilities include: aseptic filling (vials), lyophilization, visual inspection, labeling/packaging, tech transfer & commercial supply.',
    ],
    image: '/images/monobactams.png',
  },
  {
    id: 'topicals',
    label: 'Oncology Topicals',
    title: 'Oncology Topicals',
    description: 'Expertise in development and manufacture of oncology topical dosage forms.',
    bullets: [
      'Focus on consistent performance, stability, and packaging compatibility.',
      'cGMP systems aligned for global markets.',
      'Capabilities include: creams, gels, ointments, solutions, scalable mixing/filling, packaging & tech transfer.',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'liquids',
    label: 'Oncology Oral Liquids',
    title: 'Oncology Oral Liquids',
    description: 'Development and commercial manufacturing support for oncology oral liquids.',
    bullets: [
      'Strong control of solubility, viscosity, preservatives, and microbial quality.',
      'Stability-driven formulation and packaging strategy.',
      'Capabilities include: solutions, suspensions, filtration (as applicable), bottling/unit-dose (as applicable), packaging & tech transfer.',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'vials',
    label: 'Cephalosporins - Inj Vials',
    title: 'Cephalosporins - Inj Vials',
    description: 'Dedicated cephalosporin injectable operations with segregation and controls.',
    bullets: [
      'Strong sterility assurance and beta-lactam contamination prevention.',
      'cGMP systems supporting regulated supply requirements.',
      'Capabilities include: aseptic (Powder filling,), inspection, labeling/packaging, tech transfer & commercial supply.',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'bags',
    label: 'Cephalosporins - Dual Chamber Bags',
    title: 'Cephalosporins - Dual Chamber Bags',
    description: 'Specialized capability to support dual-chamber presentations for cephalosporins.',
    bullets: [
      'Designed to improve preparation efficiency and support stability strategies.',
      'Strong focus on compatibility, mixing performance, and quality compliance.',
      'Capabilities include: dual-chamber development support, filling , integrity testing approach, packaging & lifecycle management.',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'femhormones',
    label: 'Female Hormones - Topicals',
    title: 'Female Hormones - Topicals',
    description: 'Expertise in low-dose topical hormone manufacturing with dose uniformity focus.',
    bullets: [
      'Stability-driven formulation design and packaging compatibility.',
      'cGMP systems aligned to regulated markets.',
      'Capabilities include: gels, creams, controlled mixing/filling, packaging & tech transfer.',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'oral',
    label: 'Oral Liquids',
    title: 'Oral Liquids',
    description: 'Flexible CDMO services for oral liquid dosage forms across therapy areas.',
    bullets: [
      'Handling ofStrong control of taste, preservatives, microbial quality, and stability. potent compounds across OEB 1–5 (program-dependent).',
      'Scalable manufacturing for reliable commercial supply.',
      'Capabilities include: solutions, suspensions, mixing, filtration (as applicable), bottling, packaging & tech transfer.',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'general',
    label: 'General Topicals',
    title: 'General Topicals',
    description: 'End-to-end topical CDMO services with scalable, reproducible processes.',
    bullets: [
      'Consistent rheology, content uniformity, and stability-focused development.',
      'cGMP systems supporting global regulatory expectations.',
      'Capabilities include: creams, gels, ointments, lotions, solutions, filling/packing & tech transfer.',
    ],
    image: '/images/our-company/global-presence.png',
  },
];

export default function ManufacturingDrugProductsPage() {
  return (
    <PageLayout
      title="Manufacturing : Drug Products"
      documentTitle="Manufacturing Drug Products - Extrovis"
      navyTitle
    >
      <ManufacturingTabs tabs={tabs} defaultTabId="solids" />
    </PageLayout>
  );
}
