import Image from 'next/image';
import clsx from 'clsx';
import GraduationIcon from '@/components/atoms/svg/Graduation';
import educations from '@/data/educations';

function Education() {
  return (
    <>
      <section
        id="education"
        className={clsx(
          ['py-4 sm:py-6'],
          ['border-b lg:border-x'],
          ['border-zinc-200 dark:border-zinc-700'],
        )}
      >
        <div className={clsx(['mt-6'], ['flex flex-col'], ['gap-4'], ['px-4 sm:px-8'])}>
          <div className={clsx(['flex flex-col'], ['gap-2'])}>
            <div className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}>
              <GraduationIcon $className="w-10 h-10 lg:w-12 lg:h-12 dark:text-white fill-current" />
              <h1 className={clsx(['text-xl lg:text-2xl'], ['font-semibold'])}>My Education</h1>
            </div>
            <p className={clsx(['ml-2'], ['text-base'], ['font-normal'])}>My learning journey.</p>
          </div>

          {educations.map((education) => (
            <div
              key={education.id}
              className={clsx(
                ['my-4'],
                ['px-4 pt-6 pb-0 sm:py-6'],
                ['rounded-xl'],
                ['bg-slate-200 dark:bg-neutral-900'],
              )}
              data-aos="fade-up"
            >
              <div className={clsx(['flex flex-row'], ['items-center justify-between'], ['gap-2'])}>
                <div className={clsx(['flex flex-row'], ['items-center'], ['gap-4'])}>
                  <div
                    className={clsx(
                      ['p-3'],
                      ['h-auto lg:h-16'],
                      ['w-20 lg:w-16'],
                      ['rounded-xl'],
                      ['bg-slate-100 dark:bg-neutral-800'],
                    )}
                  >
                    <Image
                      src={education.logo ?? 'Logo'}
                      alt={education.alt ?? 'Logo'}
                      width={500}
                      height={500}
                      className={clsx(['h-full'], ['w-full'], ['object-cover'])}
                    />
                  </div>

                  <div>
                    <p className={clsx(['text-base lg:text-lg'], ['font-semibold'])}>
                      {education.institution}
                    </p>
                    <span
                      className={clsx(
                        ['text-sm lg:text-base'],
                        ['text-gray-800 dark:text-gray-300'],
                        ['font-normal'],
                      )}
                    >
                      {education.title}
                    </span>
                  </div>
                </div>

                <div>
                  <p className={clsx(['text-base lg:text-base'], ['font-semibold'])}>
                    {education.period}
                  </p>
                  <span
                    className={clsx(
                      ['text-sm lg:text-base'],
                      ['text-gray-800 dark:text-gray-300'],
                      ['font-normal'],
                    )}
                  >
                    {education.study}
                  </span>
                </div>
              </div>

              <div
                className={clsx(
                  ['-mx-4 mt-8'],
                  ['px-4 py-6 sm:mx-0 sm:px-4'],
                  ['rounded-xl'],
                  ['border border-slate-300 dark:border-neutral-800'],
                  ['bg-slate-100 dark:bg-neutral-950'],
                )}
              >
                {education.descriptionType === 'paragraph' ? (
                  <p className={clsx(['text-base'], ['font-normal'], ['leading-relaxed'])}>
                    {education.description}
                  </p>
                ) : (
                  <>
                    <p className={clsx(['text-base'], ['font-normal'], ['leading-relaxed'])}>
                      {education.detail ?? ''}
                    </p>
                    <p
                      className={clsx(
                        ['mt-6'],
                        ['text-base'],
                        ['font-semibold'],
                        ['leading-relaxed'],
                      )}
                    >
                      Key Skills:
                    </p>
                    <ul className={clsx(['space-y-2'], ['pt-2'])}>
                      {Array.isArray(education.description) ? (
                        education.description.map((item, index) => (
                          <li
                            key={index}
                            className={clsx(
                              ['flex'],
                              ['items-start'],
                              ["before:mr-2 before:text-gray-500 before:content-['-']"],
                            )}
                          >
                            {item}
                          </li>
                        ))
                      ) : (
                        <p className={clsx(['text-base'], ['font-normal'], ['leading-relaxed'])}>
                          {education.description}
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

export default Education;
