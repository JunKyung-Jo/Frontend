import styled from "styled-components";
import { TextAttribute } from "@/types/ui/TextAttribute.type";
import { Color, Font } from "@/styles/theme";

type Font = keyof typeof Font;

const Text = ({
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
      style={{ color, textAlign }}
    >
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => Font[fontType]};
  text-overflow: ${({ ellipsis }) => (ellipsis ? "ellipsis" : "clip")};
`;
