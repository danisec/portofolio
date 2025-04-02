function ReactStack({
  $className = '',
  $width = '32',
  $height = '32',
  $fillColor = '',
  $strokeColor = '',
}: {
  $className?: string;
  $width?: string;
  $height?: string;
  $fillColor?: string;
  $strokeColor?: string;
}) {
  return (
    <>
      <svg
        className={$className}
        width={$width}
        height={$height}
        viewBox="0 0 101 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.3067 58.8168C55.1757 58.8168 59.1229 54.8697 59.1229 50.0006C59.1229 45.1315 55.1757 41.1844 50.3067 41.1844C45.4376 41.1844 41.4904 45.1315 41.4904 50.0006C41.4904 54.8697 45.4376 58.8168 50.3067 58.8168Z"
          fill={$fillColor}
        />
        <path
          d="M50.3066 68.0631C76.4333 68.0631 97.6132 59.9762 97.6132 50.0005C97.6132 40.0249 76.4333 31.938 50.3066 31.938C24.1799 31.938 3 40.0249 3 50.0005C3 59.9762 24.1799 68.0631 50.3066 68.0631Z"
          stroke={$strokeColor}
          strokeWidth="5"
        />
        <path
          d="M34.664 59.0318C47.7274 81.6582 65.3207 95.9571 73.9599 90.9692C82.5991 85.9814 79.0126 63.5957 65.9492 40.9693C52.8858 18.3428 35.2925 4.04395 26.6533 9.03178C18.0141 14.0196 21.6006 36.4054 34.664 59.0318Z"
          stroke={$strokeColor}
          strokeWidth="5"
        />
        <path
          d="M34.664 40.9692C21.6007 63.5956 18.0141 85.9814 26.6533 90.9692C35.2925 95.957 52.8859 81.6582 65.9492 59.0318C79.0126 36.4053 82.5991 14.0196 73.9599 9.03176C65.3208 4.04393 47.7274 18.3428 34.664 40.9692Z"
          stroke={$strokeColor}
          strokeWidth="5"
        />
      </svg>
    </>
  );
}

export default ReactStack;
