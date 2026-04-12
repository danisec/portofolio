import clsx from 'clsx';
import LinkNavbar from '@/components/molecules/LinkNavbar';

function Navbar() {
  return (
    <nav
      className={clsx(['flex h-full flex-col justify-center px-4 py-10'])}
      aria-label="Primary section navigation"
    >
      <p className={clsx(['mb-4 text-xs font-semibold tracking-wider text-slate-500 uppercase'])}>
        Navigation
      </p>
      <ul className={clsx(['flex flex-col gap-2'])}>
        <li>
          <LinkNavbar variant="desktop" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
