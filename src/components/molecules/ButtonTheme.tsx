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
          ['cursor-pointer'],
          ['p-1.5'],
          ['rounded-lg'],
          ['bg-slate-200 dark:bg-neutral-800/90'],
          ['hover:bg-slate-300 hover:dark:bg-neutral-800/70'],
        )}
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        {currentTheme === 'dark' ? <Moon /> : <Sun />}
      </button>
    </>
  );
}

export default ButtonTheme;
