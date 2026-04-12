interface EducationItem {
  id: string;
  institution: string;
  logo: string;
  alt: string;
  title: string;
  period: string;
  studyType: string;
  summary: string;
  outcome: string;
  focusAreas: string[];
}

const educations: EducationItem[] = [
  {
    id: 'upj',
    institution: 'Universitas Pembangunan Jaya',
    logo: '/images/logo/upj.png',
    alt: 'UPJ Logo',
    title: 'Informatics',
    period: 'Sept 2020 — Sept 2024',
    studyType: 'Bachelor Degree',
    summary:
      'Built a strong full-stack foundation through academic projects, team collaboration, and software engineering coursework.',
    outcome: 'Graduated with practical experience in end-to-end web application delivery.',
    focusAreas: [
      'Frontend development with HTML, CSS, JavaScript, and Bootstrap.',
      'Backend architecture using PHP, CodeIgniter, and Laravel.',
      'Database design and query optimization with MySQL and PostgreSQL.',
      'Version control and collaboration workflows with Git and GitHub.',
    ],
  },
  {
    id: 'hacktiv8',
    institution: 'Hacktiv8',
    logo: '/images/logo/hacktiv8.png',
    alt: 'Hacktiv8 Logo',
    title: 'React and React Native Front-End Developer',
    period: 'Aug 2022 — Dec 2022',
    studyType: 'Bootcamp',
    summary:
      'Completed an intensive frontend bootcamp focused on modern JavaScript, React, React Native, and state management patterns.',
    outcome: 'Strengthened practical product delivery skills with project-based implementation.',
    focusAreas: [
      'Modern JavaScript patterns and asynchronous data handling.',
      'State and props architecture for reusable component systems.',
      'Redux for predictable state management and middleware flow.',
    ],
  },
];

export default educations;
