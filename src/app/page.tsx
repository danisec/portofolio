'use client';

import { useEffect } from 'react';
import clsx from 'clsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from '@/app/home';
import Navbar from '@/components/organisms/Navbar';
import NavbarMobile from '@/components/organisms/NavbarMobile';
import Aside from '@/components/organisms/Aside';

export default function Page() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div
        className={clsx(
          ['row-auto'],
          ['mx-auto'],
          ['grid xl:grid-cols-12'],
          ['items-start'],
          ['xl:max-w-screen-xl'],
        )}
      >
        <div
          className={clsx(['sticky'], ['top-0'], ['col-span-1'], ['h-screen'], ['hidden xl:block'])}
        >
          <Navbar />
        </div>

        <div className={clsx(['col-span-10'], ['w-full'])}>
          <HomePage />
          <NavbarMobile />
        </div>

        <div
          className={clsx(['sticky'], ['top-0'], ['col-span-1'], ['h-screen'], ['hidden xl:block'])}
        >
          <Aside />
        </div>
      </div>
    </>
  );
}
