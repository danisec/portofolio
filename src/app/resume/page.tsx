import type { Metadata } from 'next';
import ResumePage from './index';
import SiteShell from '@/components/organisms/SiteShell';
import { JsonLd } from '@/components/atoms/JsonLd';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Full resume of Dani Aprilyanto — Full-Stack Web Developer. Work experience, technical stack, education, and project background in one document.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    type: 'profile',
    url: '/resume',
    title: 'Resume — Dani Aprilyanto',
    description:
      'Work experience, technical stack, education, and project background of Dani Aprilyanto.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Resume — Dani Aprilyanto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume — Dani Aprilyanto',
    description:
      'Work experience, technical stack, education, and project background of Dani Aprilyanto.',
    images: ['/opengraph-image'],
  },
};

function page() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Resume', url: '/resume' },
        ])}
      />
      <ResumePage />
    </SiteShell>
  );
}

export default page;
