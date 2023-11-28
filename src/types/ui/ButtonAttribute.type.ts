import { CSSProperties } from "styled-components";

export interface ButtonAttribute {
  content: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
  border?: CSSProperties["border"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
