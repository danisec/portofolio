'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import LinkNavbar from '@/components/molecules/LinkNavbar';

function NavbarMobile() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed bottom-0 left-0 z-50 block h-20 w-full rounded-tl-3xl rounded-tr-3xl border-t border-slate-200 bg-white/50 backdrop-blur-lg backdrop-filter transition-transform duration-300 xl:hidden dark:border-neutral-800 dark:bg-neutral-900/50 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div
          className={clsx(
            ['flex'],
            ['items-center justify-center'],
            ['sx:gap-2 ms:gap-4 gap-1'],
            ['mx-auto'],
            ['h-full max-w-xl'],
            ['font-medium'],
          )}
        >
          <LinkNavbar />
        </div>
      </nav>
    </>
  );
}

export default NavbarMobile;
