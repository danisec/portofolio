'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import HomeIcon from '@/components/atoms/svg/Home';
import BriefcaseIcon from '@/components/atoms/svg/Briefcase';
import GraduationIcon from '@/components/atoms/svg/Graduation';
import RocketIcon from '@/components/atoms/svg/Rocket';
import CommandIcon from '@/components/atoms/svg/Command';
import CpuIcon from '@/components/atoms/svg/Cpu';
import useElementVisible from '@/hooks/useElementVisible';
import useScrollSpy from '@/hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'experience', 'education', 'showcase', 'my-stack', 'my-services'];

interface LinkNavbarProps {
  variant?: 'desktop' | 'mobile';
}

function LinkNavbar({ variant = 'desktop' }: LinkNavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const listRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState<{ start: number; size: number } | null>(null);

  const isVisible = useElementVisible(listRef);

  const activeSection = useScrollSpy({
    sectionIds: SECTION_IDS,
    enabled: isHome,
  });

  useEffect(() => {
    const updateIndicator = () => {
      const container = listRef.current;
      if (!isHome || !isVisible || !container || !activeSection) {
        setIndicator(null);
        return;
      }

      const el = container.querySelector<HTMLElement>(`[data-section="${activeSection}"]`);
      if (!el) {
        setIndicator(null);
        return;
      }

      if (variant === 'desktop') {
        setIndicator({ start: el.offsetTop, size: el.offsetHeight });
      } else {
        setIndicator({ start: el.offsetLeft + el.offsetWidth / 2, size: 4 });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection, variant, isHome, isVisible]);

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
      label: 'Projects',
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
    <div
      ref={listRef}
      className={clsx(
        ['relative'],
        variant === 'mobile' ? ['flex w-full gap-1'] : ['flex flex-col gap-2'],
      )}
    >
      {indicator && variant === 'desktop' && (
        <span
          aria-hidden="true"
          className={clsx(
            ['absolute left-0 w-full rounded-xl'],
            ['border border-slate-300 bg-slate-200'],
            ['dark:border-neutral-700 dark:bg-neutral-800'],
            ['transition-[top] duration-300 ease-out'],
          )}
          style={{ top: indicator.start, height: indicator.size }}
        />
      )}
      {indicator && variant === 'mobile' && (
        <span
          aria-hidden="true"
          className={clsx(
            ['absolute top-0 h-1 w-1 -translate-x-1/2 rounded-full'],
            ['bg-blue-600 dark:bg-blue-400'],
            ['transition-[left] duration-300 ease-out'],
          )}
          style={{ left: indicator.start }}
        />
      )}

      {links.map((link) => {
        const isActive = isHome && activeSection === link.section;

        return (
          <Link
            key={link.href}
            href={link.href}
            data-section={link.section}
            aria-current={isActive ? 'page' : undefined}
            aria-label={variant === 'mobile' ? link.label : undefined}
            title={variant === 'mobile' ? link.label : undefined}
            className={clsx(
              variant === 'mobile'
                ? [
                    'group relative flex min-w-0 flex-1 items-center justify-center rounded-xl px-2 py-2 text-[11px] font-medium',
                  ]
                : [
                    'group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium',
                    'border border-transparent',
                  ],
              isActive
                ? [
                    'text-slate-900 dark:text-white',
                    variant === 'mobile' ? '' : 'border-transparent',
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
        );
      })}
    </div>
  );
}

export default LinkNavbar;
