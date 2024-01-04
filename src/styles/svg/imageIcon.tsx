import { SvgAttribute } from "@/types/ui/SvgAttribute.type";
import React from "react";

const ImageIcon = ({ width = 64, height = 64 }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.6667 0H8.33333C6.1232 0 4.00358 0.877973 2.44078 2.44078C0.877973 4.00358 0 6.1232 0 8.33333V91.6667C0 93.8768 0.877973 95.9964 2.44078 97.5592C4.00358 99.122 6.1232 100 8.33333 100H91.6667C93.8768 100 95.9964 99.122 97.5592 97.5592C99.122 95.9964 100 93.8768 100 91.6667V8.33333C100 6.1232 99.122 4.00358 97.5592 2.44078C95.9964 0.877973 93.8768 0 91.6667 0ZM91.6667 91.6667H8.33333V66.6667L29.1667 45.8333L52.4583 69.125C54.0197 70.6771 56.1318 71.5483 58.3333 71.5483C60.5349 71.5483 62.647 70.6771 64.2083 69.125L70.8333 62.5L91.6667 83.3333V91.6667ZM91.6667 71.5417L76.7083 56.5833C75.147 55.0312 73.0349 54.1601 70.8333 54.1601C68.6318 54.1601 66.5197 55.0312 64.9583 56.5833L58.3333 63.2083L35.0417 39.9167C33.4803 38.3646 31.3682 37.4934 29.1667 37.4934C26.9651 37.4934 24.853 38.3646 23.2917 39.9167L8.33333 54.875V8.33333H91.6667V71.5417Z"
        fill="black"
      />
    </svg>
  );
};

export default ImageIcon;
