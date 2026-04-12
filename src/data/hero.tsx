interface DataItem {
  image: string;
  alt: string;
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  proofPoints: string[];
}

const data: DataItem = {
  image: '/images/profile/dani.svg',
  alt: 'Portrait of Dani Aprilyanto',
  name: 'Dani Aprilyanto',
  role: 'Full-Stack Web Developer',
  headline: 'I build reliable web products that stay fast, secure, and maintainable in production.',
  subheadline:
    'From Laravel backends to React and Next.js frontends, I turn product requirements into clean systems with measurable business outcomes.',
  proofPoints: [
    '2+ years building internal systems and production-ready web apps.',
    'Experienced across API design, database modeling, and UI delivery.',
    'Strong focus on code quality, performance, and deployment readiness.',
  ],
};

export default data;
