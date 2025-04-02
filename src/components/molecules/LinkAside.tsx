import Link from 'next/link';
import clsx from 'clsx';
import LinkedInIcon from '@/components/atoms/svg/LinkedIn';
import GithubIcon from '@/components/atoms/svg/Github';

function LinkAside() {
  const links: {
    href?: string;
    icon?: React.ReactNode;
    section?: string;
  }[] = [
    {
      href: 'https://www.linkedin.com/in/dani-aprilyanto',
      icon: <LinkedInIcon $className="xl:w-6.5 xl:h-6.5 w-5 h-5 dark:text-white fill-current" />,
    },
    {
      href: 'https://github.com/danisec',
      icon: <GithubIcon $className="xl:w-7 xl:h-7 w-5 h-5 dark:text-white fill-current" />,
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href!}
          target="_blank"
          className={clsx(
            ['flex'],
            ['items-center justify-center'],
            ['rounded-lg'],
            ['h-10 xl:h-12'],
            ['w-10 xl:w-12'],
            ['bg-slate-200 dark:bg-neutral-800/80'],
            ['transition-all ease-in-out'],
          )}
        >
          {link.icon}
        </Link>
      ))}
    </>
  );
}

export default LinkAside;
