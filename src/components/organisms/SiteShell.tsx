'use client';

import clsx from 'clsx';
import Navbar from '@/components/organisms/Navbar';
import NavbarMobile from '@/components/organisms/NavbarMobile';
import Aside from '@/components/organisms/Aside';

function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        ['mx-auto w-full'],
        ['2xl:grid 2xl:grid-cols-[13rem_minmax(0,1fr)_13rem]'],
        ['items-start'],
      )}
    >
      <div className={clsx(['sticky top-0'], ['hidden h-dvh 2xl:block'])}>
        <div className={clsx(['h-full border-r border-zinc-200 dark:border-zinc-800'])}>
          <Navbar />
        </div>
      </div>

      <div className={clsx(['w-full min-w-0'])}>
        {children}
        <NavbarMobile />
      </div>

      <div className={clsx(['sticky top-0'], ['hidden h-dvh 2xl:block'])}>
        <div className={clsx(['h-full border-l border-zinc-200 dark:border-zinc-800'])}>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default SiteShell;
