import { SvgAttribute } from "@/types/ui/SvgAttribute.type";

const Send = ({ width = 30, height = 30 }: SvgAttribute) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9878 20.0122L32 2M13.9878 20.0122L19.7189 31.4746C19.7908 31.6314 19.9061 31.7642 20.0512 31.8573C20.1964 31.9505 20.3652 32 20.5377 32C20.7101 32 20.8789 31.9505 21.0241 31.8573C21.1692 31.7642 21.2846 31.6314 21.3564 31.4746L32 2M13.9878 20.0122L2.52542 14.2811C2.36864 14.2092 2.23579 14.0939 2.14265 13.9488C2.04951 13.8036 2 13.6348 2 13.4623C2 13.2899 2.04951 13.1211 2.14265 12.9759C2.23579 12.8308 2.36864 12.7154 2.52542 12.6436L32 2"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Send;
