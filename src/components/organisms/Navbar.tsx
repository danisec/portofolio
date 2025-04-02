import clsx from 'clsx';
import LinkNavbar from '@/components/molecules/LinkNavbar';

function Navbar() {
  return (
    <>
      <nav className={clsx(['flex flex-col'], ['items-center justify-center'], ['h-screen'])}>
        <ul>
          <li className={clsx(['flex flex-col'], ['items-center justify-center'], ['gap-6'])}>
            <LinkNavbar />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
