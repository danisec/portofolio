'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import clsx from 'clsx';
import Moon from '@/components/atoms/svg/Moon';
import Sun from '@/components/atoms/svg/Sun';

function ButtonTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid theme flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? 'light' : 'dark';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(next);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const viewTransition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    viewTransition.ready
      .then(() => {
        const radius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        );
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
          },
          {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {});
  };

  return (
    <>
      <button
        type="button"
        className={clsx(
          ['inline-flex shrink-0 items-center justify-center'],
          ['size-8 sm:size-9'],
          ['cursor-pointer'],
          ['rounded-lg sm:rounded-xl'],
          ['border border-slate-300 dark:border-neutral-700'],
          ['bg-slate-100 dark:bg-neutral-800/90'],
          ['hover:bg-slate-200 hover:dark:bg-neutral-800/70'],
          ['transition-colors'],
        )}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={toggleTheme}
      >
        <span className={clsx(['relative block size-4 sm:size-5'])} aria-hidden="true">
          <Sun
            className={clsx(
              ['absolute inset-0 h-full w-full'],
              ['transition-all duration-300'],
              isDark ? ['scale-0 -rotate-90 opacity-0'] : ['scale-100 rotate-0 opacity-100'],
            )}
          />
          <Moon
            className={clsx(
              ['absolute inset-0 h-full w-full'],
              ['transition-all duration-300'],
              isDark ? ['scale-100 rotate-0 opacity-100'] : ['scale-0 rotate-90 opacity-0'],
            )}
          />
        </span>
      </button>
    </>
  );
}

export default ButtonTheme;
