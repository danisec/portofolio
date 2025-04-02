import clsx from 'clsx';
import LinkAside from '@/components/molecules/LinkAside';

function Aside() {
  return (
    <>
      <aside className={clsx(['flex flex-col'], ['items-center justify-center'], ['h-screen'])}>
        <ul>
          <li className={clsx(['flex flex-col'], ['items-center justify-center'], ['gap-6'])}>
            <LinkAside />
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Aside;
