export interface ShowcaseItem {
  id: string;
  image: string;
  title: string;
  alt: string;
  role: string;
  stack: string[];
  summary: string;
  outcome: string;
  problem: string;
  contribution: string;
  result: string;
  github?: string;
  liveDemo?: string;
}

const showcases: ShowcaseItem[] = [
  {
    id: 'nexarta',
    image: '/images/showcase/nexarta.webp',
    title: 'NexArta',
    alt: 'NexArta personal finance application',
    role: 'Personal Project',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    summary:
      'Full-stack personal finance app with AI-powered receipt scanning, multi-provider AI insights, and subscription payments.',
    outcome:
      'Shipped a production personal finance product with automated receipt-to-transaction extraction.',
    problem:
      'Tracking personal finances manually makes receipt handling and expense categorization tedious and error-prone.',
    contribution:
      'Built the entire product end to end: React + TypeScript frontend, Express API, PostgreSQL schema, Azure Document Intelligence receipt pipeline, BYOK AI across OpenAI, Anthropic, and Google, Midtrans payments, and self-hosted infrastructure with Caddy and SeaweedFS.',
    result:
      'Delivered automated receipt-to-transaction extraction with secure multi-provider AI and real payment subscriptions at nexarta.id.',
    liveDemo: 'https://nexarta.id',
  },
  {
    id: 'kinerjaplus',
    image: '/images/showcase/kinerjaplus.webp',
    title: 'KinerjaPlus',
    alt: 'KinerjaPlus teacher performance platform',
    role: 'Full-Stack Web Developer',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    summary:
      'Teacher performance appraisal platform for Erenos School with role-based workflows and scoring criteria.',
    outcome: 'Made evaluation process more structured and easier to monitor across stakeholders.',
    problem:
      'School teams needed a more objective and consistent way to run teacher performance evaluations.',
    contribution:
      'Designed the core app architecture, built modules for criteria management and scoring flow, and delivered responsive dashboard pages.',
    result:
      'Reduced manual administration effort and provided clearer appraisal records for decision making.',
    github: 'https://github.com/danisec/kinerjaplus',
    liveDemo: 'https://kinerjametrik.daniaprilyanto.my.id',
  },
  {
    id: 'ereport',
    image: '/images/showcase/ereport-erenos.webp',
    title: 'E-Report Erenos',
    alt: 'E-Report Erenos school administration app',
    role: 'Web Developer Intern',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    summary:
      'Academic reporting system covering student records, attendance, grades, and automated report generation.',
    outcome: 'Improved day-to-day operations for teachers and administrative staff.',
    problem: 'Academic data and final reports were heavily manual and prone to inconsistency.',
    contribution:
      'Implemented backend features, dashboard pages, role-based access control, and data structure for report generation.',
    result: 'Enabled staff to manage records in one place and speed up report preparation cycles.',
    liveDemo: 'https://ereport-erenos.daniaprilyanto.my.id',
  },
  {
    id: 'sim-obe',
    image: '/images/showcase/sim-obe.webp',
    title: 'SIM-OBE',
    alt: 'Outcome-based education management platform',
    role: 'Full-Stack Developer',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    summary:
      'Outcome-Based Education management platform for curriculum mapping and learning outcome analytics.',
    outcome: 'Helped stakeholders monitor OBE adoption through structured digital workflows.',
    problem:
      'Educational teams needed a centralized system to track learning outcomes and align course plans.',
    contribution:
      'Built modules for OBE mapping, administrative workflow, and performance tracking across academic entities.',
    result:
      'Created a more transparent process for managing and evaluating learning outcome implementation.',
    liveDemo: 'https://simobe.daniaprilyanto.my.id',
  },
];

export default showcases;
