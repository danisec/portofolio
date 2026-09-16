import clsx from 'clsx';
import HomePage from '@/app/home';
import Navbar from '@/components/organisms/Navbar';
import NavbarMobile from '@/components/organisms/NavbarMobile';
import Aside from '@/components/organisms/Aside';

export default function Page() {
  return (
    <div
      className={clsx(
        ['row-auto'],
        ['mx-auto'],
        ['w-full'],
        ['xl:grid xl:grid-cols-[13rem_minmax(0,1fr)_13rem]'],
        ['items-start'],
      )}
    >
      <div className={clsx(['sticky top-0'], ['hidden h-dvh xl:block'])}>
        <div className={clsx(['h-full border-r border-zinc-200 dark:border-zinc-800'])}>
          <Navbar />
        </div>
      </div>

      <div className={clsx(['w-full min-w-0'])}>
        <HomePage />
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
