interface ExperienceItem {
  id: string;
  institution: string;
  logo: string;
  alt: string;
  title: string;
  period: string;
  location: string;
  workType: string;
  summary: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'buildwithangga',
    institution: 'BuildWithAngga',
    logo: '/images/logo/buildwithangga.png',
    alt: 'BuildWithAngga logo',
    title: 'Backend Developer Intern',
    period: 'Sep 2025 — Feb 2026',
    location: 'Remote',
    workType: 'Internship',
    summary:
      'Worked across engineering and educational product delivery, from feature implementation to codebase refinement for Next.js and Laravel projects.',
    highlights: [
      'Built and maintained Next.js source-code projects with reusable architecture, including digital village management case studies.',
      'Designed interactive learning materials for the "Vibe Coding Next.js" class, featuring a hospital dashboard project.',
      'Refactored Laravel modules to improve readability, maintainability, and delivery speed.',
      'Authored developer-focused educational articles and ran manual QA across web pages for consistency.',
    ],
  },
  {
    id: 'erenos',
    institution: 'Sekolah Erenos',
    logo: '/images/logo/erenos.png',
    alt: 'Sekolah Erenos logo',
    title: 'Web Developer Intern',
    period: 'Feb 2023 — Aug 2023',
    location: 'Tangerang Selatan',
    workType: 'Internship',
    summary:
      'Built and maintained E-Report Erenos using Laravel 9, Blade, and MySQL to digitize student reporting, attendance, and academic administration.',
    highlights: [
      'Implemented role-based access control and dashboards for admin, teacher, and student users.',
      'Integrated attendance tracking and automated report generation, reducing manual administrative work.',
      'Designed structured relational database tables for student, teacher, subject, and grade records.',
      'Gathered requirements with academic and IT teams, then ran user training sessions for teachers and staff.',
    ],
  },
  {
    id: 'reka-optima',
    institution: 'PT Reka Optima',
    logo: '/images/logo/reka-optima.png',
    alt: 'PT Reka Optima logo',
    title: 'Data Entry',
    period: 'Jul 2019 — Jun 2020',
    location: 'Tangerang Selatan',
    workType: 'Full-time',
    summary:
      'Managed high-volume aircraft component records with strict data accuracy requirements and cross-team handoffs.',
    highlights: [
      'Processed and verified hundreds of aircraft component records daily for the aircraft management system.',
      'Improved data-entry workflow to increase speed without sacrificing accuracy.',
      'Supported onboarding by documenting and teaching basic system procedures to new staff.',
    ],
  },
];

export default experiences;
