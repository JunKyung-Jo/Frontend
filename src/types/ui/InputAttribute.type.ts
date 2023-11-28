import { CSSProperties } from "react";

export interface InputAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
  label?: string;
  placeholder?: string;
  type?: string;
}
