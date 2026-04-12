'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import LinkNavbar from '@/components/molecules/LinkNavbar';

function NavbarMobile() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY < 96) {
        setIsVisible(true);
      } else if (delta > 12) {
        setIsVisible(false);
      } else if (delta < -10) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateVisibility);
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        ['fixed right-0 bottom-0 left-0 z-50 block xl:hidden'],
        ['border-t border-slate-200 bg-white/90 backdrop-blur-md'],
        ['dark:border-neutral-800 dark:bg-neutral-950/90'],
        ['transition-transform duration-300'],
        isVisible ? 'translate-y-0' : 'translate-y-full',
      )}
      aria-label="Mobile section navigation"
    >
      <div
        className={clsx(
          ['mx-auto flex max-w-3xl items-center gap-1 px-3 pt-2'],
          ['pb-[max(0.75rem,env(safe-area-inset-bottom))]'],
        )}
      >
        <LinkNavbar variant="mobile" />
      </div>
    </nav>
  );
}

export default NavbarMobile;
