import styled from "styled-components";
import color from "../../styles/theme/color";
import font from "@/styles/theme/font";

export const Container = styled.div`
  flex: 1;
`;

export const ChatBox = styled.div<{ isMyChat: boolean }>`
  max-width: 440px;
  border-radius: ${({ isMyChat }) =>
    isMyChat ? "8px 0px 8px 8px" : "0px 8px 8px 8px"};
  background-color: ${color.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-sizing: border-box;
  word-break: break-all;
  ${font.$p2}
`;

export const ChatContainer = styled.div<{ isMyChat: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ isMyChat }) => (isMyChat ? "right" : "left")};
`;

export const ChatArea = styled.div`
  width: 100%;
  height: 90%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 15px;

  padding: 20px 62px;
  box-sizing: border-box;

  overflow-y: auto;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
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
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  ${font.$p1}

  &:focus {
    border: 1px solid ${color.primary};
  }
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
