import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 300px;
  background-color: ${color.white};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${color.gray200};
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 50%;
  height: 50px;
  margin-top: 10px;
  background-color: ${color.primary};
  color: ${color.white};
  border: none;
  border-radius: 10px;
  ${font.$Button3};
`;
