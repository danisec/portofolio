import Image from 'next/image';
import clsx from 'clsx';
import BriefcaseIcon from '@/components/atoms/svg/Briefcase';
import experiences from '@/data/experiences';

function Experience() {
  return (
    <section id="experience" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Work experience</p>
          <div className={clsx(['flex flex-row items-center gap-3'])}>
            <BriefcaseIcon $className="h-9 w-9 dark:text-white stroke-current" />
            <h2 className={clsx(['section-title'])}>Professional Experience</h2>
          </div>
          <p className={clsx(['section-description max-w-3xl'])}>
            Roles where I shipped product features, improved engineering quality, and supported
            real-world users.
          </p>
        </div>

        <div className={clsx(['relative pl-0 lg:pl-8'])}>
          <div
            className={clsx(
              ['absolute top-8 bottom-8 left-3 hidden w-px lg:block'],
              ['bg-gradient-to-b from-transparent via-slate-300 to-transparent dark:via-neutral-700'],
            )}
            aria-hidden="true"
          />

          <div className={clsx(['space-y-6'])}>
            {experiences.map((experience, index) => (
              <article
                key={experience.id}
                className={clsx(['relative card-surface overflow-hidden p-5 lg:p-6'])}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <span
                  className={clsx(
                    ['absolute top-[52px] -left-[26px] hidden -translate-y-1/2 lg:block'],
                    ['h-3 w-3 rounded-full'],
                    index === 0
                      ? ['bg-blue-600 ring-4 ring-blue-100 dark:bg-blue-400 dark:ring-blue-950']
                      : ['bg-slate-400 ring-4 ring-white dark:bg-neutral-600 dark:ring-neutral-950'],
                  )}
                  aria-hidden="true"
                />
                <div className={clsx(['flex flex-wrap items-start justify-between gap-4'])}>
                  <div className={clsx(['flex min-w-0 items-start gap-3'])}>
                    <div
                      className={clsx(
                        ['flex h-14 w-14 shrink-0 items-center justify-center rounded-xl'],
                        ['border border-slate-200 bg-white p-2'],
                        ['dark:border-neutral-700 dark:bg-neutral-800'],
                      )}
                    >
                      <Image
                        src={experience.logo}
                        alt={experience.alt}
                        width={48}
                        height={48}
                        className={clsx(['h-full w-full object-contain'])}
                      />
                    </div>
                    <div className={clsx(['min-w-0 space-y-1'])}>
                      <h3 className={clsx(['text-lg font-semibold lg:text-xl'])}>
                        {experience.institution}
                      </h3>
                      <p className={clsx(['text-sm text-slate-700 dark:text-neutral-300'])}>
                        {experience.title} · {experience.workType}
                      </p>
                      <p className={clsx(['text-xs text-slate-500 dark:text-neutral-400'])}>
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <span
                    className={clsx(
                      ['rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold'],
                      ['text-slate-700 dark:border-neutral-700 dark:text-neutral-300'],
                    )}
                  >
                    {experience.period}
                  </span>
                </div>

                <p className={clsx(['mt-4 text-sm leading-relaxed text-slate-700 dark:text-neutral-300'])}>
                  {experience.summary}
                </p>

                <ul className={clsx(['mt-4 space-y-2'])}>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className={clsx(['flex items-start gap-2 text-sm'])}>
                      <span className={clsx(['mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500'])} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
