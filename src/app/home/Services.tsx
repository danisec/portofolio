import clsx from 'clsx';
import CpuIcon from '@/components/atoms/svg/Cpu';
import services from '@/data/services';

function Services() {
  return (
    <section id="my-services" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Services I provide</p>
          <div className={clsx(['flex items-center gap-3'])}>
            <CpuIcon $className="h-9 w-9 dark:text-white stroke-current" />
            <h2 className={clsx(['section-title'])}>How I Can Help</h2>
          </div>
          <p className={clsx(['section-description max-w-3xl'])}>
            I focus on building digital products that are clear for users, maintainable for teams,
            and reliable in production.
          </p>
        </div>

        <div className={clsx(['grid gap-5 md:grid-cols-2 xl:grid-cols-3'])}>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={clsx(['card-surface flex h-full flex-col gap-4 p-5'])}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className={clsx(['flex items-center gap-3'])}>
                <div
                  className={clsx(
                    ['flex items-center justify-center rounded-lg bg-white p-2 dark:bg-neutral-800'],
                  )}
                >
                  {service.icon}
                </div>
                <h3 className={clsx(['text-lg font-semibold'])}>{service.name}</h3>
              </div>

              <p className={clsx(['text-sm leading-relaxed text-slate-700 dark:text-neutral-300'])}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
