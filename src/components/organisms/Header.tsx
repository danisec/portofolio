import clsx from 'clsx';
import ButtonTheme from '@/components/molecules/ButtonTheme';

function Header() {
  return (
    <header className={clsx(['sticky top-0 z-40'], ['bg-[color:var(--background)]/90 backdrop-blur'])}>
      <div className={clsx(['border-b border-zinc-200 dark:border-zinc-800'])}>
        <div
          className={clsx(
            ['section-shell'],
            ['flex flex-row items-center justify-between gap-4'],
            ['py-4'],
          )}
        >
            <span
              className={clsx(
                ['inline-flex items-center gap-2 rounded-full'],
                ['border border-emerald-200 bg-emerald-50'],
                ['px-3 py-1.5'],
                ['text-xs font-semibold text-emerald-700'],
                ['dark:border-emerald-900/70 dark:bg-emerald-950/60 dark:text-emerald-300'],
              )}
            >
              <span className={clsx(['relative flex size-2'])} aria-hidden="true">
                <span
                  className={clsx(
                    ['absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400'],
                  )}
                />
                <span className={clsx(['relative inline-flex size-2 rounded-full bg-emerald-500'])} />
              </span>
              Available for hire
            </span>
            <ButtonTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
