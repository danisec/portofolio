import clsx from 'clsx';

function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <>
      <div
        id="footer"
        className={clsx(
          ['py-2 sm:py-4'],
          ['border-t', 'lg:border-x', 'lg:border-t-0'],
          ['border-zinc-200 dark:border-zinc-700'],
        )}
      >
        <div className={clsx(['flex flex-col'], ['items-start'], ['gap-4'], ['px-4 sm:px-8'])}>
          <p className={clsx(['text-sm'], ['text-gray-600 dark:text-gray-400'], ['font-medium'])}>
            Copyright &copy; {getYear} Dani Aprilyanto
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
