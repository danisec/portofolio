import clsx from 'clsx';
import ResumePage from './index';
import Navbar from '@/components/organisms/Navbar';
import NavbarMobile from '@/components/organisms/NavbarMobile';
import Aside from '@/components/organisms/Aside';

function page() {
  return (
    <>
      <div
        className={clsx(
          ['grid xl:grid-cols-12'],
          ['row-auto'],
          ['items-start'],
          ['mx-auto'],
          ['xl:max-w-screen-xl'],
        )}
      >
        <div
          className={clsx(['sticky'], ['top-0'], ['col-span-1'], ['h-screen'], ['hidden xl:block'])}
        >
          <Navbar />
        </div>

        <div className={clsx(['col-span-10'], ['w-full'])}>
          <ResumePage />
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

export default page;
