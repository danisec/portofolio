export const siteConfig = {
  name: 'Dani Aprilyanto',
  shortName: 'Dani A.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://daniaprilyanto.my.id',
  role: 'Full-Stack Web Developer',
  locale: 'en_US',
  language: 'en',
  location: 'Tangerang Selatan, Indonesia',
  email: 'hello@daniaprilyanto.my.id',
  description:
    'Full-Stack Web Developer with 3 years shipping production apps. Laravel, React, and Next.js — from API design and database modeling to responsive UI delivery.',
  keywords: [
    'Dani Aprilyanto',
    'Full-Stack Web Developer',
    'Laravel Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Developer Indonesia',
    'Backend Developer',
    'Frontend Developer',
  ],
  social: {
    github: 'https://github.com/danisec',
    linkedin: 'https://www.linkedin.com/in/dani-aprilyanto',
  },
  resumePdf: '/resume/resume-dani-aprilyanto.pdf',
  ogImage: '/opengraph-image',
} as const;

export type SiteConfig = typeof siteConfig;
