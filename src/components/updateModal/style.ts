import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 400px;
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
  padding-left: 10px;
  box-sizing: border-box;
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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.input`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  background-color: ${color.black};
  position: absolute;
  top: 12%;
  left: 44.5%;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  background-color: ${color.black};
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
