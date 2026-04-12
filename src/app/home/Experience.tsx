import Image from 'next/image';
import clsx from 'clsx';
import BriefcaseIcon from '@/components/atoms/svg/Briefcase';
import experiences from '@/data/experiences';

function Experience() {
  return (
    <section id="experience" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Proof of execution</p>
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
              ['absolute top-0 left-3 hidden h-full w-px lg:block'],
              ['bg-slate-300 dark:bg-neutral-700'],
            )}
            aria-hidden="true"
          />

          <div className={clsx(['space-y-6'])}>
            {experiences.map((experience, index) => (
              <article
                key={experience.id}
                className={clsx(
                  ['relative card-surface overflow-hidden p-5 lg:p-6'],
                  ['lg:before:absolute lg:before:top-7 lg:before:-left-[1.9rem] lg:before:h-3 lg:before:w-3'],
                  ['lg:before:rounded-full lg:before:bg-blue-600 dark:lg:before:bg-blue-400'],
                )}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
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

                <div
                  className={clsx(
                    ['mt-4 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2'],
                    ['text-sm font-medium text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200'],
                  )}
                >
                  Impact: {experience.impact}
                </div>

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
