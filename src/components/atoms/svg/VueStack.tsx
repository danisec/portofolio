function VueStack({
  $className = '',
  $width = '32',
  $height = '32',
  $fillColor = '#35495E',
}: {
  $className?: string;
  $width?: string;
  $height?: string;
  $fillColor?: string;
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={$className}
        width={$width}
        height={$height}
        fill="none"
        viewBox="0 0 100 87"
      >
        <path fill="currentColor" d="M80 0h20L50 86.25 0 0h38.25L50 20 61.5 0z"></path>
        <path fill="currentColor" d="m0 0 50 86.25L100 0H80L50 51.75 19.75 0z"></path>
        <path fill={$fillColor} d="M19.75 0 50 52 80 0H61.5L50 20 38.25 0z"></path>
      </svg>
    </>
  );
}

export default VueStack;
