function Figma({
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
        viewBox="0 0 100 100"
      >
        <path
          fill="currentColor"
          d="M33.333 100.001c9.2 0 16.667-7.467 16.667-16.667V66.667H33.333c-9.2 0-16.666 7.467-16.666 16.667S24.133 100 33.333 100"
        ></path>
        <path
          fill="currentColor"
          d="M16.667 50c0-9.2 7.466-16.666 16.666-16.666H50v33.333H33.333c-9.2 0-16.666-7.467-16.666-16.667"
        ></path>
        <path
          fill="currentColor"
          d="M16.667 16.667C16.667 7.467 24.133 0 33.333 0H50v33.334H33.333c-9.2 0-16.666-7.467-16.666-16.667"
        ></path>
        <path
          fill="currentColor"
          d="M50 0h16.667c9.2 0 16.666 7.467 16.666 16.667s-7.466 16.667-16.666 16.667H50z"
        ></path>
        <path
          fill="currentColor"
          d="M83.333 50c0 9.2-7.466 16.667-16.666 16.667S50 59.2 50 50s7.467-16.666 16.667-16.666S83.333 40.8 83.333 50"
        ></path>
      </svg>
    </>
  );
}

export default Figma;
