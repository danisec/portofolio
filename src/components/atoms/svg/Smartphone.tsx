function Smartphone({
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
          d="M11 18h2m-3.8 3h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 19.48 18 18.92 18 17.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 3 15.92 3 14.8 3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 4.52 6 5.08 6 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 21 8.08 21 9.2 21"
        ></path>
      </svg>
    </>
  );
}

export default Smartphone;
