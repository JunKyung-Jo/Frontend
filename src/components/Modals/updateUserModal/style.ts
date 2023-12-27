import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 70rem;
  height: 40rem;
  background-color: ${color.white};
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${color.primary};
  ${font.$Button2}
  color: ${color.white}
`;
