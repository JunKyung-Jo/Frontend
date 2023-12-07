import React, { useState } from "react";
import { SendIcon } from "@/styles/svg";
import * as S from "./style";

const UserChat = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
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
        {messages.map((message, index) => (
          <S.ChatBox key={`chatbox${index}`}>{message}</S.ChatBox>
        ))}
      </S.ChatArea>
      <S.InputArea>
        <S.Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <S.Send onClick={sendMessage}>
          <SendIcon width={25} height={25} />
        </S.Send>
      </S.InputArea>
    </S.Container>
  );
};

export default UserChat;
