function Server({
  $className = '',
  $width = '32',
  $height = '32',
}: {
  $className?: string;
  $width?: string;
  $height?: string;
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={$className}
        width={$width}
        height={$height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M13 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17s0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1M11 2h7c1.886 0 2.828 0 3.414.586S22 4.114 22 6s0 2.828-.586 3.414S19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6s0-2.828.586-3.414S4.114 2 6 2h1M13.5 6H18M6 7V5M9 7V5M13.5 17H18M6 18v-2M9 18v-2"
        ></path>
      </svg>
    </>
  );
}

export default Server;
