'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import CommandIcon from '@/components/atoms/svg/Command';
import getTechStacks from '@/data/stack';

function Stack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid theme flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null
  if (!mounted) return null;

  const techStacks = getTechStacks(theme as 'light' | 'dark');

  return (
    <>
      <div
        id="my-stack"
        className={clsx(
          ['py-4 sm:py-6'],
          ['border-b lg:border-x'],
          ['border-zinc-200 dark:border-zinc-700'],
        )}
      >
        <div className={clsx(['mt-6'], ['flex flex-col'], ['gap-4'], ['px-4 sm:px-8'])}>
          <div className={clsx(['flex flex-col'], ['gap-2'])}>
            <div className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}>
              <CommandIcon $className="w-10 h-10 lg:w-12 lg:h-12 dark:text-white stroke-current" />
              <h1 className={clsx(['text-2xl'], ['font-semibold'])}>My Stack</h1>
            </div>
            <p className={clsx(['ml-2'], ['text-base'], ['font-normal'])}>
              Commited and adaptable to new technologies with expertise in them.
            </p>
          </div>

          <div
            className={clsx(['my-4'], ['flex flex-wrap'], ['gap-4 sm:gap-8'], ['py-6'], ['w-full'])}
          >
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className={clsx(
                  ['flex w-full flex-row'],
                  ['items-center'],
                  ['gap-4'],
                  ['p-4'],
                  ['rounded-xl'],
                  ['border border-slate-300 dark:border-neutral-800'],
                  ['ms:w-52 sm:w-62 md:w-80 lg:w-3/10'],
                  ['bg-slate-200 dark:bg-neutral-900'],
                )}
                data-aos="fade-down"
                data-aos-delay={index * 20}
              >
                <div
                  className={clsx(
                    ['flex'],
                    ['items-center justify-center'],
                    ['rounded-lg'],
                    ['p-2'],
                    ['bg-slate-100 dark:bg-neutral-800'],
                  )}
                >
                  {stack.icon}
                </div>

                <div>
                  <h1 className={clsx(['text-lg'], ['font-semibold'])}>{stack.name}</h1>
                  <p className={clsx(['text-sm sm:text-sm'], ['font-normal'])}>
                    {stack.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
