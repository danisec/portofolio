'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import HomeIcon from '@/components/atoms/svg/Home';
import BriefcaseIcon from '@/components/atoms/svg/Briefcase';
import GraduationIcon from '@/components/atoms/svg/Graduation';
import RocketIcon from '@/components/atoms/svg/Rocket';
import CommandIcon from '@/components/atoms/svg/Command';
import CpuIcon from '@/components/atoms/svg/Cpu';

interface LinkNavbarProps {
  variant?: 'desktop' | 'mobile';
}

function LinkNavbar({ variant = 'desktop' }: LinkNavbarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const links = [
      'hero',
      'experience',
      'education',
      'showcase',
      'my-stack',
      'my-services',
    ];
    const sections = links
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      setActiveSection('');
      return;
    }

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const links: {
    href: string;
    icon: React.ReactNode;
    section: string;
    label: string;
  }[] = [
    {
      href: '/#hero',
      icon: <HomeIcon $className="h-5 w-5 dark:text-white fill-current" />,
      section: 'hero',
      label: 'Overview',
    },
    {
      href: '/#experience',
      icon: <BriefcaseIcon $className="h-5 w-5 dark:text-white stroke-current" />,
      section: 'experience',
      label: 'Experience',
    },
    {
      href: '/#education',
      icon: <GraduationIcon $className="h-5 w-5 dark:text-white fill-current" />,
      section: 'education',
      label: 'Education',
    },
    {
      href: '/#showcase',
      icon: <RocketIcon $className="h-5 w-5 dark:text-white stroke-current" />,
      section: 'showcase',
      label: 'Case Studies',
    },
    {
      href: '/#my-stack',
      icon: <CommandIcon $className="h-5 w-5 dark:text-white stroke-current" />,
      section: 'my-stack',
      label: 'Stack',
    },
    {
      href: '/#my-services',
      icon: <CpuIcon $className="h-5 w-5 dark:text-white stroke-current" />,
      section: 'my-services',
      label: 'Services',
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={activeSection === link.section ? 'page' : undefined}
          aria-label={variant === 'mobile' ? link.label : undefined}
          title={variant === 'mobile' ? link.label : undefined}
          className={clsx(
            variant === 'mobile'
              ? [
                  'group relative flex min-w-0 flex-1 items-center justify-center rounded-xl px-2 py-2 text-[11px] font-medium',
                ]
              : [
                  'group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium',
                  'border border-transparent',
                ],
            activeSection === link.section
              ? [
                  'bg-slate-200 text-slate-900 dark:bg-neutral-800 dark:text-white',
                  variant === 'desktop' ? 'border-slate-300 dark:border-neutral-700' : '',
                ]
              : [
                  'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  'dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white',
                ],
            ['transition-colors ease-in-out'],
          )}
        >
          <span className={clsx(['shrink-0'])}>{link.icon}</span>

          {variant === 'mobile' ? (
            <>
              <span
                className={clsx(
                  ['pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1'],
                  ['rounded-md border border-slate-300 bg-white px-2 py-1'],
                  ['text-[10px] font-semibold whitespace-nowrap'],
                  ['opacity-0 shadow-sm transition-all duration-200'],
                  ['group-hover:translate-y-0 group-hover:opacity-100'],
                  ['group-focus:translate-y-0 group-focus:opacity-100'],
                  ['group-focus-visible:translate-y-0 group-focus-visible:opacity-100'],
                  ['dark:border-neutral-700 dark:bg-neutral-900'],
                )}
                aria-hidden="true"
              >
                {link.label}
              </span>
              <span className={clsx(['sr-only'])}>{link.label}</span>
            </>
          ) : (
            <span className={clsx(['truncate'])}>{link.label}</span>
          )}
        </Link>
      ))}
    </>
  );
}

export default LinkNavbar;
