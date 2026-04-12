import Link from 'next/link';
import clsx from 'clsx';
import Email from '@/components/atoms/svg/Email';
import Document from '@/components/atoms/svg/Document';

function ButtonHero() {
  return (
    <div className={clsx(['mt-6 flex flex-wrap gap-3'])}>
      <Link
        className={clsx(
          ['inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3'],
          ['text-sm font-semibold lg:text-base'],
          ['border border-blue-700 bg-blue-600 text-white'],
          ['hover:bg-blue-700'],
        )}
        href={'mailto:daniaprilyanto35@gmail.com'}
      >
        <Email />
        Let&apos;s collaborate
      </Link>

      <Link
        className={clsx(
          ['inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3'],
          ['text-sm font-semibold lg:text-base'],
          ['border border-slate-300 bg-slate-100 text-slate-900'],
          ['dark:border-neutral-700 dark:bg-neutral-800 dark:text-white'],
          ['hover:bg-slate-200 dark:hover:bg-neutral-700'],
        )}
        href={'/resume'}
      >
        <Document />
        View resume
      </Link>
    </div>
  );
}

export default ButtonHero;
