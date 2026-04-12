'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import RocketIcon from '@/components/atoms/svg/Rocket';
import CloseIcon from '@/components/atoms/svg/Close';
import GithubIcon from '@/components/atoms/svg/Github';
import BrowserIcon from '@/components/atoms/svg/Browser';
import showcases from '@/data/showcases';

function Showcase() {
  const [activeShowcaseId, setActiveShowcaseId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const activeShowcase = useMemo(
    () => showcases.find((showcase) => showcase.id === activeShowcaseId) ?? null,
    [activeShowcaseId],
  );

  useEffect(() => {
    if (!activeShowcase) return;

    document.body.style.overflow = 'hidden';

    const dialog = dialogRef.current;
    const getFocusable = () =>
      dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

    const focusableElements = getFocusable();
    focusableElements?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveShowcaseId(null);
        return;
      }

      if (event.key !== 'Tab') return;
      const elements = getFocusable();
      if (!elements || elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];
      const isShiftTab = event.shiftKey;

      if (isShiftTab && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!isShiftTab && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeShowcase]);

  return (
    <section id="showcase" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Case studies</p>
          <div className={clsx(['flex flex-row items-center gap-3'])}>
            <RocketIcon $className="h-9 w-9 dark:text-white stroke-current" />
            <h2 className={clsx(['section-title'])}>Selected Projects</h2>
          </div>
          <p className={clsx(['section-description max-w-3xl'])}>
            Projects that demonstrate how I approach product problems, ship features, and measure
            outcomes.
          </p>
        </div>

        <div className={clsx(['grid gap-6 lg:grid-cols-2'])}>
          {showcases.map((showcase, index) => (
            <button
              key={showcase.id}
              type="button"
              className={clsx(
                ['card-surface group text-left'],
                ['overflow-hidden'],
                ['transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800'],
              )}
              onClick={() => setActiveShowcaseId(showcase.id)}
              aria-haspopup="dialog"
              aria-label={`Open case study ${showcase.title}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className={clsx(
                  ['relative aspect-[4/3] w-full overflow-hidden'],
                  ['bg-slate-100 dark:bg-neutral-950'],
                )}
              >
                <Image
                  className={clsx(['object-cover object-top'])}
                  src={showcase.image}
                  alt={showcase.alt}
                  fill={true}
                  priority={index < 2}
                />
              </div>

              <div className={clsx(['space-y-3 p-5'])}>
                <div className={clsx(['flex flex-wrap items-center justify-between gap-2'])}>
                  <h3 className={clsx(['text-lg font-semibold'])}>{showcase.title}</h3>
                  <span
                    className={clsx(
                      ['rounded-full border border-slate-300 px-2.5 py-1 text-xs font-semibold'],
                      ['text-slate-700 dark:border-neutral-700 dark:text-neutral-300'],
                    )}
                  >
                    {showcase.role}
                  </span>
                </div>

                <p className={clsx(['text-sm leading-relaxed text-slate-700 dark:text-neutral-300'])}>
                  {showcase.summary}
                </p>

                <p
                  className={clsx(
                    ['rounded-lg bg-slate-100 px-3 py-2 text-sm'],
                    ['text-slate-700 dark:bg-neutral-800 dark:text-neutral-200'],
                  )}
                >
                  Outcome: {showcase.outcome}
                </p>

                <div className={clsx(['flex flex-wrap gap-2'])}>
                  {showcase.stack.map((item) => (
                    <span
                      key={`${showcase.id}-${item}`}
                      className={clsx(
                        ['rounded-full border border-slate-300 px-2.5 py-1 text-xs font-semibold'],
                        ['text-slate-700 dark:border-neutral-700 dark:text-neutral-300'],
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeShowcase && (
        <div
          className={clsx(['fixed inset-0 z-50 bg-black/70 px-4 py-6 backdrop-blur-sm'])}
          onClick={() => setActiveShowcaseId(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="showcase-modal-title"
            className={clsx(
              ['mx-auto max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-2xl p-5 lg:p-8'],
              ['bg-white dark:bg-neutral-900'],
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={clsx(['flex items-start justify-between gap-4'])}>
              <div className={clsx(['space-y-1'])}>
                <p className={clsx(['section-eyebrow'])}>Case study detail</p>
                <h3 id="showcase-modal-title" className={clsx(['text-2xl font-semibold'])}>
                  {activeShowcase.title}
                </h3>
              </div>

              <button
                type="button"
                className={clsx(
                  ['rounded-lg border border-slate-300 bg-slate-100 p-2'],
                  ['hover:bg-slate-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700'],
                )}
                onClick={() => setActiveShowcaseId(null)}
                aria-label="Close case study modal"
              >
                <CloseIcon $className="h-5 w-5" />
              </button>
            </div>

            <div
              className={clsx(
                ['relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl'],
                ['bg-slate-100 dark:bg-neutral-800'],
                ['lg:aspect-[16/9]'],
              )}
            >
              <Image
                className={clsx(['object-contain'])}
                src={activeShowcase.image}
                alt={activeShowcase.alt}
                fill={true}
                priority={true}
              />
            </div>

            <div className={clsx(['mt-6 grid gap-4 lg:grid-cols-3'])}>
              <div
                className={clsx(
                  ['rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-700 dark:bg-neutral-800'],
                )}
              >
                <p className={clsx(['text-xs font-semibold tracking-wide uppercase'])}>Problem</p>
                <p className={clsx(['mt-2 text-sm leading-relaxed'])}>{activeShowcase.problem}</p>
              </div>
              <div
                className={clsx(
                  ['rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-700 dark:bg-neutral-800'],
                )}
              >
                <p className={clsx(['text-xs font-semibold tracking-wide uppercase'])}>Contribution</p>
                <p className={clsx(['mt-2 text-sm leading-relaxed'])}>{activeShowcase.contribution}</p>
              </div>
              <div
                className={clsx(
                  ['rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-700 dark:bg-neutral-800'],
                )}
              >
                <p className={clsx(['text-xs font-semibold tracking-wide uppercase'])}>Result</p>
                <p className={clsx(['mt-2 text-sm leading-relaxed'])}>{activeShowcase.result}</p>
              </div>
            </div>

            <div className={clsx(['mt-6 flex flex-wrap gap-2'])}>
              {activeShowcase.stack.map((item) => (
                <span
                  key={`${activeShowcase.id}-stack-${item}`}
                  className={clsx(
                    ['rounded-full border border-slate-300 px-2.5 py-1 text-xs font-semibold'],
                    ['text-slate-700 dark:border-neutral-700 dark:text-neutral-300'],
                  )}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className={clsx(['mt-6 flex flex-wrap gap-3'])}>
              {activeShowcase.liveDemo ? (
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={activeShowcase.liveDemo}
                  className={clsx(
                    ['inline-flex items-center gap-2 rounded-xl border border-blue-700 bg-blue-600 px-4 py-2.5'],
                    ['text-sm font-semibold text-white hover:bg-blue-700'],
                  )}
                >
                  <BrowserIcon $className="h-4 w-4 dark:text-white" />
                  Live demo
                </Link>
              ) : (
                <span
                  className={clsx(
                    ['inline-flex items-center rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5'],
                    ['text-sm font-semibold text-amber-800 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-300'],
                  )}
                >
                  Live demo is not publicly available.
                </span>
              )}

              <Link
                target="_blank"
                rel="noreferrer"
                href={activeShowcase.github}
                className={clsx(
                  ['inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2.5'],
                  ['text-sm font-semibold text-slate-900 hover:bg-slate-200'],
                  ['dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'],
                )}
              >
                <GithubIcon $className="h-4 w-4 dark:text-white" />
                GitHub repository
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Showcase;
