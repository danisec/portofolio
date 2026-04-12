import clsx from 'clsx';

function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <div id="footer" className={clsx(['border-t border-zinc-200 py-4 dark:border-zinc-800'])}>
      <div className={clsx(['section-shell'])}>
        <p className={clsx(['text-sm font-medium text-slate-600 dark:text-neutral-400'])}>
          Copyright &copy; {getYear} Dani Aprilyanto
        </p>
      </div>
    </div>
  );
}

export default Footer;
