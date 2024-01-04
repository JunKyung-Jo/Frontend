import { SvgAttribute } from "@/types/ui/SvgAttribute.type";
import React from "react";

const LikeIcon = ({ width = 2, height = 1.2, deg }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="512" height="512" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_769_65" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_769_65"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LikeIcon;
