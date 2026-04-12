import Image from 'next/image';
import clsx from 'clsx';
import ButtonHero from './components/ButtonHero';
import TechStack from './components/TechStack';
import data from '@/data/hero';

export default function Hero() {
  return (
    <section id="hero" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-14'])}>
        <div
          className={clsx(['grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]'], ['items-start'])}
        >
          <div
            className={clsx(
              ['order-2 space-y-5 lg:order-1'],
              ['max-w-3xl'],
            )}
            data-aos="fade-up"
            data-aos-delay="30"
          >
            <p className={clsx(['section-eyebrow'])}>Available for full-time and freelance projects</p>
            <h1 className={clsx(['text-3xl font-semibold text-balance md:text-4xl lg:text-5xl'])}>
              {data.headline}
            </h1>
            <p className={clsx(['section-description text-lg'])}>{data.subheadline}</p>

            <ul className={clsx(['space-y-2'])}>
              {data.proofPoints.map((item) => (
                <li key={item} className={clsx(['flex items-start gap-2 text-sm lg:text-base'])}>
                  <span
                    className={clsx(['mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400'])}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ButtonHero />
          </div>

          <div
            className={clsx(
              ['order-1 card-surface lg:order-2'],
              ['overflow-hidden'],
              ['p-4 sm:p-5'],
              ['w-full max-w-sm mx-auto lg:justify-self-end'],
            )}
            data-aos="zoom-in"
            data-aos-delay="5"
          >
            <div className={clsx(['relative aspect-square overflow-hidden rounded-xl bg-slate-100'])}>
              <Image
                src={data.image}
                alt={data.alt}
                width={500}
                height={500}
                priority={true}
                quality={95}
                className={clsx(['h-full w-full object-cover object-top pt-2'])}
              />
            </div>
            <div className={clsx(['mt-4 space-y-1'])}>
              <p className={clsx(['text-lg font-semibold'])}>{data.name}</p>
              <p className={clsx(['text-sm text-slate-600 dark:text-neutral-300'])}>{data.role}</p>
              <p className={clsx(['text-sm text-slate-500 dark:text-neutral-400'])}>
                <span className={clsx(['animate-wave'])}>👋</span> Based in Tangerang Selatan, Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className={clsx(['mt-8'])} data-aos="fade-up" data-aos-delay="120">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
