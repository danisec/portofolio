function Home({
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
          fill="currentColor"
          fillRule="evenodd"
          d="M12.45 4.903a.75.75 0 0 0-.9 0l-6.5 4.875a.75.75 0 0 0-.3.6V18.5c0 .414.336.75.75.75H9V17a3 3 0 0 1 6 0v2.25h3.5a.75.75 0 0 0 .75-.75v-8.122a.75.75 0 0 0-.3-.6zm-1.8-1.2c.8-.6 1.9-.6 2.7 0l6.5 4.875c.567.425.9 1.092.9 1.8V18.5a2.25 2.25 0 0 1-2.25 2.25h-4.25a.75.75 0 0 1-.75-.75v-3a1.5 1.5 0 0 0-3 0v3a.75.75 0 0 1-.75.75H5.5a2.25 2.25 0 0 1-2.25-2.25v-8.122c0-.708.333-1.375.9-1.8z"
          clipRule="evenodd"
        ></path>
      </svg>
    </>
  );
}

export default Home;
