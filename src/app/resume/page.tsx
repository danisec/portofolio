import clsx from 'clsx';
import ResumePage from './index';
import Navbar from '@/components/organisms/Navbar';
import NavbarMobile from '@/components/organisms/NavbarMobile';
import Aside from '@/components/organisms/Aside';

function page() {
  return (
    <div
      className={clsx(
        ['row-auto'],
        ['mx-auto'],
        ['w-full max-w-[1320px]'],
        ['xl:grid xl:grid-cols-[13rem_minmax(0,1fr)_13rem]'],
        ['items-start'],
      )}
    >
      <div className={clsx(['sticky top-0'], ['hidden h-dvh xl:block'])}>
        <div className={clsx(['h-full border-r border-zinc-200 dark:border-zinc-800'])}>
          <Navbar />
        </div>
      </div>

      <div className={clsx(['min-w-0 w-full'])}>
        <ResumePage />
        <NavbarMobile />
      </div>

      <div className={clsx(['sticky top-0'], ['hidden h-dvh xl:block'])}>
        <div className={clsx(['h-full border-l border-zinc-200 dark:border-zinc-800'])}>
          <Aside />
        </div>
      </div>
    </div>
  );
}

export default page;
