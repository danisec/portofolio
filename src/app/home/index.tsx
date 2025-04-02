import clsx from 'clsx';
import Header from '@/components/organisms/Header';
import Hero from './Hero';
import Experience from './Experience';
import Education from './Education';
import Showcase from './Showcase';
import Stack from './Stack';
import Services from './Services';
import Footer from '@/components/organisms/Footer';

export default function HomePage() {
  return (
    <>
      <div className={clsx(['mx-auto'], ['w-full'])}>
        <Header />

        <main className={clsx(['dark:bg-neutral-950'])}>
          <Hero />
          <Experience />
          <Education />
          <Showcase />
          <Stack />
          <Services />
          <Footer />
        </main>
      </div>
    </>
  );
}
