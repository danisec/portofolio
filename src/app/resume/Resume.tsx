'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import DocumentIcon from '@/components/atoms/svg/Document';

// Lazy load PDFViewer to prevent SSR issues
const PDFViewer = dynamic(() => import('@/utils/PDFViewer/PDFViewer'), {
  ssr: false,
});

export default function Resume() {
  const [pdfUrl] = useState('/resume/resume-dani-aprilyanto.pdf');

  return (
    <>
      <section
        id="resume"
        className={clsx(
          ['py-4 sm:py-6'],
          ['border-b lg:border-x'],
          ['border-zinc-200 dark:border-zinc-700'],
        )}
      >
        <div className={clsx(['mt-6'], ['flex flex-col'], ['gap-4'], ['px-4 sm:px-8'])}>
          <div className={clsx(['flex flex-col'], ['gap-2'])}>
            <div className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}>
              <DocumentIcon $className="w-10 h-10 lg:w-12 lg:h-12 dark:text-white stroke-current" />
              <h1 className={clsx(['text-xl lg:text-2xl'], ['font-semibold'])}>My Resume</h1>
            </div>
            <p className={clsx(['ml-2'], ['text-base'], ['font-normal'])}>
              View my resume to explore my experience, skills, and professional journey in detail.
            </p>
          </div>

          <div className={clsx(['my-4'])}>
            <PDFViewer pdfUrl={pdfUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
