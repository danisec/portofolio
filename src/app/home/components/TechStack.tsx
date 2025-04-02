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
    <>
      <div className={clsx(['relative'], ['w-full'], ['overflow-hidden'])}>
        <div className={clsx(['top-0 bottom-0 left-0'], ['z-50'], ['w-24'])}>
          <div className={clsx(['animate-scroll'], ['flex'], ['gap-6'], ['w-max lg:min-w-max'])}>
            {[...techStacks, ...techStacks].map((stack, index) => (
              <div
                key={index}
                className={clsx(['flex flex-row'], ['items-center'], ['shrink-0'], ['gap-2'])}
              >
                <div>{stack.icon}</div>
                <span className={clsx(['ms:text-base text-sm'], ['font-semibold'])}>
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
