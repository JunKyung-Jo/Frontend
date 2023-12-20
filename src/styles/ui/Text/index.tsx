import styled, { css } from "styled-components";
import { TextAttribute } from "@/types/ui/TextAttribute.type";
import { Color, Font } from "@/styles/theme";

type Font = keyof typeof Font;

const Text = ({
  width = "fit-content",
  fontType,
  color = "black",
  textAlign = "center",
  ellipsis = false,
  children,
}: TextAttribute) => {
  return (
    <Container
      fontType={fontType}
      ellipsis={ellipsis}
      style={{ color, textAlign, width }}
    >
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  text-align: left;

  ${({ fontType }) => Font[fontType]};
  ${({ ellipsis }) =>
    ellipsis
      ? css`
          text-overflow: ellipsis;
        `
      : css`
          text-overflow: clip;
        `};
  white-space: nowrap;
  overflow: hidden;
`;
