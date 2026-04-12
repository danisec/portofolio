'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import CommandIcon from '@/components/atoms/svg/Command';
import getTechStacks from '@/data/stack';

function Stack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStacks = mounted ? getTechStacks(theme as 'light' | 'dark') : [];
  const groupedStacks = techStacks.reduce<Record<string, typeof techStacks>>((acc, stack) => {
    if (!acc[stack.category]) {
      acc[stack.category] = [];
    }

    acc[stack.category].push(stack);
    return acc;
  }, {});

  if (!mounted) return null;

  return (
    <section id="my-stack" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Tools I use</p>
          <div className={clsx(['flex items-center gap-3'])}>
            <CommandIcon $className="h-9 w-9 dark:text-white stroke-current" />
            <h2 className={clsx(['section-title'])}>Technical Stack</h2>
          </div>
          <p className={clsx(['section-description max-w-3xl'])}>
            A practical toolkit I use to ship full-stack products with stable quality from frontend
            to deployment.
          </p>
        </div>

        <div className={clsx(['space-y-8'])}>
          {Object.entries(groupedStacks).map(([category, items], categoryIndex) => (
            <div key={category} className={clsx(['space-y-4'])}>
              <h3 className={clsx(['text-lg font-semibold'])}>{category}</h3>
              <div className={clsx(['grid gap-4 md:grid-cols-2 xl:grid-cols-3'])}>
                {items.map((stack, index) => (
                  <article
                    key={stack.id}
                    className={clsx(['card-surface flex h-full flex-col gap-3 p-4'])}
                    data-aos="fade-up"
                    data-aos-delay={(categoryIndex * 3 + index) * 40}
                  >
                    <div className={clsx(['flex items-center gap-3'])}>
                      <div
                        className={clsx(
                          ['flex items-center justify-center rounded-lg bg-white p-2'],
                          ['dark:bg-neutral-800'],
                        )}
                      >
                        {stack.icon}
                      </div>
                      <p className={clsx(['text-base font-semibold'])}>{stack.name}</p>
                    </div>
                    <p className={clsx(['text-sm text-slate-700 dark:text-neutral-300'])}>
                      {stack.description}
                    </p>
                    <p
                      className={clsx(
                        ['rounded-lg bg-slate-100 px-3 py-2 text-sm'],
                        ['text-slate-700 dark:bg-neutral-800 dark:text-neutral-200'],
                      )}
                    >
                      Outcome: {stack.outcome}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
