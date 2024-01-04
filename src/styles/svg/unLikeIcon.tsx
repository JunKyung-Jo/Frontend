import { SvgAttribute } from "@/types/ui/SvgAttribute.type";
import React from "react";

const UnLikeIcon = ({ width = 1, height = 1, deg }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6964 0C18.9308 0 16.5094 1.18929 15 3.19955C13.4906 1.18929 11.0692 0 8.30357 0C6.10209 0.00248134 3.99148 0.878116 2.4348 2.4348C0.878116 3.99148 0.00248134 6.10209 0 8.30357C0 17.6786 13.9004 25.267 14.4924 25.5804C14.6484 25.6643 14.8228 25.7082 15 25.7082C15.1772 25.7082 15.3516 25.6643 15.5076 25.5804C16.0996 25.267 30 17.6786 30 8.30357C29.9975 6.10209 29.1219 3.99148 27.5652 2.4348C26.0085 0.878116 23.8979 0.00248134 21.6964 0ZM15 23.4107C12.5545 21.9857 2.14286 15.4942 2.14286 8.30357C2.14498 6.6703 2.79474 5.10454 3.94964 3.94964C5.10453 2.79474 6.6703 2.14498 8.30357 2.14286C10.9085 2.14286 13.0955 3.53036 14.0089 5.75893C14.0897 5.95544 14.227 6.12352 14.4034 6.24181C14.5799 6.36009 14.7876 6.42325 15 6.42325C15.2124 6.42325 15.4201 6.36009 15.5966 6.24181C15.773 6.12352 15.9103 5.95544 15.9911 5.75893C16.9045 3.52634 19.0915 2.14286 21.6964 2.14286C23.3297 2.14498 24.8955 2.79474 26.0504 3.94964C27.2053 5.10454 27.855 6.6703 27.8571 8.30357C27.8571 15.4835 17.4429 21.9844 15 23.4107Z"
        fill="black"
      />
    </svg>
  );
};

export default UnLikeIcon;
