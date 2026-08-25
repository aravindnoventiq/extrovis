import PageLayout from '@/components/feature/PageLayout';
import ManufacturingTabs, {
  type ManufacturingTab,
} from '@/components/feature/ManufacturingTabs';

const tabs: ManufacturingTab[] = [
  {
    id: 'sterile',
    label: 'Sterile Cephalosporins',
    title: 'Sterile Cephalosporins',
    description:
      'Dedicated, segregated sterile manufacturing for beta-lactams with robust contamination control and cGMP execution. End-to-end support from tech transfer to commercial supply.',
    bullets: [
      'Dedicated cephalosporin sterile areas & validated cleaning',
      'Aseptic processing',
      'Strong focus on sterility assurance & low endotoxin control',
    ],
    image: '/images/sterile-cephalosporins.png',
  },
  {
    id: 'high',
    label: 'High Potent Monobactams',
    title: 'High Potent Monobactams',
    description:
      'Containment-led manufacturing for potent monobactam compounds with operator and product protection built into every step. Designed for safe scale-up and consistent quality.',
    bullets: [
      'Potent handling with engineered containment',
      'Closed/controlled material transfer approaches',
      'Documentation and quality systems aligned to regulated markets',
    ],
    image: '/images/monobactams.png',
  },
  {
    id: 'advanced',
    label: 'Advanced Intermediates',
    title: 'Advanced Intermediates',
    description:
      'Scalable synthesis and purification of advanced intermediates with tight impurity control and reproducible process performance. Ideal for late-stage development and commercial readiness.',
    bullets: [
      'Multi-step synthesis, crystallization & purification',
      'Process optimization and impurity mapping support',
      'Reliable scale-up with strong batch-to-batch consistency',
    ],
    image: '/images/our-company/global-presence.png',
  },
  {
    id: 'controlled',
    label: 'Controlled Substances',
    title: 'Controlled Substances',
    description:
      'Secure, compliant handling of controlled materials with strict access control and end-to-end traceability. Built to meet stringent governance and audit expectations.',
    bullets: [
      'Secure storage, controlled access & chain-of-custody',
      'Compliance-driven documentation and release workflows',
      'Risk-managed logistics and reconciliation practices',
    ],
    image: '/images/our-company/global-presence.png',
  },
];

export default function ManufacturingDrugSubstancesPage() {
  return (
    <PageLayout
      title="Manufacturing : Drug Substances"
      documentTitle="Manufacturing Drug Substances - Extrovis"
      navyTitle
    >
      <ManufacturingTabs tabs={tabs} defaultTabId="sterile" />
    </PageLayout>
  );
}
