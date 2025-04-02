function NextjsStack({
  $className = '',
  $width = '32',
  $height = '32',
  $fillColor = '',
  $stopColor = '',
}: {
  $className?: string;
  $width?: string;
  $height?: string;
  $fillColor?: string;
  $stopColor?: string;
}) {
  return (
    <>
      <svg
        className={$className}
        width={$width}
        height={$height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 99.9996C77.6142 99.9996 100 77.6139 100 49.9996C100 22.3854 77.6142 -0.000366211 50 -0.000366211C22.3858 -0.000366211 0 22.3854 0 49.9996C0 77.6139 22.3858 99.9996 50 99.9996Z"
          fill={$fillColor}
        />
        <path
          d="M83.06 87.511L38.4122 29.9996H30V69.983H36.7298V38.546L77.7773 91.5803C79.6294 90.3405 81.394 88.9804 83.06 87.511Z"
          fill="url(#paint0_linear_790_2962)"
        />
        <path
          d="M70.5558 29.9996H63.8892V69.9996H70.5558V29.9996Z"
          fill="url(#paint1_linear_790_2962)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_790_2962"
            x1="60.5555"
            y1="64.7219"
            x2="80.2778"
            y2="89.1663"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={$stopColor} />
            <stop offset="1" stopColor={$stopColor} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_790_2962"
            x1="67.2225"
            y1="29.9996"
            x2="67.1109"
            y2="59.3748"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={$stopColor} />
            <stop offset="1" stopColor={$stopColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default NextjsStack;
