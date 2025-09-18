interface ExperienceItem {
  id?: number;
  institution?: string;
  logo?: string;
  alt?: string;
  title?: string;
  period?: string;
  work?: string;
  descriptionType?: 'paragraph' | 'list';
  description?: string | string[];
  detail?: string;
}

const experiences: ExperienceItem[] = [
  // {
  //   id: 1,
  //   institution: 'Danivoid',
  //   logo: '/images/logo/danivoid.png',
  //   alt: 'Danivoid Logo',
  //   title: 'Website Developer',
  //   period: 'Jan 2021 — Present',
  //   work: 'Freelance',
  //   descriptionType: 'list',
  //   detail:
  //     'As a freelance website developer, I specialize in building dynamic and responsive web applications using React and Laravel. With a strong foundation in both Front-End and Back-End development, I create seamless user experiences and scalable web solutions.',
  //   description: [
  //     'Developed and optimized web applications for various clients, ensuring high performance and usability.',
  //     'Leveraged React for building interactive and modern user interfaces, while using Laravel for efficient backend development and API integration.',
  //     'Focused on clean, maintainable code and best practices in security, scalability, and responsiveness.',
  //     'Collaborated with clients to understand project requirements, implement custom solutions, and deliver high-quality results.',
  //     'Continuously learning and adapting to the latest web technologies to enhance development efficiency and innovation.',
  //   ],
  // },
  {
    id: 2,
    institution: 'Sekolah Erenos',
    logo: '/images/logo/erenos.png',
    alt: 'Sekolah Erenos Logo',
    title: 'Website Developer',
    period: 'Feb 2023 — Aug 2023',
    work: 'Intern',
    descriptionType: 'list',
    description: [
      'Developed and maintained the E-Report Erenos web application using Laravel 9 for backend development and Blade for frontend rendering.',
      'Designed and implemented database structures using MySQL to store and manage student data, teacher information, subjects, attendance, and grades efficiently.',
      'Created an intuitive dashboard for administrators, teachers, and students to manage academic records and generate final student reports seamlessly.',
      'Implemented role-based access control (RBAC) to ensure secure and structured access for different user levels within the system.',
      'Integrated attendance tracking and automated report generation, reducing manual work and improving efficiency in student performance evaluation.',
      'Collaborated with the academic and IT teams to gather requirements and continuously enhance system functionalities based on user feedback.',
      'Conducted user training sessions for teachers and staff on how to utilize the system effectively.',
    ],
  },
  {
    id: 3,
    institution: 'PT Reka Optima',
    logo: '/images/logo/reka-optima.png',
    alt: 'PT Reka Optima Logo',
    title: 'Data Entry',
    period: 'Jul 2019 — Jun 2020',
    work: 'Full Time',
    descriptionType: 'list',
    description: [
      'Input and verify aircraft component parts data into the system.',
      'Communicate effectively with relevant teams to ensure smooth workflow.',
      'Perform daily data processing tasks in accordance with company guidelines.',
      'Aircraft management system training to employees.',
    ],
  },
];

export default experiences;
