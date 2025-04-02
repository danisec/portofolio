import clsx from 'clsx';
import ButtonTheme from '@/components/molecules/ButtonTheme';

function Header() {
  return (
    <>
      <header className={clsx(['dark:bg-neutral-950'])}>
        <div
          className={clsx(
            ['py-2 sm:py-6'],
            ['border-b lg:border-x'],
            ['border-zinc-200 dark:border-zinc-700'],
          )}
        >
          <div
            className={clsx(
              ['flex flex-row'],
              ['items-center justify-between'],
              ['px-4 py-4 sm:px-8'],
            )}
          >
            {/* Budge */}
            <div>
              <button
                className={clsx(
                  ['bg-slate-200 dark:bg-neutral-800'],
                  ['flex flex-row items-center gap-2'],
                  ['rounded-full px-4 py-2'],
                )}
              >
                <span className={clsx(['relative flex'], ['size-2 sm:size-3'])}>
                  <span
                    className={clsx(
                      ['absolute inline-flex'],
                      ['h-full w-full'],
                      ['animate-ping'],
                      ['rounded-full'],
                      ['bg-green-400'],
                      ['opacity-75'],
                    )}
                  ></span>
                  <span
                    className={clsx(
                      ['relative inline-flex'],
                      ['size-2 sm:size-3'],
                      ['rounded-full'],
                      ['bg-green-500'],
                    )}
                  ></span>
                </span>

                <p
                  className={clsx(
                    ['text-sm text-gray-900 sm:text-base dark:text-white'],
                    ['font-medium'],
                  )}
                >
                  Available for Hire
                </p>
              </button>
            </div>

            <div>
              <ul className={clsx(['flex flex-row'], ['items-center'], ['gap-8'])}>
                <li>
                  <ButtonTheme />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
