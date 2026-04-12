import Image from 'next/image';
import clsx from 'clsx';
import GraduationIcon from '@/components/atoms/svg/Graduation';
import educations from '@/data/educations';

function Education() {
  return (
    <section id="education" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Learning and growth</p>
          <div className={clsx(['flex items-center gap-3'])}>
            <GraduationIcon $className="h-9 w-9 dark:text-white fill-current" />
            <h2 className={clsx(['section-title'])}>Education</h2>
          </div>
          <p className={clsx(['section-description max-w-3xl'])}>
            Structured learning that strengthened my engineering fundamentals and frontend
            delivery capability.
          </p>
        </div>

        <div className={clsx(['grid gap-6 lg:grid-cols-2'])}>
          {educations.map((education, index) => (
            <article
              key={education.id}
              className={clsx(['card-surface flex h-full flex-col p-5 lg:p-6'])}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className={clsx(['flex flex-wrap items-start justify-between gap-4'])}>
                <div className={clsx(['flex items-start gap-3'])}>
                  <div
                    className={clsx(
                      ['flex h-14 w-14 shrink-0 items-center justify-center rounded-xl'],
                      ['border border-slate-200 bg-white p-2'],
                      ['dark:border-neutral-700 dark:bg-neutral-800'],
                    )}
                  >
                    <Image
                      src={education.logo}
                      alt={education.alt}
                      width={48}
                      height={48}
                      className={clsx(['h-full w-full object-contain'])}
                    />
                  </div>

                  <div className={clsx(['space-y-1'])}>
                    <h3 className={clsx(['text-lg font-semibold lg:text-xl'])}>{education.institution}</h3>
                    <p className={clsx(['text-sm text-slate-700 dark:text-neutral-300'])}>
                      {education.title} · {education.studyType}
                    </p>
                  </div>
                </div>

                <span
                  className={clsx(
                    ['rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold'],
                    ['text-slate-700 dark:border-neutral-700 dark:text-neutral-300'],
                  )}
                >
                  {education.period}
                </span>
              </div>

              <p className={clsx(['mt-4 text-sm leading-relaxed text-slate-700 dark:text-neutral-300'])}>
                {education.summary}
              </p>

              <ul className={clsx(['mt-4 space-y-2'])}>
                {education.focusAreas.map((focusArea) => (
                  <li key={focusArea} className={clsx(['flex items-start gap-2 text-sm'])}>
                    <span className={clsx(['mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500'])} />
                    <span>{focusArea}</span>
                  </li>
                ))}
              </ul>

              <div
                className={clsx(
                  ['mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium'],
                  ['text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'],
                )}
              >
                Outcome: {education.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
