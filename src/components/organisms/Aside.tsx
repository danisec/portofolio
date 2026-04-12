import clsx from 'clsx';
import LinkAside from '@/components/molecules/LinkAside';

function Aside() {
  return (
    <aside className={clsx(['flex h-full flex-col justify-center px-4 py-10'])}>
      <p className={clsx(['mb-4 text-xs font-semibold tracking-wider text-slate-500 uppercase'])}>
        Connect
      </p>
      <ul>
        <li className={clsx(['flex flex-col gap-2'])}>
          <LinkAside />
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
