import { useEffect, useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { api } from '@/lib/api';

interface Leader {
  name: string;
  role: string;
  shortDesc: string;
  fullDesc: string[];
  image: string;
  alt: string;
}

const executiveBoard: Leader[] = [
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

const leadershipTeam: Leader[] = [
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
  {
    name: 'Rajesh Sadanandan',
    role: 'Head Project & Alliance Management',
    shortDesc:
      'Rajesh Sadanandan heads the Project & Alliance Management at Extrovis based out of Princeton New Jersey, USA.',
    fullDesc: [
      'Rajesh Sadanandan heads the Project & Alliance Management at Extrovis based out of Princeton, New Jersey, USA. With over 30 years of leadership experience in pharmaceuticals, Rajesh brings deep expertise in Sales & Marketing, Business development & strategic partnerships across API, CDMO and FDF segments in regulated markets globally.',
    ],
    image: '/images/leadership/Rajesh-Sadanandan.png',
    alt: 'Rajesh Sadanandan',
  },
  {
    name: 'Andrea Gazzaneo',
    role: 'Operations Director of Latina Pharma',
    shortDesc:
      'Andrea Gazzaneo is the Operations Director of Latina Pharma and brings over 25 years of experience across R&D, production, and large scale pharmaceutical operations',
    fullDesc: [
      'His background spans APIs, including optically active APIs, sterile and lyophilized APIs, antibiotics, vaccines, and high potency drugs (HPD). Andrea has led end to end technology transfer, process scale up, manufacturing, and packaging across diverse product categories. His technical expertise covers a wide portfolio of pharmaceutical forms, including:',
      'Throughout his career, Andrea has been recognized for his deep scientific and operational expertise, his ability to lead complex manufacturing environments, and his commitment to quality, compliance, and continuous improvement.',
    ],
    image: '/images/leadership/andrea-gazzaneo.png',
    alt: 'Andrea Gazzaneo',
  },
  {
    name: 'Sheila Bonner',
    role: 'General Manager, Kavis Pharma LLC, Sugar Land, Texas',
    shortDesc:
      "Sheila Bonner serves as General Manager of Kavis Pharma's flagship manufacturing facility in Sugar Land, Texas. With 30 years of experience in the pharmaceutical sector",
    fullDesc: [
      'she oversees all operational aspects of the facility, including regulatory compliance, manufacturing, and financial performance. Sheila has extensive experience with FDA, OSHA, and EPA compliance, lean manufacturing, change management, and continuous improvement methodologies. Sheila is committed to driving operational excellence by cultivating a culture of accountability, collaboration, and process optimization. Through her leadership, Sheila cultivates high-performing teams that consistently deliver innovative, complex products to customers that improve patient outcomes while ensuring client satisfaction.',
    ],
    image: '/images/leadership/Sheila-Bonner.png',
    alt: 'Sheila Bonner',
  },
  {
    name: 'Krisztián Varga',
    role: 'CEO, Pharma Pack, Hungary',
    shortDesc:
      'Krisztián brings over two decades of leadership experience across the automotive, electronics, chemical',
    fullDesc: [
      'and custom manufacturing industries. With academic credentials in Mechanical Engineering, Economics, and an MBA, he has built a strong career driving organizational transformation and operational excellence.',
      'He has led complex, large scale projects, shaped and restructured organizations, and championed lean based operational improvements. His experience includes managing production units, optimizing end to end processes, and leading teams ranging from small operational groups to large, multinational manufacturing divisions.',
    ],
    image: '/images/leadership/krisztian-varga.png',
    alt: 'Krisztián Varga',
  },
];

function LeaderCard({ leader, delayClass = '' }: { leader: Leader; delayClass?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`member fade-in fade-in-done${delayClass}${open ? ' open' : ''}`}>
      <div className="img">
        <img src={leader.image} alt={leader.alt} />
      </div>
      <div className="text">
        <div className="text-inner">
          <h4 className="title">{leader.name}</h4>
          <h5>{leader.role}</h5>
          <div className="small-desc">
            <p>{leader.shortDesc}</p>
          </div>
          <div className="large-desc">
            <div className="large-desc-inner">
              {leader.fullDesc.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <button className="more" type="button" onClick={() => setOpen((v) => !v)}>
          About <img src="/images/triangle-red.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <section id="leadership-header">
      <div className="container">
        <div className="d-flex">
          <div className="title-col">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LeadershipPage() {
  const [board, setBoard] = useState(executiveBoard);
  const [team, setTeam] = useState(leadershipTeam);

  useEffect(() => {
    document.title = 'Leadership - Extrovis';
    window.scrollTo(0, 0);
    api
      .getLeadership()
      .then((res) => {
        if (res.executiveBoard?.length) {
          setBoard(
            res.executiveBoard.map((m) => ({
              name: m.name,
              role: m.role,
              shortDesc: m.shortDesc,
              fullDesc: Array.isArray(m.fullDesc) ? m.fullDesc : [],
              image: m.image,
              alt: m.alt,
            })),
          );
        }
        if (res.leadershipTeam?.length) {
          setTeam(
            res.leadershipTeam.map((m) => ({
              name: m.name,
              role: m.role,
              shortDesc: m.shortDesc,
              fullDesc: Array.isArray(m.fullDesc) ? m.fullDesc : [],
              image: m.image,
              alt: m.alt,
            })),
          );
        }
      })
      .catch(() => {
        /* keep hardcoded fallback */
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <SectionHeader title="Executive Board" />
        <section id="leadership">
          <div className="d-flex">
            {board.map((leader, i) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                delayClass={i === 0 ? ' delay-100' : ' delay-200'}
              />
            ))}
          </div>
        </section>

        <SectionHeader title="Leadership Team" />
        <section id="leadership">
          <div className="d-flex">
            {team.map((leader, i) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                delayClass={i % 2 === 0 ? ' delay-100' : ' delay-200'}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
