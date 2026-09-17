import Link from 'next/link';
import clsx from 'clsx';
import Email from '@/components/atoms/svg/Email';
import Document from '@/components/atoms/svg/Document';
import LinkedInIcon from '@/components/atoms/svg/LinkedIn';
import GithubIcon from '@/components/atoms/svg/Github';

function HeroActions() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/dani-aprilyanto',
      icon: <LinkedInIcon $className="h-4 w-4 fill-current" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/danisec',
      icon: <GithubIcon $className="h-4 w-4 fill-current" />,
      label: 'GitHub',
    },
  ];

  return (
    <div className={clsx(['flex flex-col gap-4'])}>
      <div className={clsx(['flex flex-wrap gap-3'])}>
        <Link
          className={clsx(
            ['inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3'],
            ['text-sm font-semibold lg:text-base'],
            ['bg-blue-600 text-white'],
            ['transition-colors ease-in-out'],
            ['hover:bg-blue-700 active:bg-blue-800'],
          )}
          href={'mailto:hello@daniaprilyanto.my.id'}
        >
          <Email />
          Let&apos;s collaborate
        </Link>

        <Link
          className={clsx(
            ['inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3'],
            ['text-sm font-semibold lg:text-base'],
            ['border border-slate-400 bg-slate-100 text-slate-900'],
            ['dark:border-neutral-600 dark:bg-neutral-800 dark:text-white'],
            ['transition-colors ease-in-out'],
            ['hover:bg-slate-200 hover:border-slate-500 active:bg-slate-200'],
            ['dark:hover:bg-neutral-700 dark:hover:border-neutral-500 dark:active:bg-neutral-700'],
          )}
          href={'/resume'}
        >
          <Document />
          View resume
        </Link>
      </div>

      <div className={clsx(['flex flex-wrap items-center gap-x-4 gap-y-2'], ['2xl:hidden'])}>
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={clsx(
              ['inline-flex items-center gap-2'],
              ['text-sm font-medium text-slate-600 dark:text-neutral-400'],
              ['transition-colors ease-in-out'],
              ['hover:text-slate-900 dark:hover:text-white'],
            )}
          >
            <span className={clsx(['shrink-0'])} aria-hidden="true">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroActions;
