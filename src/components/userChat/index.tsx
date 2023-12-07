import React, { useState, useRef } from "react";
import { LeftIcon, SendIcon, SettingIcon } from "@/styles/svg";
import * as S from "./style";
import { Column, Row, Text } from "@/styles/ui";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const UserChat = () => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const chatSettingRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useOutsideClick(chatSettingRef, false);
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
      messageEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <S.Container>
      <S.ChatAiInfoContainer>
        <S.ChatAiInfo>
          <S.SettingButton
            onClick={() => setIsOpen(!isOpen)}
            ref={chatSettingRef}
          >
            <SettingIcon width={1.6} height={1.6} />
            {isOpen && (
              <S.ChatAiOption>
                <LeftIcon width={1.8} height={1.8} />
                친구 떠나기
              </S.ChatAiOption>
            )}
          </S.SettingButton>
          <Row gap={3}>
            <S.ProfileImg />
            <Column alignItems="flex-start" justifyContent="space-evenly">
              <Text fontType="$H5">공지봇</Text>
              <Text fontType="$p1">이것은 상태 메세지 입니다.</Text>
            </Column>
          </Row>
        </S.ChatAiInfo>
      </S.ChatAiInfoContainer>
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
        <S.ChatContainer isMyChat={true} ref={messageEndRef} />
      </S.ChatArea>
      <S.InputArea>
        <S.Input
          value={inputValue.text}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="하고 싶은 말을 적어보세요!"
        />
        <S.Send onClick={sendMessage}>
          <SendIcon width={20} height={20} />
        </S.Send>
      </S.InputArea>
    </S.Container>
  );
};

export default UserChat;
