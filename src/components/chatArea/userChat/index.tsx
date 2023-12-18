import { OptionIcon } from "@/styles/svg";
import { Color } from "@/styles/theme";
import font from "@/styles/theme/font";
import { UserChatAttribute } from "@/types/components/UserChatAttiribute.type";
import styled, { css, keyframes } from "styled-components";

const UserChat = ({
  text,
  isMyChat,
  index,
  message,
  setMessage,
}: UserChatAttribute) => {
  return (
    <ChatContainer isMyChat={isMyChat}>
      <ChatBox isMyChat={isMyChat}>
        {text}
        <ChatBoxOption isMyChat={isMyChat}>
          <OptionIcon />
        </ChatBoxOption>
      </ChatBox>
    </ChatContainer>
  );
};

export default UserChat;

const ChatContainer = styled.div<{ isMyChat: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ isMyChat }) => (isMyChat ? "right" : "left")};
`;

const ShowChatBox = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7) translateY(50%) translateX(-50%);
  } to {
    opacity: 1;
    transform: scale(1) translateY(0%) translateX(0%);
  }
`;

const ShowMYChatBox = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7) translateY(50%) translateX(50%);
  } to {
    opacity: 1;
    transform: scale(1) translateY(0%) translateX(0%);
  }
`;

const ChatBox = styled.div<{ isMyChat: boolean }>`
  max-width: 440px;
  border-radius: ${({ isMyChat }) =>
    isMyChat ? "8px 0px 8px 8px" : "0px 8px 8px 8px"};
  background-color: ${Color.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  box-sizing: border-box;
  word-break: break-all;
  position: relative;

  animation: ${({ isMyChat }) => (isMyChat ? ShowMYChatBox : ShowChatBox)} 0.6s
    cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  ${font.$p2}
`;

const ChatBoxOption = styled.div<{ isMyChat: boolean }>`
  position: absolute;
  ${({ isMyChat }) =>
    isMyChat
      ? css`
          left: -2rem;
        `
      : css`
          right: -2rem;
        `};
  bottom: -0.7rem;

  cursor: pointer;
`;
