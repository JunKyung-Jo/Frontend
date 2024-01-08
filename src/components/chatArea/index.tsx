import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { LeftIcon, SendIcon, OptionIcon } from "@/styles/svg";
import * as S from "./style";
import { Column, Row, Text } from "@/styles/ui";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import {
  useUserChatMutation,
  useUserFreeChatMutation,
} from "@/services/chat/mutate";
import UserChat from "./userChat";
import { useRecoilValue } from "recoil";
import { AImessage } from "@/store/services";
import { selectedBotAtom } from "@/store/chat";
import { useGetUserchatQuery } from "@/services/chat/query";
import { useLocalStorage } from "@/hooks/useSessionStorage";
import useModal from "@/hooks/useModal";
import PostModal from "../postModal";
import axios from "axios";
import { useDeleteFriendMutation } from "@/services/friend/mutate";

import Logo from "@/styles/svg/logo.png";

const ChatArea = ({
  defaultFriendData,
  myFriendData,
}: {
  defaultFriendData: any;
  myFriendData: any;
}) => {
  //모달창 불러오는 훅
  const { openModal } = useRightbarSideModal();
  //로컬스토리지 값 접근하는 함수
  const { getStorageItem } = useLocalStorage();

  //메시지 끝나는 창 ref
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  //채팅 세팅 ref
  const chatSettingRef = useRef<HTMLDivElement | null>(null);

  // Ai응답 전역변수
  const AImessageResponse = useRecoilValue(AImessage);
  // 선택된 친구 정보 전역변수
  const selectedFriend = useRecoilValue(selectedBotAtom);

  const [isOpen, setIsOpen] = useOutsideClick(chatSettingRef, false);

  //입력된텍스트
  const [inputValue, setInputValue] = useState({ text: "", isMyChat: true });
  //모든채팅내용 담는 state
  const [messages, setMessages] = useState<any[]>([
    { text: "", isMyChat: true },
  ]);

  //입력된채팅내용 서버로전송(로그인o)
  const { userChatMutate } = useUserChatMutation(inputValue.text);
  //입력된채팅내용 서버로전송(로그인x)
  const { userFreeChatMutate } = useUserFreeChatMutation(inputValue.text);
  //모든 채팅내용 서버에서 가져옴
  const { data, refetch, isLoading } = useGetUserchatQuery(
    selectedFriend.id + 1
  );
  //친구 삭제
  const { deleteFriendMutate } = useDeleteFriendMutation(selectedFriend.id + 1);

  //input값 변화하였을때 state변경하는함수
  const [user, setUser] = useState();

  useLayoutEffect(() => {
    GetUser();
  }, []);

  const GetUser = async () => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.get(
        "http://findfriend.kro.kr/api/user/get",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data.authority);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, text: e.target.value });
  };

  //메세지보내는함수
  const sendMyMessage = () => {
    if (inputValue.text.trim()) {
      if (selectedFriend.authority !== "ROLE_CUSTOM") {
        userFreeChatMutate();
        console.log("eeeee", selectedFriend.authority);
      } else {
        userChatMutate();
        console.log("@@@@@", selectedFriend.authority);
      }
      setMessages([...messages, inputValue]);
    }
  };

  //키 누른거인식
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMyMessage();
    }
  };

  //응답오면 채팅배열에 값 삽입
  useEffect(() => {
    setMessages([...messages, { text: AImessageResponse, isMyChat: false }]);
  }, [AImessageResponse]);

  //렌더링 시 서버에서온 메세지 배열을 채팅배열에 넣음
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

  //선택된친구가 바뀌면 채팅데이터 다시갖고옴
  useEffect(() => {
    setMessages([]);
    if (getStorageItem("access-token")) refetch();
  }, [selectedFriend]);

  //채팅띄우는 애니메이션부분
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

  //오른쪽 게시문모달 선언문
  const { openMyModal, closeMyModal } = useModal();

  const openPost = () => {
    openMyModal({
      component: (
        <PostModal closeMyModal={closeMyModal} id={selectedFriend.id + 1} />
      ),
    });
  };

  return (
    <S.Container>
      <S.ChatAiInfoContainer>
        <S.ChatAiInfo>
          <S.SettingButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            ref={chatSettingRef}
          >
            <OptionIcon width={2.4} height={2.4} />
            {isOpen && (
              <>
                <S.ChatAiOption>
                  {selectedFriend.authority === "ROLE_CUSTOM" && (
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        deleteFriendMutate();
                      }}
                    >
                      <LeftIcon width={1.8} height={1.8} />
                      친구 떠나기
                    </div>
                  )}
                  {user === "ROLE_ADMIN" && (
                    <div
                      style={{ color: "black" }}
                      onClick={() => {
                        openPost();
                      }}
                    >
                      게시물 등록
                    </div>
                  )}
                </S.ChatAiOption>
              </>
            )}
          </S.SettingButton>
          <S.ChatAiName onClick={openModal}>
            <div
              style={{ width: "8rem", height: "8rem", position: "relative" }}
            >
              <S.ProfileImg
                alt="profileImg"
                onClick={openModal}
                fill
                src={
                  defaultFriendData?.data.data.find(
                    (e: any) => e.id === selectedFriend.id + 1
                  )?.url
                    ? defaultFriendData?.data.data.find(
                        (e: any) => e.id === selectedFriend.id + 1
                      )?.url
                    : myFriendData.data.data.find(
                        (e: any) => e.id === selectedFriend.id + 1
                      )?.url
                    ? myFriendData.data.data.find(
                        (e: any) => e.id === selectedFriend.id + 1
                      )?.url
                    : Logo
                }
              />
            </div>
            <S.ChatAiName />
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
