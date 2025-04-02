interface EducationItem {
  id?: number;
  institution?: string;
  logo?: string;
  alt?: string;
  title?: string;
  period?: string;
  study?: string;
  descriptionType?: 'paragraph' | 'list';
  description?: string | string[];
  detail?: string;
}

const educations: EducationItem[] = [
  {
    id: 1,
    institution: 'Universitas Pembangunan Jaya',
    logo: '/images/logo/upj.png',
    alt: 'UPJ Logo',
    title: 'Informatics',
    period: 'Sept 2020 — Sept 2024',
    study: 'Bachelor Degree S1',
    descriptionType: 'list',
    description: [
      'Front-End Development: HTML, CSS, Bootstrap, JavaScript.',
      'Back-End Development: PHP, CodeIgniter, Laravel.',
      'Databases: MySQL, PostgreSQL.',
      'Version Control: Git, GitHub.',
      'Other Skills: API Integration.',
    ],
    detail: `During my time at Universitas Pembangunan Jaya, I gained a comprehensive understanding of software development, with a focus on web technologies. I developed a strong foundation in both front-end and back-end programming, working on various academic projects that challenged me to apply technical knowledge in real-world scenarios. I honed my problem-solving skills, and collaborated with teams.`,
  },
  {
    id: 2,
    institution: 'Hacktiv8',
    logo: '/images/logo/hacktiv8.png',
    alt: 'Hacktiv8 Logo',
    title: 'React and React Native Front-End Developer',
    period: 'Aug 2022 — Dec 2022',
    study: 'Bootcamp',
    descriptionType: 'paragraph',
    description: `This program focuses on learning Modern Javascript which is fundamental to React,
    retrieving data from the server in a synchronized/asynchronized way, processing data
    by applying state and props methods, to state management using Redux and using Redux
    as middleware.`,
  },
];

export default educations;
