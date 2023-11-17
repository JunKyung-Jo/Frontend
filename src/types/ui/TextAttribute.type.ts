import { Font } from "@/styles/theme";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

type font = keyof typeof Font;

export interface TextAttribute {
  fontType: font;
  color?: CSSProperties["color"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  children: ReactNode;
}
