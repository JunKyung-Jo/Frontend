import styled from "styled-components";
import font from "@/styles/theme/font";
import color from "@/styles/theme/color";

export const Container = styled.div`
  width: 120rem;
  height: 70rem;

  border-radius: 20px;
  background: ${color.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 449px;

  border-bottom: 1px solid ${color.gray200};
`;

export const UploadImage = styled.p`
  color: ${color.black};

  ${font.$Body3};
`;

export const Button = styled.button`
  color: ${color.white};

  ${font.$Button2};
`;

export const BorderBox = styled.div<{ height: number }>`
  width: 64rem;
  height: ${(props) => `${props.height}rem`};

  border-right: 1px solid ${color.gray200};
`;

export const ContentsBox = styled.textarea<{ height: number }>`
  display: flex;
  width: 56rem;
  height: ${(props) => `${props.height}rem`};
  padding: 18px 393px 154px 18px;
  align-items: center;
  resize: none;

  border-bottom: 1px solid ${color.gray200};
`;
