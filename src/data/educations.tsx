interface EducationItem {
  id: string;
  institution: string;
  logo: string;
  alt: string;
  title: string;
  period: string;
  studyType: string;
  gpa?: string;
  summary: string;
  focusAreas: string[];
}

const educations: EducationItem[] = [
  {
    id: 'upj',
    institution: 'Universitas Pembangunan Jaya',
    logo: '/images/logo/upj.png',
    alt: 'UPJ Logo',
    title: 'Informatics',
    period: 'Sep 2020 — Sep 2024',
    studyType: 'Bachelor Degree',
    gpa: '3.61',
    summary:
      'Computer science degree applied in the field, capped by building and deploying academic administration systems for a real school (Erenos) as professional work and final project. Thesis: web-based decision support with the Analytical Hierarchy Process for teacher performance evaluation, the basis of the KinerjaPlus platform.',
    focusAreas: [
      'Engineering foundations: data structures & algorithms, OOP, operating systems, and computer networks.',
      'Database design and optimization with SQL, backed by human-computer interaction coursework for user-centered thinking.',
      'Software engineering process: SDLC, use cases, UML (sequence and class diagrams), and effort estimation.',
      'Applied delivery: PHP web engineering from coursework, extended with Laravel and Git through real school projects.',
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
      'Intensive 5-month frontend bootcamp covering the React ecosystem end-to-end from ES6 fundamentals and component styling to React Native and Redux completed with graduation certification.',
    focusAreas: [
      'Modern JavaScript (ES6): syntax upgrades, module organization, and built-in APIs for asynchronous data handling.',
      'Component styling systems: CSS Modules, Styled Components, and Emotion, with a design-to-application workflow.',
      'State management with Redux and Redux Thunk middleware, plus SPA and server-side rendering concepts.',
      'React Native with Expo: layouts, screen navigation, forms, third-party components, and data fetching.',
    ],
  },
];

export default educations;
