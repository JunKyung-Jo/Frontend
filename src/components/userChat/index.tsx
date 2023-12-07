import React, { useState } from "react";
import { SendIcon } from "@/styles/svg";
import * as S from "./style";
const UserChat = () => {
  const [inputValue, setInputValue] = useState({ text: "", isMyChat: true });
  const [messages, setMessages] = useState<any[]>([
    { text: "", isMyChat: true },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, text: e.target.value });
  };

  const sendMessage = () => {
    if (inputValue.text.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue({ ...inputValue, text: "" });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <S.Container>
      <S.ChatArea>
        {messages.map((message, index) => {
          if (message.text)
            return (
              <S.ChatContainer
                key={`chatbox${index}`}
                isMyChat={message.isMyChat}
              >
                <S.ChatBox isMyChat={message.isMyChat}>
                  {message.text}
                </S.ChatBox>
              </S.ChatContainer>
            );
        })}
      </S.ChatArea>
      <S.InputArea>
        <S.Input
          value={inputValue.text}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="하고 싶은 말을 적어보세요!"
        />
        <S.Send onClick={sendMessage}>
          <SendIcon width={25} height={25} />
        </S.Send>
      </S.InputArea>
    </S.Container>
  );
};

export default UserChat;
