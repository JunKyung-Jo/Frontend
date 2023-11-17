import { css } from "styled-components";

const Bold = 700;
const SemiBold = 600;
const Medium = 500;
const Regular = 400;

const fontGenerator = (weight: number, size: number, lineHeight: number) => css`
  font-family: "Pretendard";
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}%;
  letter-spacing: 0px;
`;

const font = {
  $D1: fontGenerator(Bold, 72, 120),
  $D2: fontGenerator(Bold, 64, 120),
  $D3: fontGenerator(Bold, 56, 120),
  $H1: fontGenerator(SemiBold, 48, 150),
  $H2: fontGenerator(SemiBold, 44, 150),
  $H3: fontGenerator(SemiBold, 40, 150),
  $H4: fontGenerator(SemiBold, 36, 150),
  $H5: fontGenerator(SemiBold, 32, 150),
  $Body1: fontGenerator(Medium, 28, 150),
  $Body2: fontGenerator(Medium, 24, 150),
  $Body3: fontGenerator(Medium, 20, 150),
  $p1: fontGenerator(Regular, 16, 150),
  $p2: fontGenerator(Regular, 14, 150),
  $p3: fontGenerator(Regular, 12, 150),
  $Button1: fontGenerator(Medium, 24, 120),
  $Button2: fontGenerator(Medium, 20, 120),
  $Button3: fontGenerator(Medium, 16, 120),
  $Navigation: fontGenerator(Regular, 12, 130),
};

export default font;
