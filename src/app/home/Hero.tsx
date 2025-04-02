import Image from 'next/image';
import clsx from 'clsx';
import LinkAside from '@/components/molecules/LinkAside';
import ButtonHero from './components/ButtonHero';
import TechStack from './components/TechStack';
import data from '@/data/hero';

export default function Hero() {
  return (
    <section
      id="hero"
      className={clsx(
        ['py-4 sm:py-6'],
        ['border-b lg:border-x'],
        ['border-zinc-200 dark:border-zinc-700'],
      )}
    >
      <div className={clsx(['flex flex-col'], ['gap-4'], ['mt-6 px-4 sm:px-8'])}>
        <div
          className={clsx(['flex flex-row'], ['items-center lg:items-start'], ['gap-4 md:gap-8'])}
        >
          <div
            className={clsx(
              ['relative aspect-square'],
              ['overflow-hidden'],
              ['w-6/12 max-w-lg'],
              ['rounded-lg'],
              ['bg-slate-100'],
            )}
            data-aos="zoom-in"
            data-aos-delay="5"
          >
            <Image
              src={data.image}
              alt={data.alt ?? 'Photo Dani Aprilyanto'}
              width={500}
              height={500}
              priority={true}
              quality={100}
              className={clsx(['relative'], ['pt-4'], ['h-full'], ['w-full'], ['object-cover'])}
            />
          </div>

          <div className={clsx(['flex flex-col'], ['justify-center'], ['w-full'])}>
            <h2
              className={clsx(['flex flex-row'], ['gap-2'], ['text-base font-normal md:text-lg'])}
              data-aos="fade-up"
              data-aos-delay="20"
            >
              <span className={clsx(['animate-wave'])}>👋</span>
              <span>Hello I Am</span>
            </h2>
            <h4
              className={clsx(
                ['mt-2'],
                ['ms:text-3xl sx:text-2xl text-xl md:text-4xl'],
                ['font-semibold'],
              )}
              data-aos="fade-up"
              data-aos-delay="40"
            >
              {data.name}
            </h4>

            <div
              className={clsx(['mt-4'], ['flex flex-row'], ['gap-3'], ['lg:hidden'])}
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <LinkAside />
            </div>

            <p
              className={clsx(
                ['mt-4'],
                ['text-base lg:text-lg'],
                ['font-normal'],
                ['hidden lg:block'],
              )}
              data-aos="fade-up"
              data-aos-delay="80"
            >
              {data.description}
            </p>

            <div className={clsx(['hidden lg:block'])} data-aos="fade-up" data-aos-delay="100">
              <ButtonHero />
            </div>
          </div>
        </div>

        <div
          className={clsx(['block lg:hidden'], ['leading-relaxed'])}
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <p className={clsx(['mt-4'], ['text-base lg:text-lg'], ['font-normal'])}>
            {data.description}
          </p>
        </div>

        <div className={clsx(['block lg:hidden'])} data-aos="fade-up" data-aos-delay="100">
          <ButtonHero />
        </div>

        <div className={clsx(['py-4'])}>
          <TechStack />
        </div>
      </div>
    </section>
  );
}
