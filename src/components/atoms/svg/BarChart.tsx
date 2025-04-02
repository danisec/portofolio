function BarChart({
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
          d="M10 4h4v16h-4zM14 9h4v11h-4zM6 13h4v7H6zM3 20h18"
        ></path>
      </svg>
    </>
  );
}

export default BarChart;
