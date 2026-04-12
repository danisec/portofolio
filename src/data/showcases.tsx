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
  github: string;
  liveDemo?: string;
}

const showcases: ShowcaseItem[] = [
  {
    id: 'kinerjaplus',
    image: '/images/showcase/kinerjaplus.png',
    title: 'KinerjaPlus',
    alt: 'KinerjaPlus teacher performance platform',
    role: 'Full-Stack Web Developer',
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    summary:
      'Teacher performance appraisal platform for Erenos School with role-based workflows and scoring criteria.',
    outcome: 'Made evaluation process more structured and easier to monitor across stakeholders.',
    problem: 'School teams needed a more objective and consistent way to run teacher performance evaluations.',
    contribution:
      'Designed the core app architecture, built modules for criteria management and scoring flow, and delivered responsive dashboard pages.',
    result:
      'Reduced manual administration effort and provided clearer appraisal records for decision making.',
    github: 'https://github.com/danisec/kinerjaplus',
    liveDemo: 'https://kinerjametrik.daniaprilyanto.my.id',
  },
  {
    id: 'ereport',
    image: '/images/showcase/ereport-erenos.png',
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
    result:
      'Enabled staff to manage records in one place and speed up report preparation cycles.',
    github: 'https://github.com/danisec/ereport-erenos',
    liveDemo: 'https://ereport-erenos.daniaprilyanto.my.id',
  },
  {
    id: 'sim-obe',
    image: '/images/showcase/sim-obe.png',
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
    github: 'https://github.com/danisec/sim-obe',
    liveDemo: 'https://simobe.daniaprilyanto.my.id',
  },
  {
    id: 'newshub',
    image: '/images/showcase/newshub.png',
    title: 'NewsHub',
    alt: 'NewsHub web application',
    role: 'Frontend Developer',
    stack: ['React', 'Tailwind CSS'],
    summary:
      'Frontend news portal interface focused on responsive layout and efficient content browsing.',
    outcome: 'Delivered a clean and fast reading experience for headline discovery.',
    problem: 'Needed a simple but scalable UI to display frequently updated news content.',
    contribution:
      'Designed reusable components, integrated content presentation flow, and tuned responsive behavior.',
    result: 'Provided a lightweight UI architecture suitable for rapid content updates.',
    github: 'https://github.com/danisec/newshub',
  },
];

export default showcases;
