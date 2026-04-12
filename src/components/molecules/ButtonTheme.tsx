'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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
        aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        {currentTheme === 'dark' ? <Moon className="h-4 w-4 sm:h-5 sm:w-5" /> : <Sun className="h-4 w-4 sm:h-5 sm:w-5" />}
      </button>
    </>
  );
}

export default ButtonTheme;
