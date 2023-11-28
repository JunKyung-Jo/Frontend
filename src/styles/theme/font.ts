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
  $D1: fontGenerator(Bold, 7.2, 120),
  $D2: fontGenerator(Bold, 6.4, 120),
  $D3: fontGenerator(Bold, 5.6, 120),
  $H1: fontGenerator(SemiBold, 4.8, 150),
  $H2: fontGenerator(SemiBold, 4.4, 150),
  $H3: fontGenerator(SemiBold, 4.0, 150),
  $H4: fontGenerator(SemiBold, 3.6, 150),
  $H5: fontGenerator(SemiBold, 3.2, 150),
  $Body1: fontGenerator(Medium, 2.8, 150),
  $Body2: fontGenerator(Medium, 2.4, 150),
  $Body3: fontGenerator(Medium, 2.0, 150),
  $p1: fontGenerator(Regular, 1.6, 150),
  $p2: fontGenerator(Regular, 1.4, 150),
  $p3: fontGenerator(Regular, 1.2, 150),
  $Button1: fontGenerator(Medium, 2.4, 120),
  $Button2: fontGenerator(Medium, 2.0, 120),
  $Button3: fontGenerator(Medium, 1.6, 120),
  $Navigation: fontGenerator(Regular, 1.2, 130),
};

export default font;
