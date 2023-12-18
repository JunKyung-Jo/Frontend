import { CSSProperties } from "react";

export interface SvgAttribute extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];

  deg?: number;
}
