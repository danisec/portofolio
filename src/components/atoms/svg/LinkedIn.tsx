import React from 'react';

function LinkedIn({
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
        xmlSpace="preserve"
        id="Layer_1"
        className={$className}
        width={$width}
        height={$height}
        fill="#000"
        version="1.1"
        viewBox="0 0 310 310"
      >
        <g id="XMLID_801_">
          <path
            id="XMLID_802_"
            d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5"
          ></path>
          <path
            id="XMLID_803_"
            d="M41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341"
          ></path>
          <path
            id="XMLID_804_"
            d="M230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234"
          ></path>
        </g>
      </svg>
    </>
  );
}

export default LinkedIn;
