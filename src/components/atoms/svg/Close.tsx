function Close({
  $className = 'size-6',
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
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={$className}
        width={$width}
        height={$height}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </>
  );
}

export default Close;
