import type { Metadata } from 'next';
import clsx from 'clsx';
import ResumePage from './index';
import Navbar from '@/components/organisms/Navbar';
import NavbarMobile from '@/components/organisms/NavbarMobile';
import Aside from '@/components/organisms/Aside';
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
    <div
      className={clsx(
        ['row-auto'],
        ['mx-auto'],
        ['w-full'],
        ['xl:grid xl:grid-cols-[13rem_minmax(0,1fr)_13rem]'],
        ['items-start'],
      )}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Resume', url: '/resume' },
        ])}
      />
      <div className={clsx(['sticky top-0'], ['hidden h-dvh xl:block'])}>
        <div className={clsx(['h-full border-r border-zinc-200 dark:border-zinc-800'])}>
          <Navbar />
        </div>
      </div>

      <div className={clsx(['w-full min-w-0'])}>
        <ResumePage />
        <NavbarMobile />
      </div>

      <div className={clsx(['sticky top-0'], ['hidden h-dvh xl:block'])}>
        <div className={clsx(['h-full border-l border-zinc-200 dark:border-zinc-800'])}>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default page;
