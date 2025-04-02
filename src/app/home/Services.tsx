import clsx from 'clsx';
import CpuIcon from '@/components/atoms/svg/Cpu';
import services from '@/data/services';

function Services() {
  return (
    <>
      <div
        id="my-services"
        className={clsx(
          ['py-4 sm:py-6'],
          ['lg:border-x lg:border-b'],
          ['lg:border-zinc-200 lg:dark:border-zinc-700'],
        )}
      >
        <div className={clsx(['mt-6'], ['flex flex-col'], ['gap-4'], ['px-4 sm:px-8'])}>
          <div className={clsx(['flex flex-col'], ['gap-2'])}>
            <div className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}>
              <CpuIcon $className="w-10 h-10 lg:w-12 lg:h-12 dark:text-white stroke-current" />
              <h1 className={clsx(['text-2xl'], ['font-semibold'])}>My Services</h1>
            </div>
            <p className={clsx(['ml-2'], ['text-base'], ['font-normal'])}>
              Commited and adaptable to new technologies with expertise in them.
            </p>
          </div>

          <div
            className={clsx(['my-4'], ['py-6'], ['flex flex-wrap'], ['gap-4 sm:gap-8'], ['w-full'])}
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-offset="0"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={clsx(
                  ['flex flex-col'],
                  ['gap-4'],
                  ['p-4'],
                  ['w-full md:w-80 lg:w-5/11'],
                  ['rounded-xl'],
                  ['border border-slate-300'],
                  ['bg-slate-200 dark:border-neutral-800 dark:bg-neutral-900'],
                )}
              >
                <div className={clsx(['flex flex-row'], ['items-center'], ['gap-4'])}>
                  <div
                    className={clsx(
                      ['flex'],
                      ['items-center justify-center'],
                      ['rounded-lg'],
                      ['bg-slate-100 p-2 dark:bg-neutral-800'],
                    )}
                  >
                    {service.icon}
                  </div>

                  <div>
                    <h1 className={clsx(['text-lg'], ['font-semibold'])}>{service.name}</h1>
                  </div>
                </div>

                <p className={clsx(['text-sm sm:text-sm'], ['font-normal'])}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
