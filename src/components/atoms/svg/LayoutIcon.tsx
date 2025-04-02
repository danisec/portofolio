function LayoutIcon({
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 9v9a2 2 0 0 0 2 2h8M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 9h10m6 0v9a2 2 0 0 1-2 2h-4m6-11h-6m0 0v11"
        ></path>
      </svg>
    </>
  );
}

export default LayoutIcon;
