import { Color } from "@/styles/theme";
import font from "@/styles/theme/font";
import { ButtonAttribute } from "@/types/ui/ButtonAttribute.type";
import React from "react";
import styled from "styled-components";

const Button = ({
  content,
  width = 35,
  height = 5,
  borderRadius = 1,
  backgroundColor = Color.primary,
  color = Color.white,
  border = `2px solid ${Color.primary}`,
  onClick,
}: ButtonAttribute) => {
  return (
    <Container
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        color,
        backgroundColor,
        borderRadius: `${borderRadius}rem`,
        border,
      }}
      onClick={onClick}
    >
      {content}
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${font.$Button3}

  cursor: pointer;
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1);

  &:hover {
    opacity: 0.8;
  }
`;
