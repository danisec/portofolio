'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import ButtonTheme from '@/components/molecules/ButtonTheme';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        ['sticky top-0 z-40'],
        ['transition-colors duration-300'],
        scrolled ? ['bg-[color:var(--background)]/90 backdrop-blur'] : ['bg-transparent'],
      )}
    >
      <div
        className={clsx(
          ['border-b transition-colors duration-300'],
          scrolled ? ['border-zinc-200 dark:border-zinc-800'] : ['border-transparent'],
        )}
      >
        <div
          className={clsx(
            ['section-shell'],
            ['flex flex-row items-center justify-between gap-4'],
            ['py-4'],
          )}
        >
          <span
            className={clsx(
              ['inline-flex items-center gap-2 rounded-full'],
              ['border border-emerald-200 bg-emerald-50'],
              ['px-3 py-1.5'],
              ['text-xs font-semibold text-emerald-700'],
              ['dark:border-emerald-900/70 dark:bg-emerald-950/60 dark:text-emerald-300'],
            )}
          >
            <span className={clsx(['relative flex size-2'])} aria-hidden="true">
              <span
                className={clsx([
                  'absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400',
                ])}
              />
              <span className={clsx(['relative inline-flex size-2 rounded-full bg-emerald-500'])} />
            </span>
            Available for hire
          </span>
          <ButtonTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
