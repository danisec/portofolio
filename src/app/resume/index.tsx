import clsx from 'clsx';
import Header from '@/components/organisms/Header';
import Resume from './Resume';
import Footer from '@/components/organisms/Footer';

export default function ResumePage() {
  return (
    <>
      <div className={clsx(['mx-auto'], ['w-full'])}>
        <Header />

        <main>
          <Resume />
          <Footer />
        </main>
      </div>
    </>
  );
}
