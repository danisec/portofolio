import Image from 'next/image';
import clsx from 'clsx';
import BriefcaseIcon from '@/components/atoms/svg/Briefcase';
import experiences from '@/data/experiences';

function Experience() {
  return (
    <>
      <section
        id="experience"
        className={clsx(
          ['py-4 sm:py-6'],
          ['border-b lg:border-x'],
          ['border-zinc-200 dark:border-zinc-700'],
          ['overflow-x-hidden'],
        )}
      >
        <div className={clsx(['mt-6'], ['flex flex-col'], ['gap-4'], ['px-4 sm:px-8'])}>
          <div className={clsx(['flex flex-col'], ['gap-2'])}>
            <div className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}>
              <BriefcaseIcon $className="w-10 h-10 lg:w-12 lg:h-12 dark:text-white stroke-current" />
              <h1 className={clsx(['text-xl lg:text-2xl'], ['font-semibold'])}>My Experience</h1>
            </div>
            <p className={clsx(['ml-2'], ['text-base'], ['font-normal'])}>
              A journey through my professional growth and achievements.
            </p>
          </div>

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={clsx(
                ['my-4'],
                ['rounded-xl'],
                ['px-4 pt-6 pb-0 sm:py-6'],
                ['bg-slate-200 dark:bg-neutral-900'],
              )}
              data-aos="fade-left"
            >
              <div className={clsx(['flex flex-row'], ['items-center justify-between'], ['gap-2'])}>
                <div className={clsx(['flex flex-row'], ['items-center'], ['gap-4'])}>
                  <div
                    className={clsx(
                      ['h-auto w-20 lg:h-16 lg:w-16'],
                      ['p-3'],
                      ['rounded-xl'],
                      ['bg-slate-100 dark:bg-neutral-800'],
                    )}
                  >
                    <Image
                      src={experience.logo ?? 'Logo'}
                      alt={experience.alt ?? 'Logo'}
                      width={500}
                      height={500}
                      className={clsx(['h-full w-full'], ['object-contain'])}
                    />
                  </div>

                  <div>
                    <p className={clsx(['text-base lg:text-lg'], ['font-semibold'])}>
                      {experience.institution}
                    </p>
                    <span
                      className={clsx(
                        ['text-sm lg:text-base'],
                        ['text-gray-800 dark:text-gray-300'],
                        ['font-normal'],
                      )}
                    >
                      {experience.title}
                    </span>
                  </div>
                </div>

                <div>
                  <p className={clsx(['text-base lg:text-base'], ['font-semibold'])}>
                    {experience.period}
                  </p>
                  <span
                    className={clsx(
                      ['text-sm lg:text-base'],
                      ['text-gray-800 dark:text-gray-300'],
                      ['font-normal'],
                    )}
                  >
                    {experience.work}
                  </span>
                </div>
              </div>

              <div
                className={clsx(
                  ['-mx-4 mt-8'],
                  ['px-4 py-6 sm:mx-0 sm:px-4'],
                  ['rounded-xl'],
                  ['border border-slate-300'],
                  ['bg-slate-100 dark:border-neutral-800 dark:bg-neutral-950'],
                )}
              >
                {experience.descriptionType === 'paragraph' ? (
                  <p className={clsx(['text-base'], ['font-normal'], ['leading-relaxed'])}>
                    {experience.description}
                  </p>
                ) : (
                  <>
                    <p className={clsx(['text-base'], ['font-normal'], ['leading-relaxed'])}>
                      {experience.detail ?? ''}
                    </p>

                    <ul className={clsx(['space-y-2'], ['pt-2'])}>
                      {Array.isArray(experience.description) ? (
                        experience.description.map((item, index) => (
                          <li
                            key={index}
                            className={clsx(
                              ['flex items-start'],
                              ["before:mr-2 before:text-gray-500 before:content-['-']"],
                            )}
                          >
                            {item}
                          </li>
                        ))
                      ) : (
                        <p className={clsx(['text-base'], ['font-normal'], ['leading-relaxed'])}>
                          {experience.description}
                        </p>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
