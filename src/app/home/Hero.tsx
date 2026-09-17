import Image from 'next/image';
import clsx from 'clsx';
import HeroActions from './components/HeroActions';
import TechStack from './components/TechStack';
import data from '@/data/hero';

export default function Hero() {
  return (
    <section id="hero" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-14'])}>
        <div
          className={clsx(
            ['mx-auto grid gap-8'],
            ['items-start'],
            ['xl:grid-cols-[minmax(0,1fr)_22rem]'],
          )}
        >
          <div className={clsx(['order-1 space-y-5'], ['max-w-3xl'])}>
            <p className={clsx(['section-eyebrow'])}>
              Available for full-time and freelance projects
            </p>
            <h1
              className={clsx([
                'text-3xl font-semibold text-balance',
                'md:text-4xl',
                'xl:text-5xl',
              ])}
            >
              {data.headline}
            </h1>
            <p className={clsx(['section-description text-lg'])}>{data.subheadline}</p>

            <ul className={clsx(['space-y-2'])}>
              {data.proofPoints.map((item) => (
                <li key={item} className={clsx(['flex items-start gap-2 text-sm lg:text-base'])}>
                  <span
                    className={clsx([
                      'mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400',
                    ])}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <HeroActions />
          </div>

          <div
            className={clsx(
              ['card-surface order-2'],
              ['overflow-hidden'],
              ['p-4 sm:p-5'],
              ['mx-auto w-full max-w-sm xl:mx-0 xl:max-w-none'],
            )}
          >
            <div
              className={clsx([
                'relative aspect-square overflow-hidden rounded-xl bg-neutral-900 dark:bg-neutral-950',
              ])}
            >
              <Image
                src={data.image}
                alt={data.alt}
                width={1254}
                height={1254}
                sizes="(min-width: 1280px) 312px, 344px"
                priority={true}
                quality={85}
                className={clsx(['h-full w-full object-cover object-top'])}
              />
            </div>
            <div className={clsx(['mt-4 space-y-1'])}>
              <p className={clsx(['text-lg font-semibold'])}>{data.name}</p>
              <p className={clsx(['text-sm text-slate-600 dark:text-neutral-300'])}>{data.role}</p>
              <p className={clsx(['text-sm text-slate-500 dark:text-neutral-400'])}>
                Tangerang Selatan, Indonesia · GMT+7
              </p>
            </div>
          </div>
        </div>

        <div className={clsx(['mt-8'])} data-reveal="up">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
