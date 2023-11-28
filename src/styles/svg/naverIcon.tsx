import { SvgAttribute } from "@/types/ui/SvgAttribute.type";
import React from "react";

const NaverIcon = ({ width = 4, height = 4 }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#03C75A" />
      <path
        d="M22.638 20.521L17.1452 12.5926H12.5925V27.4074H17.3619V19.4778L22.8547 27.4074H27.4073V12.5926H22.638V20.521Z"
        fill="white"
      />
    </svg>
  );
};

export default NaverIcon;
