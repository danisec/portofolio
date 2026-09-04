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
  image: '/images/profile/dani.webp',
  alt: 'Portrait of Dani Aprilyanto',
  name: 'Dani Aprilyanto',
  role: 'Full-Stack Web Developer',
  headline: 'I build reliable web products that stay fast, secure, and maintainable in production.',
  subheadline:
    'From Laravel backends to React and Next.js frontends, I turn requirements into dependable systems that real users rely on every day.',
  proofPoints: [
    '3 years shipping production apps: school administration platforms, OBE curriculum systems, and developer learning tools.',
    'Comfortable across the stack: API design, database modeling, and responsive UI delivery.',
    'GPA 3.61 Informatics graduate with a shipped final project (KinerjaPlus) used for real evaluations.',
  ],
};

export default data;
