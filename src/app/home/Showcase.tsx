'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastTriggerId = useRef<string | null>(null);

  const activeShowcase = useMemo(
    () => showcases.find((showcase) => showcase.id === activeShowcaseId) ?? null,
    [activeShowcaseId],
  );

  const returnFocusToTrigger = useCallback(() => {
    const triggerId = lastTriggerId.current;
    if (triggerId) {
      triggerRefs.current[triggerId]?.focus();
      lastTriggerId.current = null;
    }
  }, []);

  const closeShowcase = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeShowcase) {
      lastTriggerId.current = activeShowcaseId;
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeShowcase, activeShowcaseId]);

  useEffect(() => {
    if (!activeShowcase) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeShowcase]);

  const handleDialogClose = useCallback(() => {
    setActiveShowcaseId(null);
    returnFocusToTrigger();
  }, [returnFocusToTrigger]);

  return (
    <section id="showcase" className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell py-10 lg:py-12'])}>
        <div className={clsx(['mb-8 flex flex-col gap-3'])}>
          <p className={clsx(['section-eyebrow'])}>Featured work</p>
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
              ref={(node) => {
                triggerRefs.current[showcase.id] = node;
              }}
              type="button"
              className={clsx(
                ['card-surface group flex flex-col text-left'],
                ['overflow-hidden'],
                ['transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800'],
              )}
              onClick={() => setActiveShowcaseId(showcase.id)}
              aria-haspopup="dialog"
              aria-label={`Open project ${showcase.title}`}
              data-reveal="up"
            >
              <div
                className={clsx(
                  ['relative aspect-video w-full overflow-hidden'],
                  ['bg-slate-100 dark:bg-neutral-950'],
                )}
              >
                <Image
                  className={clsx(
                    ['object-cover'],
                    ['transition-transform duration-500 ease-out group-hover:scale-[1.03]'],
                    ['motion-reduce:transition-none motion-reduce:group-hover:scale-100'],
                  )}
                  src={showcase.image}
                  alt={showcase.alt}
                  fill={true}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index < 2}
                />

                <div
                  aria-hidden="true"
                  className={clsx(
                    ['pointer-events-none absolute inset-0'],
                    ['bg-gradient-to-t from-black/70 via-black/10 to-transparent'],
                    ['opacity-0 transition-opacity duration-300 group-hover:opacity-100'],
                    ['group-focus-visible:opacity-100'],
                  )}
                />

                <span
                  aria-hidden="true"
                  className={clsx(
                    ['pointer-events-none absolute bottom-3 left-3'],
                    ['inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5'],
                    ['text-xs font-semibold text-slate-900 shadow-sm'],
                    ['translate-y-1 opacity-0 transition duration-300'],
                    ['group-hover:translate-y-0 group-hover:opacity-100'],
                    ['group-focus-visible:translate-y-0 group-focus-visible:opacity-100'],
                  )}
                >
                  View project
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>

              <div className={clsx(['flex flex-1 flex-col space-y-3 p-5'])}>
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

                <p
                  className={clsx(['text-sm leading-relaxed text-slate-700 dark:text-neutral-300'])}
                >
                  {showcase.summary}
                </p>

                <p
                  className={clsx(
                    ['border-l-2 border-emerald-500 pl-3 text-sm leading-relaxed font-medium'],
                    ['text-slate-900 dark:border-emerald-400 dark:text-neutral-100'],
                  )}
                >
                  {showcase.outcome}
                </p>

                <div className={clsx(['mt-auto flex flex-wrap gap-2 pt-1'])}>
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

      <dialog
        ref={dialogRef}
        onClose={handleDialogClose}
        aria-labelledby="showcase-modal-title"
        className={clsx(
          ['showcase-dialog'],
          ['m-auto max-h-[calc(100dvh-3rem)] w-[calc(100vw-2rem)] max-w-5xl'],
          ['overflow-y-auto rounded-2xl p-5 lg:p-8'],
          ['bg-white text-slate-900 dark:bg-neutral-900 dark:text-neutral-100'],
        )}
      >
        {activeShowcase && (
          <>
            <div className={clsx(['flex items-start justify-between gap-4'])}>
              <div className={clsx(['space-y-1'])}>
                <p className={clsx(['section-eyebrow'])}>Project detail</p>
                <h3 id="showcase-modal-title" className={clsx(['text-2xl font-semibold'])}>
                  {activeShowcase.title}
                </h3>
              </div>

              <button
                type="button"
                className={clsx(
                  ['rounded-lg border border-slate-300 bg-slate-100 p-2'],
                  [
                    'hover:bg-slate-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700',
                  ],
                )}
                onClick={closeShowcase}
                aria-label="Close project modal"
              >
                <CloseIcon $className="h-5 w-5" />
              </button>
            </div>

            <div
              className={clsx(
                ['relative mt-6 aspect-video w-full overflow-hidden rounded-xl'],
                ['bg-slate-100 dark:bg-neutral-800'],
              )}
            >
              <Image
                className={clsx(['object-cover'])}
                src={activeShowcase.image}
                alt={activeShowcase.alt}
                fill={true}
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <div className={clsx(['mt-6 grid gap-4 lg:grid-cols-3'])}>
              <div
                className={clsx([
                  'rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-700 dark:bg-neutral-800',
                ])}
              >
                <p className={clsx(['text-xs font-semibold tracking-wide uppercase'])}>Problem</p>
                <p className={clsx(['mt-2 text-sm leading-relaxed'])}>{activeShowcase.problem}</p>
              </div>
              <div
                className={clsx([
                  'rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-700 dark:bg-neutral-800',
                ])}
              >
                <p className={clsx(['text-xs font-semibold tracking-wide uppercase'])}>
                  Contribution
                </p>
                <p className={clsx(['mt-2 text-sm leading-relaxed'])}>
                  {activeShowcase.contribution}
                </p>
              </div>
              <div
                className={clsx([
                  'rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-700 dark:bg-neutral-800',
                ])}
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
                    [
                      'inline-flex items-center gap-2 rounded-xl border border-blue-700 bg-blue-600 px-4 py-2.5',
                    ],
                    ['text-sm font-semibold text-white hover:bg-blue-700'],
                  )}
                >
                  <BrowserIcon $className="h-4 w-4 dark:text-white" />
                  Live demo
                </Link>
              ) : (
                <span
                  className={clsx(
                    [
                      'inline-flex items-center rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5',
                    ],
                    [
                      'text-sm font-semibold text-amber-800 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-300',
                    ],
                  )}
                >
                  Live demo is not publicly available.
                </span>
              )}

              {activeShowcase.github && (
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={activeShowcase.github}
                  className={clsx(
                    [
                      'inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2.5',
                    ],
                    ['text-sm font-semibold text-slate-900 hover:bg-slate-200'],
                    [
                      'dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700',
                    ],
                  )}
                >
                  <GithubIcon $className="h-4 w-4 dark:text-white" />
                  GitHub repository
                </Link>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}

export default Showcase;
