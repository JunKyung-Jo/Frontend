import React, { useState, useRef, useEffect } from "react";
import { LeftIcon, SendIcon, OptionIcon } from "@/styles/svg";
import * as S from "./style";
import { Column, Row, Text } from "@/styles/ui";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import { useUserChatMutation } from "@/services/chat/mutate";
import UserChat from "./userChat";
import { useRecoilValue } from "recoil";
import { AImessage } from "@/store/services";
import { selectedBotAtom } from "@/store/chat";
import { useGetUserchatQuery } from "@/services/chat/query";
import { useLocalStorage } from "@/hooks/useSessionStorage";

const ChatArea = ({
  defaultFriendData,
  myFriendData,
}: {
  defaultFriendData: any;
  myFriendData: any;
}) => {
  const { openModal } = useRightbarSideModal();
  const { getStorageItem } = useLocalStorage();

  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const chatSettingRef = useRef<HTMLDivElement | null>(null);

  const AImessageResponse = useRecoilValue(AImessage);
  const selectedFriend = useRecoilValue(selectedBotAtom);

  const [isOpen, setIsOpen] = useOutsideClick(chatSettingRef, false);
  const [inputValue, setInputValue] = useState({ text: "", isMyChat: true });
  const [messages, setMessages] = useState<any[]>([
    { text: "", isMyChat: true },
  ]);

  const { userChatMutate } = useUserChatMutation(inputValue.text);
  const { data, refetch, isLoading } = useGetUserchatQuery(
    selectedFriend.id + 1
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, text: e.target.value });
  };

  const sendMyMessage = () => {
    if (inputValue.text.trim()) {
      userChatMutate();
      setMessages([...messages, inputValue]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMyMessage();
    }
  };

  useEffect(() => {
    setMessages([...messages, { text: AImessageResponse, isMyChat: false }]);
  }, [AImessageResponse]);

  useEffect(() => {
    if (!isLoading) {
      const queryMessageArray: any[] = [];

      data?.data.data.forEach((e: any) => {
        queryMessageArray.push({ text: e.userMessage, isMyChat: true });
        queryMessageArray.push({ text: e.replyMessage, isMyChat: false });
      });

      setMessages(queryMessageArray);
    }
  }, [data]);

  useEffect(() => {
    setMessages([]);
    if (getStorageItem("access-token")) refetch();
  }, [selectedFriend]);

  useEffect(() => {
    setTimeout(() => {
      messageEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setInputValue({ ...inputValue, text: "" });
    }, 0);
  }, [messages]);

  console.log(defaultFriendData, selectedFriend.id, "fwfewfwefewf");

  return (
    <S.Container>
      <S.ChatAiInfoContainer>
        <S.ChatAiInfo>
          <S.SettingButton
            onClick={() => setIsOpen(!isOpen)}
            ref={chatSettingRef}
          >
            <OptionIcon width={2.4} height={2.4} />
            {isOpen && (
              <S.ChatAiOption>
                <LeftIcon width={1.8} height={1.8} />
                친구 떠나기
              </S.ChatAiOption>
            )}
          </S.SettingButton>
          <S.ChatAiName onClick={openModal}>
            <S.ProfileImg />
            <Column alignItems="flex-start" justifyContent="space-evenly">
              <Text fontType="$H5" textAlign="left" width={"30rem"} ellipsis>
                {myFriendData
                  ? myFriendData.data.data.find(
                      (e: any) => e.id === selectedFriend.id + 1
                    )?.name
                  : defaultFriendData?.data.data.find(
                      (e: any) => e.id === selectedFriend.id + 1
                    )?.name}
              </Text>
              <Text fontType="$p1" textAlign="left" width={"30rem"} ellipsis>
                {myFriendData
                  ? myFriendData.data.data.find(
                      (e: any) => e.id === selectedFriend.id + 1
                    )?.statusMessage
                  : defaultFriendData?.data.data.find(
                      (e: any) => e.id === selectedFriend.id + 1
                    )?.statusMessage}
              </Text>
            </Column>
          </S.ChatAiName>
        </S.ChatAiInfo>
      </S.ChatAiInfoContainer>
      <S.ChatArea>
        {messages.map((message, index) => {
          if (message.text)
            return (
              <UserChat
                setMessage={setMessages}
                message={messages}
                index={index}
                text={message.text}
                isMyChat={message.isMyChat}
              />
            );
        })}
        <div ref={messageEndRef} />
      </S.ChatArea>
      <S.InputArea>
        <S.Input
          value={inputValue.text}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="하고 싶은 말을 적어보세요!"
        />
        <S.Send onClick={sendMyMessage}>
          <SendIcon width={20} height={20} />
        </S.Send>
      </S.InputArea>
    </S.Container>
  );
};

export default ChatArea;
