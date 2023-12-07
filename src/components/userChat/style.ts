import styled from "styled-components";
import color from "../../styles/theme/color";
import font from "@/styles/theme/font";

export const Container = styled.div`
  flex: 1;
`;

export const ChatBox = styled.div`
  max-width: 440px;
  border-radius: 8px 0px 8px 8px;
  background-color: ${color.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-sizing: border-box;
  word-break: break-all;
  ${font.$p2}
`;

export const ChatArea = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 62px;
  box-sizing: border-box;
  align-items: flex-end;
  gap: 15px;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 10%;
  border-top: 1px solid ${color.gray200};
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const Input = styled.input`
  border: 1px solid ${color.gray200};
  border-radius: 10px;
  width: 90%;
  height: 50px;
  padding: 1rem 1rem;

  ${font.$p1}
`;

export const Send = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${color.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
