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
  impact: string;
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
    impact: 'Delivered learning products and improved code quality for production-oriented training projects.',
    highlights: [
      'Built and maintained source-code projects in Next.js with reusable architecture patterns.',
      'Refactored Laravel modules to improve readability, maintainability, and delivery speed.',
      'Authored developer-focused educational content and tested pages for quality assurance.',
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
      'Built and maintained E-Report Erenos using Laravel and MySQL to digitize student reporting, attendance, and academic administration.',
    impact: 'Reduced manual reporting work and improved teacher and staff data management workflow.',
    highlights: [
      'Implemented role-based access and dashboards for admin, teacher, and student users.',
      'Designed structured relational database tables for academic records and reporting.',
      'Ran user onboarding sessions for teachers and staff after launch.',
    ],
  },
  {
    id: 'reka-optima',
    institution: 'PT Reka Optima',
    logo: '/images/logo/reka-optima.png',
    alt: 'PT Reka Optima logo',
    title: 'Data Entry Specialist',
    period: 'Jul 2019 — Jun 2020',
    location: 'Tangerang Selatan',
    workType: 'Full-time',
    summary:
      'Managed high-volume aircraft component records with strict data accuracy requirements and cross-team handoffs.',
    impact: 'Improved data verification flow and reduced repetitive input errors in daily operations.',
    highlights: [
      'Processed and verified hundreds of records each day with consistent data quality.',
      'Improved data-entry workflow to increase speed without sacrificing accuracy.',
      'Supported onboarding by documenting and teaching basic system procedures to new staff.',
    ],
  },
];

export default experiences;
