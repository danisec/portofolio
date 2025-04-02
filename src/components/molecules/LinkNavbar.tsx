'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HomeIcon from '@/components/atoms/svg/Home';
import BriefcaseIcon from '@/components/atoms/svg/Briefcase';
import GraduationIcon from '@/components/atoms/svg/Graduation';
import RocketIcon from '@/components/atoms/svg/Rocket';
import CommandIcon from '@/components/atoms/svg/Command';
import CpuIcon from '@/components/atoms/svg/Cpu';

function LinkNavbar() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          const newActive = section.id;
          if (newActive !== activeSection) {
            setActiveSection(newActive);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, router]);

  const links: {
    href?: string;
    icon?: React.ReactNode;
    section?: string;
  }[] = [
    {
      href: '/#hero',
      icon: <HomeIcon $className="xl:w-8 xl:h-8 w-6 h-6 dark:text-white fill-current" />,
      section: 'hero',
    },
    {
      href: '/#experience',
      icon: <BriefcaseIcon $className="xl:w-8 xl:h-8 w-6 h-6 dark:text-white stroke-current" />,
      section: 'experience',
    },
    {
      href: '/#education',
      icon: <GraduationIcon $className="xl:w-9 xl:h-9 w-7 h-7 dark:text-white fill-current" />,
      section: 'education',
    },
    {
      href: '/#showcase',
      icon: <RocketIcon $className="xl:w-8 xl:h-8 w-6 h-6 dark:text-white stroke-current" />,
      section: 'showcase',
    },
    {
      href: '/#my-stack',
      icon: <CommandIcon $className="xl:w-8 xl:h-8 w-6 h-6 dark:text-white stroke-current" />,
      section: 'my-stack',
    },
    {
      href: '/#my-services',
      icon: <CpuIcon $className="xl:w-8 xl:h-8 w-6 h-6 dark:text-white stroke-current" />,
      section: 'my-services',
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href!}
          className={`flex h-12 w-12 items-center justify-center rounded-lg transition-all ease-in-out ${
            activeSection === link.section
              ? 'bg-slate-200 dark:bg-neutral-800'
              : 'xl:bg-slate-50 xl:dark:bg-neutral-900'
          } hover:bg-slate-300 dark:hover:bg-neutral-900`}
        >
          {link.icon}
        </Link>
      ))}
    </>
  );
}

export default LinkNavbar;
