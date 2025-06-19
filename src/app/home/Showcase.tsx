'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import RocketIcon from '@/components/atoms/svg/Rocket';
import CloseIcon from '@/components/atoms/svg/Close';
import GithubIcon from '@/components/atoms/svg/Github';
import getShowcases from '@/data/showcases';
import Browser from '@/components/atoms/svg/Browser';

function Showcase() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid theme flicker
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null
  if (!mounted) return null;

  const showcases = getShowcases(theme as 'light' | 'dark');

  return (
    <>
      <section
        id="showcase"
        className={clsx(
          ['py-4 sm:py-6'],
          ['border-b lg:border-x'],
          ['border-zinc-200 dark:border-zinc-700'],
        )}
      >
        <div className={clsx(['mt-6'], ['flex flex-col'], ['gap-4'], ['px-4 sm:px-8'])}>
          <div className={clsx(['flex flex-col'], ['gap-2'])}>
            <div className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}>
              <RocketIcon $className="w-10 h-10 lg:w-12 lg:h-12 dark:text-white stroke-current" />
              <h1 className={clsx(['text-xl lg:text-2xl'], ['font-semibold'], [''], [''])}>
                Showcase
              </h1>
            </div>
            <p className={clsx(['ml-2'], ['text-base'], ['font-normal'])}>
              My project that i have made.
            </p>
          </div>

          <div className={clsx(['my-4'], ['py-6'])}>
            <div
              className={clsx(['flex flex-col'], ['lg:grid lg:grid-cols-2'], ['gap-6 lg:gap-6'])}
            >
              {showcases.map((showcase, index) => (
                <button
                  key={index}
                  type="button"
                  className={clsx(
                    ['cursor-pointer'],
                    ['flex flex-col'],
                    ['h-auto'],
                    ['w-auto'],
                    ['rounded-xl'],
                    ['bg-slate-200 dark:bg-neutral-800'],
                    ['hover:bg-slate-100 dark:hover:bg-neutral-800/50'],
                  )}
                  onClick={() => setIsOpen(index)}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Image
                    className={clsx(['h-auto'], ['w-full'], ['rounded-tl-xl rounded-tr-xl'])}
                    src={showcase.image as string}
                    alt={showcase.alt as string}
                    width={500}
                    height={500}
                    priority
                  />

                  <div className={clsx(['p-4'])}>
                    <h1 className={clsx(['text-base'], ['text-center'], ['font-medium'])}>
                      {showcase.title as string}
                    </h1>
                  </div>
                </button>
              ))}

              {/* Modal */}
              {isOpen !== null && (
                <div
                  className={clsx(
                    ['fixed inset-0 z-50'],
                    ['flex flex-col'],
                    ['items-center justify-center'],
                    ['bg-opacity-50 bg-black/70'],
                  )}
                  onClick={() => setIsOpen(null)}
                >
                  <div
                    className={clsx(
                      ['relative'],
                      ['max-7xl:max-w-5xl max-w-ms w-full'],
                      ['px-4 py-6'],
                      ['rounded-xl'],
                      ['shadow-lg'],
                      ['bg-white dark:bg-neutral-900'],
                    )}
                    data-aos="zoom-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      className={clsx(
                        ['cursor-pointer'],
                        ['absolute'],
                        ['top-4 right-4'],
                        ['px-1 py-0.5'],
                        ['rounded-sm'],
                        ['text-gray-800 dark:text-white dark:hover:text-white'],
                        ['bg-slate-200 dark:bg-neutral-800'],
                        ['hover:bg-slate-300 hover:dark:bg-neutral-800/70'],
                      )}
                      onClick={() => setIsOpen(null)}
                    >
                      <CloseIcon $className="w-5 h-5 size-5" />
                    </button>

                    {/* Modal Image */}
                    <div
                      className={clsx(
                        ['mt-14'],
                        ['pb-8'],
                        ['flex flex-col lg:flex-row'],
                        ['items-center'],
                        ['gap-6'],
                        ['border-b border-zinc-200 dark:border-zinc-700'],
                      )}
                    >
                      <div className={clsx(['flex-flex-col'], ['w-full'])}>
                        <Image
                          className={clsx(['h-auto w-auto'], ['rounded-lg'])}
                          src={showcases[isOpen].image as string}
                          alt={showcases[isOpen].alt as string}
                          width={600}
                          height={500}
                          priority
                        />

                        <div
                          className={clsx(
                            ['mt-6'],
                            ['flex'],
                            ['items-center'],
                            ['gap-2'],
                            ['whitespace-nowrap'],
                            ['overflow-x-scroll sm:overflow-x-hidden'],
                          )}
                        >
                          <p className={clsx(['text-base'], ['font-semibold'])}>Built With:</p>
                          {showcases[isOpen].icons?.map((icon, index) => (
                            <div
                              key={index}
                              className={clsx(['flex flex-row'], ['items-center'], ['gap-2'])}
                            >
                              {icon.icon}
                              <span className={clsx(['text-sm'], ['font-semibold'])}>
                                {icon.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={clsx(['flex flex-col'], ['gap-6'], ['w-full'], ['lg:w-7/12'])}
                      >
                        <Link
                          target="_blank"
                          className={clsx(
                            ['w-full'],
                            ['flex flex-row'],
                            ['items-center justify-center'],
                            ['gap-2'],
                            ['text-base font-medium lg:text-lg'],
                            ['rounded-lg'],
                            ['bg-slate-200 py-3 dark:bg-neutral-800'],
                            ['hover:bg-slate-300 dark:hover:bg-neutral-800/80'],
                          )}
                          href={showcases[isOpen].github as string}
                        >
                          <GithubIcon $className="w-5 h-5 size-5 dark:text-white" />
                          Github
                        </Link>

                        {showcases[isOpen].liveDemo && (
                          <Link
                            target="_blank"
                            className={clsx(
                              ['w-full'],
                              ['flex flex-row'],
                              ['items-center justify-center'],
                              ['gap-2'],
                              ['text-base font-medium lg:text-lg'],
                              ['rounded-lg'],
                              ['bg-slate-200 py-3 dark:bg-neutral-800'],
                              ['hover:bg-slate-300 dark:hover:bg-neutral-800/80'],
                            )}
                            href={showcases[isOpen].liveDemo as string}
                          >
                            <Browser $className="w-5 h-5 size-5 dark:text-white" />
                            Live Demo
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className={clsx(['mt-6'])}>
                      <h2 className={clsx(['text-lg'], ['font-semibold'])}>
                        {showcases[isOpen].title as string}
                      </h2>
                      <p className={clsx(['mt-2'], ['text-base'], ['font-normal'])}>
                        {showcases[isOpen].description as string}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
