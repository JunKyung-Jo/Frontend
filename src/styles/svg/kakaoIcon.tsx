import { SvgAttribute } from "@/types/ui/SvgAttribute.type";
import React from "react";

const KakaoIcon = ({ width = 4, height = 4 }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#FFE812" />
      <path
        d="M20.1201 8C12.875 8 7 12.661 7 18.413C7 22.1319 9.45447 25.3896 13.151 27.2392L11.8202 32.0242C11.8202 32.0242 11.7956 32.2473 11.9385 32.3316C12.0814 32.4159 12.2539 32.3514 12.2539 32.3514C12.6679 32.2919 17.0347 29.2028 17.7987 28.6672C18.5528 28.7763 19.3364 28.8309 20.1299 28.8309C27.375 28.8309 33.25 24.1698 33.25 18.4179C33.25 12.666 27.3652 8 20.1201 8Z"
        fill="black"
      />
    </svg>
  );
};

export default KakaoIcon;
