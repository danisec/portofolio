import Link from 'next/link';
import clsx from 'clsx';
import LinkedInIcon from '@/components/atoms/svg/LinkedIn';
import GithubIcon from '@/components/atoms/svg/Github';

interface LinkAsideProps {
  compact?: boolean;
}

function LinkAside({ compact = false }: LinkAsideProps) {
  const links: {
    href: string;
    icon: React.ReactNode;
    label: string;
    helper: string;
  }[] = [
    {
      href: 'https://www.linkedin.com/in/dani-aprilyanto',
      icon: <LinkedInIcon $className="h-5 w-5 dark:text-white fill-current" />,
      label: 'LinkedIn',
      helper: 'Professional profile',
    },
    {
      href: 'https://github.com/danisec',
      icon: <GithubIcon $className="h-5 w-5 dark:text-white fill-current" />,
      label: 'GitHub',
      helper: 'Source code and experiments',
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={clsx(
            compact
              ? ['inline-flex items-center justify-center rounded-xl border border-slate-300 p-2']
              : [
                  'flex items-center gap-3 rounded-xl border border-slate-300 p-3 dark:border-neutral-700',
                ],
            ['bg-slate-100 dark:bg-neutral-800/80'],
            ['transition-colors ease-in-out'],
            ['hover:bg-slate-200 dark:hover:bg-neutral-800'],
          )}
        >
          <span className={clsx(['shrink-0'])}>{link.icon}</span>
          {!compact && (
            <span className={clsx(['flex min-w-0 flex-col'])}>
              <span className={clsx(['text-sm font-semibold'])}>{link.label}</span>
              <span className={clsx(['text-xs text-slate-600 dark:text-neutral-400'])}>
                {link.helper}
              </span>
            </span>
          )}
        </Link>
      ))}
    </>
  );
}

export default LinkAside;
