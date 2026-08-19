import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const homeData = {
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

const whoWeAreData = {
  usps: [
    { title: 'Innovative Products', image: '/images/our-company/innovative-products.svg', delay: '' },
    { title: 'Quality assurance', image: '/images/our-company/quality-assurance.svg', delay: ' delay-200' },
    { title: 'Worldwide supply chain', image: '/images/our-company/worldwide-supply-chain.svg', delay: ' delay-400' },
    { title: 'Ethical operations', image: '/images/our-company/ethical-operations.svg', delay: ' delay-600' },
  ],
  teamStats: [
    { label: 'Research & development', count: 250, delay: '' },
    { label: 'MANUFACTURING AND QUALITY', count: 450, delay: ' delay-200' },
    { label: 'REGULATORY, CLINICAL & PRODUCT DELIVERY', count: 50, delay: ' delay-400' },
    { label: 'Total FTEs', count: 750, delay: ' delay-400' },
  ],
};

const whatWeOfferData = {
  intro: {
    title: 'Integrated Expertise | Global Execution | Reliable Outcomes',
    paragraphs: [
      'Extrovis integrates scientific depth, manufacturing expertise, and global execution to advance complex dosage forms—from oncology solids and parenterals to liquids and topicals—efficiently and compliantly.',
      'Backed by decades of experience in sterile antibiotics and highly potent products, and supported by US FDA, EU GMP, and PMDA-accredited facilities, we deliver consistent quality from clinical development through commercial scale.',
      'Our streamlined supply chain, disciplined project management and regulatory pathway ensure reliable market access across 50+ countries.',
    ],
    image: '/images/our-company/reliable-supply-chain.png',
    imageAlt: 'Reliable supply chain',
  },
  offerings: [
    {
      title: 'R & D',
      description:
        'We develop novel and differentiated dosage forms in an increasingly complex environment, driven by advanced delivery technologies in a dynamic global regulatory landscape.',
      href: '/research-development/',
      cardClass: 'therapeutically-relevant-molecules',
      delay: '',
    },
    {
      title: 'Manufacturing',
      description:
        'Our robust technology transfer processes enable rapid program initiation, while advanced process analytical technologies enhance operational efficiency and cost effectiveness',
      href: '/manufacturing/',
      cardClass: 'intensive-characterisation',
      delay: ' delay-200',
    },
    {
      title: 'Supply Chain… Truly Global',
      description:
        'As a pharmaceutical CDMO, Extrovis is uniquely positioned to support clients worldwide, delivering reliable and compliant solutions across more than 50 markets.',
      href: '/supply-chain/',
      cardClass: 'therapeutically-relevant-molecules',
      delay: ' delay-400',
    },
  ],
};

const careersData = {
  intro: {
    title: 'Unique opportunity',
    paragraphs: [
      'We aim to create a working environment where you are given professional opportunities to employ your skill set and evolve into other areas of proficiency.',
      'Your gender, your religion or political orientation and your skin colour are of no consequence to us. You earn merits based on your enthusiasm, open-mindedness, and engagement.',
      'We are based out of Switzerland with offices at multiple locations globally. We are looking to hire progressive employees who are passionate about their work wherever they are.',
    ],
    image: '/images/careers/unique-opportunity.png',
    imageAlt: 'Unique opportunity',
  },
  applyTitle: 'Apply Now',
  applyBody:
    'Please submit your CV and application below, or send an e-mail to hr@extrovis.com.',
  hrEmail: 'hr@extrovis.com',
};

const getInTouchData = {
  brandTitle: 'Extrovis',
  corporateLabel: 'Global Corporate Office',
  corporate: {
    lines: ['Bahnhof-Park 4', 'Baar 6340', 'Switzerland'],
    phone: '+41 41 740 1120',
    email: 'info@extrovis.com',
  },
};

const leadershipPageData = {
  title: 'Leadership',
  intro: 'Our leadership team brings decades of global experience across research, regulatory sciences, manufacturing, and commercialization.',
};

const executiveBoard = [
  {
    name: 'HANS KAMMA',
    role: 'CHIEF EXECUTIVE OFFICER',
    shortDesc:
      'Hanumantha Rao Kamma (Hans) combines a strong knowledge of industry trends and portfolio strategy with a vast professional network.',
    fullDesc: [
      "Hanumanth Rao Kamma (Hans) has a master's degree in International Management from Pondicherry Central University, India. He combines a strong knowledge of industry trends and portfolio strategy with a vast professional network. Prior to his role at Extrovis Switzerland, Hanumantha held various managerial positions in the areas of strategic sourcing, portfolio management and strategic business development at Amneal, Ranbaxy and Dr. Reddy's.",
    ],
    image: '/images/leadership/hanumantha-rao-kamma.png',
    alt: 'Hanumantha Rao Kamma',
  },
  {
    name: 'P.V.Raghavendra Rao',
    role: 'Group Chief Financial Officer',
    shortDesc:
      'Raghav is an accomplished chartered accountant and finance leader with about 25 years of comprehensive experience in financial management.',
    fullDesc: [
      'Raghav is an accomplished chartered accountant and finance leader with about 25 years of comprehensive experience in financial management. His expertise spans across accounting, control, project evaluation, financial planning, budgeting, transfer pricing, taxation, costing, and treasury management—including cash flow management, hedging, and securing funds from banks—across diverse regions. Throughout his career, Raghav has assumed numerous leadership positions, where he has been instrumental in establishing and mentoring finance and business teams.',
      "Raghav has held prominent finance leadership positions such as the Chief Financial Officer at Sequent Scientific Limited, Macleods Pharmaceuticals Ltd, and most recently at Solara Active Pharma Sciences. He gained substantial business finance expertise through various roles at Dr. Reddy's Laboratories in Hyderabad.",
      'Raghav possesses a deep understanding of strategy development and implementation and has earned a Goldratt Master Executive Certificate in TOC Holistic Management. Over his extensive career, Raghav has contributed as an advisor and consultant, playing key roles on finance steering committees, business leadership councils, and joint steering committees for various business partnerships.',
    ],
    image: '/images/leadership/p-v-raghavendra-rao.png',
    alt: 'P.V.Raghavendra Rao',
  },
  {
    name: 'Dr. Janos Vaczi',
    role: 'HEAD CORPORATE DEVELOPMENT & SPECIAL PROJECTS',
    shortDesc: 'Janos brings decades of leadership experience from multinational corporations.',
    fullDesc: [
      'Before joining Extrovis in Switzerland, Janos held various general management and P&L responsibilities at Amneal based in Switzerland, Alliance Healthcare (now part of Walgreens Boots Alliance), Ratiopharm (now part of the Teva Group) and Sanofi. Janos has a Summa Cum Laude degree from the Szent-Györgyi Albert Medical University in Szeged, Hungary.',
    ],
    image: '/images/leadership/dr-janos-vaczi.png',
    alt: 'Dr. Janos Vaczi',
  },
  {
    name: 'Krishna Yeachuri',
    role: 'Board Member Latina Pharma, Rome',
    shortDesc: 'Krishna brings over 35 years of experience in financial management, operations,',
    fullDesc: [
      'Krishna brings over 35 years of experience in financial management, operations, and board governance across diverse industries. His extensive background in financial consulting and strategic oversight has helped guide organizations toward sustained growth, operational excellence, and long term profitability. With a deep understanding of corporate governance and sound financial stewardship, Krishna continues to play a pivotal role in enabling businesses to scale responsibly and build strong organizational foundations.',
    ],
    image: '/images/leadership/Krishna-yechuri.png',
    alt: 'Krishna Yeachuri',
  },
];

const leadershipTeam = [
  {
    name: 'Srinivasan Pagadala',
    role: 'Chief Human Resource Officer',
    shortDesc:
      'Srini comes with over 25 years of extensive experience in human resources management within the Pharma and Healthcare sectors. He specializes in Business HR, Change Leadership and Transformation, Talent Management, and Employee Relations.',
    fullDesc: [
      "Srini comes with over 25 years of extensive experience in human resources management within the Pharma and Healthcare sectors. He specializes in Business HR, Change Leadership and Transformation, Talent Management, and Employee Relations. Throughout his career, he has held various HR senior and responsible positions in top pharmaceutical organizations such as Dr. Reddy's, Novartis, GVK Bio, and Biological E. Before his current role at Extrovis, Srini led the HR function at Solara Active Pharma.",
    ],
    image: '/images/leadership/srinivasan-pagadala.png',
    alt: 'Srinivasan Pagadala',
  },
  {
    name: 'Mathijs Steegstra',
    role: 'GLOBAL HEAD OF SCIENTIFIC AFFAIRS',
    shortDesc:
      'Mathijs Steegstra has worked in the pharmaceutical industry for more than 20 years, always in Quality and Regulatory roles covering USA, Europe and MENA.',
    fullDesc: [
      'Mathijs Steegstra has worked in the pharmaceutical industry for more than 20 years, always in Quality and Regulatory roles covering USA, Europe and MENA. With experience in both innovator and generics, he has set up RA infrastructures for newly formed companies and optimized them for established companies.',
      "He obtained multiple Marketing Authorization approvals for various types of products ranging from NCE's to repurposed molecules to complex generics. He was responsible for the quality of multiple sites, including sterile production sites and has handled remediation projects for several sites. Originally from the Netherlands, he studied pharmacy at the University of Groningen and holds a pharmacist's degree, specializing in molecular pharmacology.",
    ],
    image: '/images/leadership/mathijs-steegstra.png',
    alt: 'Mathijs Steegstra',
  },
  {
    name: 'Sudeep Kumar Agrawal',
    role: 'Chief Scientific Officer',
    shortDesc:
      'In his role as CSO, Sudeep will Lead the R&D functions at Extrovis based out of Hyderabad. With over 30 years of experience in pharmaceutical R&D, Sudeep brings deep scientific, technical, and strategic expertise across parenteral, ophthalmic, oral, and complex injectable products.',
    fullDesc: [
      "Sudeep has successfully led global, multi-disciplinary R&D teams for end-end development of products for regulated markets including the US, EU, Australia, and South Africa. His previous leadership roles include EVP–R&D at Shilpa Medicare, VP–R&D at Sun Pharma, and senior positions at Hospira, Orchid Pharma, Dr. Reddy's, and Zydus Cadila. He has been instrumental in several first-to-file, complex generics, and commercial product launches across categories.",
      'He holds advanced qualifications in Pharmaceutical Sciences, International Business, Project Management, Intellectual Property, and Executive Leadership.',
    ],
    image: '/images/leadership/Sudeep-Kumar-Agrawal.png',
    alt: 'Sudeep Kumar Agrawal',
  },
  {
    name: 'Dr. Suryanarayana Regulagadda',
    role: 'GLOBAL HEAD OF ANALYTICAL SCIENCES AND TECHNOLOGY',
    shortDesc:
      'Dr. Suryanarayana Regulagadda comes with more than two decades of experience in pharmaceutical industry in Analytical Research & Development.',
    fullDesc: [
      "Dr. Suryanarayana Regulagadda comes with more than two decades of experience within the pharmaceutical industry in Analytical Research & Development. His expertise spans across a wide range of peptides and complex molecules, optimizing laboratory operations, ensuring robust method development and validation, and spearheading technology adoption within the regulatory framework catering to USFDA, MHRA, ENVISA developments in API and formulations. Surya is a postgraduate in chemistry – he worked with Eugia Pharma, Alembic, Dr. Reddy's and Concord Laboratories, Qualitest Pharmaceuticals in the US. At Extrovis, Surya leads the analytical development & services portfolio for the group.",
    ],
    image: '/images/leadership/dr-suryanarayana-regulagadda.png',
    alt: 'Dr. Suryanarayana Regulagadda',
  },
  {
    name: 'Amit Tiwari',
    role: 'Head Business Development',
    shortDesc:
      'Amit Tiwari is an accomplished business development leader with extensive global experience in pharmaceuticals and life sciences.',
    fullDesc: [
      'He currently serves as the Head of Business Development at EXTROVIS, a role he has held since December 2023. Previously, he was the Director of Business Development at Develco Pharma Schweiz AG, overseeing global business development, licensing activities, and portfolio strategy.',
      "A significant part of Amit's career was spent at Amneal Pharmaceuticals, where he served as Associate Director of Global Business Development & Strategy for Europe, driving in licensing, out licensing, and alliance management initiatives. His professional background also includes participation in the Global Leadership Program at Ranbaxy, strategic sourcing and business development at Dr. Reddy's Laboratories, and process development work at Tata Consultancy Services.",
      'Amit holds an M&A and Corporate Strategy specialization from INSEAD, an MBA from the Indian Institute of Technology, Madras, and a BS in Manufacturing Engineering from Delhi University.',
    ],
    image: '/images/leadership/amit-tiwari.png',
    alt: 'Amit Tiwari',
  },
];

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@extrovis.com';
  const password = process.env.ADMIN_PASSWORD || 'Admin@12345';
  const name = process.env.ADMIN_NAME || 'Extrovis Admin';
  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.adminUser.upsert({
    where: { email },
    create: { email, passwordHash, name },
    update: { passwordHash, name },
  });
  console.log(`Admin ready: ${email}`);

  const pages: { slug: string; data: unknown }[] = [
    { slug: 'home', data: homeData },
    { slug: 'who-we-are', data: whoWeAreData },
    { slug: 'what-we-offer', data: whatWeOfferData },
    { slug: 'work-with-us', data: careersData },
    { slug: 'get-in-touch', data: getInTouchData },
    { slug: 'leadership', data: leadershipPageData },
  ];

  for (const p of pages) {
    await prisma.pageContent.upsert({
      where: { slug: p.slug },
      create: { slug: p.slug, data: p.data as object },
      update: { data: p.data as object },
    });
  }
  console.log(`Seeded ${pages.length} pages`);

  await prisma.leadershipMember.deleteMany();
  let order = 0;
  for (const m of executiveBoard) {
    await prisma.leadershipMember.create({
      data: { ...m, group: 'executiveBoard', sortOrder: order++, fullDesc: m.fullDesc },
    });
  }
  order = 0;
  for (const m of leadershipTeam) {
    await prisma.leadershipMember.create({
      data: { ...m, group: 'leadershipTeam', sortOrder: order++, fullDesc: m.fullDesc },
    });
  }
  console.log('Seeded leadership members');

  await prisma.careerBenefit.deleteMany();
  const benefits = [
    {
      title: 'International\nOpportunity',
      image: '/images/careers/international-opportunity.png',
      cardClass: 'international-opportunity',
      sortOrder: 0,
    },
    {
      title: 'Diverse\nWorkforce',
      image: '/images/careers/diverse-workforce.png',
      cardClass: 'diverse-workforce',
      sortOrder: 1,
    },
    {
      title: 'Professional\nDevelopment',
      image: '/images/careers/professional-development.png',
      cardClass: 'professional-development',
      sortOrder: 2,
    },
  ];
  for (const b of benefits) {
    await prisma.careerBenefit.create({ data: b });
  }
  console.log('Seeded career benefits');

  await prisma.office.deleteMany();
  const offices = [
    {
      officeKey: 'usa',
      name: 'Kavis Pharma LLC',
      country: 'USA',
      mapImage: '/images/map/usa-map.svg',
      lineImage: '/images/map/usa-line.svg',
      address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
      defaultOpen: false,
      sortOrder: 0,
    },
    {
      officeKey: 'switzerland',
      name: 'Extrovis AG',
      country: 'Switzerland',
      mapImage: '/images/map/switzerland-map.svg',
      lineImage: '/images/map/switzerland-line.svg',
      address: [] as string[],
      defaultOpen: true,
      sortOrder: 1,
    },
    {
      officeKey: 'hungary-1',
      name: 'Pharma Pack Ltd',
      country: 'Hungary',
      mapImage: '/images/map/hungary-map.svg',
      lineImage: '/images/map/hungary-line-1.svg',
      address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
      defaultOpen: false,
      sortOrder: 2,
    },
    {
      officeKey: 'hungary-2',
      name: 'Extrovis EU Ltd',
      country: 'Hungary',
      mapImage: '/images/map/hungary-map.svg',
      lineImage: '/images/map/hungary-line-2.svg',
      address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
      defaultOpen: false,
      sortOrder: 3,
    },
    {
      officeKey: 'italy',
      name: 'Latina Pharma SpA',
      country: 'Italy',
      mapImage: '/images/map/italy-map.svg',
      lineImage: '/images/map/italy-line.svg',
      address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
      defaultOpen: false,
      sortOrder: 4,
    },
    {
      officeKey: 'india-1',
      name: 'R & D Manufactureing',
      country: 'Pune',
      mapImage: '/images/map/india-map-2.svg',
      lineImage: '/images/map/india-line-1.svg',
      address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
      defaultOpen: false,
      sortOrder: 5,
    },
    {
      officeKey: 'india-2',
      name: 'R & D Drug Product & Drug Substances',
      country: 'Hyderabad',
      mapImage: '/images/map/india-map-2.svg',
      lineImage: '/images/map/india-line-2.svg',
      address: ['Bahnhof-Park 4', 'Baar 6340', '+41 41 740 1120'],
      defaultOpen: false,
      sortOrder: 6,
    },
  ];
  for (const o of offices) {
    await prisma.office.create({ data: o });
  }
  console.log('Seeded offices');

  const jobCount = await prisma.job.count();
  if (jobCount === 0) {
    await prisma.job.create({
      data: {
        title: 'Open Application',
        location: 'Global',
        department: 'General',
        description: 'Submit a general application via the Work with Us form. Specific openings will be listed here.',
        isActive: true,
        sortOrder: 0,
      },
    });
  }

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
