import { Font } from "@/styles/theme";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

type font = keyof typeof Font;

export interface TextAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  fontType: font;
  color?: CSSProperties["color"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  children: ReactNode;
}
