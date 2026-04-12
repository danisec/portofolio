'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import ReactStack from '@/components/atoms/svg/ReactStack';
import NextjsStack from '@/components/atoms/svg/NextjsStack';
import LaravelStack from '@/components/atoms/svg/LaravelStack';
import TypescriptStack from '@/components/atoms/svg/TypescriptStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';
import DockerStack from '@/components/atoms/svg/DockerStack';
import TailwindcssStack from '@/components/atoms/svg/TailwindcssStack';

function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid theme flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null
  if (!mounted) return null;

  const techStacks = [
    {
      icon: (
        <ReactStack
          $className="w-6 h-6 lg:w-8 lg:h-8"
          $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
          $strokeColor={theme === 'dark' ? '#ffffff' : '#000000'}
        />
      ),
      name: 'React',
    },
    {
      icon: (
        <NextjsStack
          $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current"
          $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
          $stopColor={theme === 'dark' ? '#000000' : '#ffffff'}
        />
      ),
      name: 'Next JS',
    },
    {
      icon: <LaravelStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Laravel',
    },
    {
      icon: <TypescriptStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'TypeScript',
    },
    {
      icon: <MysqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'MySQL',
    },
    {
      icon: <DockerStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Docker',
    },
    {
      icon: <TailwindcssStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
      name: 'Tailwind CSS',
    },
  ];

  return (
    <div
      className={clsx(
        ['relative overflow-hidden rounded-xl border border-slate-200 px-4 py-3'],
        ['bg-slate-50 dark:border-neutral-800 dark:bg-neutral-900'],
      )}
      aria-label="Core technology stack"
    >
      <p className={clsx(['mb-3 text-xs font-semibold tracking-wide text-slate-500 uppercase'])}>
        Core toolkit
      </p>
      <div className={clsx(['relative overflow-hidden'])}>
        <div className={clsx(['animate-scroll motion-reduce:animate-none'], ['flex w-max gap-6'])}>
          {[...techStacks, ...techStacks].map((stack, index) => (
            <div
              key={`${stack.name}-${index}`}
              className={clsx(['flex shrink-0 items-center gap-2 text-sm font-semibold'])}
              aria-hidden={index >= techStacks.length}
            >
              <div>{stack.icon}</div>
              <span>{stack.name}</span>
            </div>
          ))}
        </div>
        <div
          className={clsx(
            ['pointer-events-none absolute inset-y-0 left-0 w-12'],
            ['bg-gradient-to-r from-slate-50 to-transparent dark:from-neutral-900'],
          )}
        />
        <div
          className={clsx(
            ['pointer-events-none absolute inset-y-0 right-0 w-12'],
            ['bg-gradient-to-l from-slate-50 to-transparent dark:from-neutral-900'],
          )}
        />
      </div>
    </div>
  );
}

export default TechStack;
