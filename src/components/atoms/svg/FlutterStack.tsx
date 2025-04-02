function FlutterStack({
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
        viewBox="0 0 81 100"
      >
        <path
          fill="currentColor"
          fillOpacity="0.8"
          d="M15.399 65.395 0 49.996 50 0h30.794zm65.395-19.258H50L38.465 57.672 53.864 73.07"
        ></path>
        <path fill="currentColor" d="M38.465 88.465 50 100h30.794l-26.93-26.93"></path>
        <path
          fill="currentColor"
          d="M23.103 73.079 38.477 57.7l15.375 15.375-15.375 15.378z"
        ></path>
        <path
          fill="url(#paint0_linear_790_791)"
          d="M38.477 88.453 53.852 73.08l2.146 2.146-15.375 15.374z"
        ></path>
        <path fill="url(#paint1_linear_790_791)" d="m38.465 88.465 22.848-7.893-7.449-7.506"></path>
        <defs>
          <linearGradient
            id="paint0_linear_790_791"
            x1="46.167"
            x2="48.314"
            y1="80.763"
            y2="82.909"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopOpacity="0.15"></stop>
            <stop offset="0.85" stopColor="#616161" stopOpacity="0.01"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_790_791"
            x1="38.471"
            x2="61.318"
            y1="80.766"
            y2="80.766"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopOpacity="0.55"></stop>
            <stop offset="0.85" stopColor="#616161" stopOpacity="0.01"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default FlutterStack;
