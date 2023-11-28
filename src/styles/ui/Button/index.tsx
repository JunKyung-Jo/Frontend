import { Color } from "@/styles/theme";
import font from "@/styles/theme/font";
import { ButtonAttribute } from "@/types/ui/ButtonAttribute.type";
import React from "react";
import styled from "styled-components";

const Button = ({
  content,
  width = 45,
  height = 6,
  borderRadius = 1,
  border = `1px solid ${Color.primary}`,
  backgroundColor = Color.primary,
  color = Color.white,
  onClick,
}: ButtonAttribute) => {
  return (
    <Container
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        color,
        backgroundColor,
        border,
        borderRadius: `${borderRadius}rem`,
      }}
      onClick={onClick}
    >
      {content}
    </Container>
  );
};

export default Button;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${font.$Button3}
`;
