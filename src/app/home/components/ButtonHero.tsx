import Link from 'next/link';
import clsx from 'clsx';
import Email from '@/components/atoms/svg/Email';
import Document from '@/components/atoms/svg/Document';

function ButtonHero() {
  return (
    <>
      <div className={clsx(['flex flex-row'], ['mt-4 sm:mt-8'], ['gap-4 lg:gap-6'])}>
        <Link
          className={clsx(
            ['w-full'],
            ['flex flex-row'],
            ['items-center justify-center'],
            ['gap-2'],
            ['text-base font-normal lg:text-lg'],
            ['py-2 lg:py-3'],
            ['rounded-lg'],
            ['border border-slate-300 dark:border-neutral-700/50'],
            ['bg-slate-200 dark:bg-neutral-800'],
            ['hover:bg-slate-300 dark:hover:bg-neutral-900'],
          )}
          href={'mailto:daniaprilyanto35@gmail.com'}
        >
          <Email />
          Contact Me
        </Link>

        <Link
          className={clsx(
            ['w-full'],
            ['flex flex-row'],
            ['items-center justify-center'],
            ['gap-1.5'],
            ['text-base font-normal lg:text-lg'],
            ['rounded-lg'],
            ['py-2 lg:py-3'],
            ['border border-slate-300 dark:border-neutral-700/50'],
            ['bg-slate-200 dark:bg-neutral-800'],
            ['hover:bg-slate-300 dark:hover:bg-neutral-900'],
          )}
          href={'/resume'}
        >
          <Document />
          Resume
        </Link>
      </div>
    </>
  );
}

export default ButtonHero;
