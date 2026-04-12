'use client';

import dynamic from 'next/dynamic';
import clsx from 'clsx';
import DocumentIcon from '@/components/atoms/svg/Document';

// Lazy load PDFViewer to prevent SSR issues
const PDFViewer = dynamic(() => import('@/utils/PDFViewer/PDFViewer'), {
  ssr: false,
});

export default function Resume() {
  const pdfUrl = '/resume/resume-dani-aprilyanto.pdf';

  return (
    <section id="resume" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Resume</p>
          <div className={clsx(['flex flex-row items-center gap-3'])}>
            <DocumentIcon $className="h-9 w-9 dark:text-white stroke-current" />
            <h1 className={clsx(['section-title'])}>My Resume</h1>
          </div>
          <p className={clsx(['section-description'])}>
            Explore my full experience, technical depth, and project background in one document.
          </p>
        </div>

        <div className={clsx(['my-4'])}>
          <PDFViewer pdfUrl={pdfUrl} />
        </div>
      </div>
    </section>
  );
}
