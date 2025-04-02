function TailwindcssStack({
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
        viewBox="0 0 100 60"
      >
        <path
          fill="currentColor"
          d="M50 0Q30 0 25 19.994q7.5-9.996 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.732 22.969 10.732q20 0 24.999-19.995-7.5 9.997-17.5 7.499c-3.803-.95-6.521-3.71-9.531-6.764C68.067 5.758 62.392 0 50 0M25 29.992q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.762C31.933 54.226 37.608 59.984 50 59.984q20 0 25-19.995-7.5 9.998-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 35.75 37.393 29.992 25 29.992"
        ></path>
      </svg>
    </>
  );
}

export default TailwindcssStack;
