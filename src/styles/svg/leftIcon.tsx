import { SvgAttribute } from "@/types/ui/SvgAttribute.type";
import React from "react";

const LeftIcon = ({ width, height }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.98 3V2C13.98 1.44772 13.4517 1 12.8 1H2.18C1.5283 1 1 1.44772 1 2V18C1 18.5523 1.52831 19 2.18 19H12.8C13.4517 19 13.98 18.5523 13.98 18V17"
        stroke="#FF543A"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M6.90002 10H19.88"
        stroke="#FF543A"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M15.75 6.5L19.88 10L15.75 13.5"
        stroke="#FF543A"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default LeftIcon;
