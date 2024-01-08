// FriendSidebar 컴포넌트는 친구 목록을 표시하고 사용자가 로그인한 경우 사용자 정보를 보여주는 React 컴포넌트입니다.
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FriendContainer from "./friendContainer";
import FriendListContainer from "./friendListContainer";
import { Color } from "@/styles/theme";
import { AddBotIcon, Logo } from "@/styles/svg";
import { Button, Column, Row, Text } from "@/styles/ui";
import { useLoginModal } from "@/hooks/useLoginModal";
import Image from "next/image";
import useModal from "@/hooks/useModal";
import NewFriendModal from "../newFriendModal";

// FriendSidebar 컴포넌트 정의
const FriendSidebar = ({
  myFriendData,
  defaultFriendData,
  userData,
}: {
  myFriendData: any;
  defaultFriendData: any;
  userData: any;
}) => {
  const { openModal } = useLoginModal();
  const { openMyModal, closeMyModal } = useModal();

  // 기본 AI 목록과 사용자 AI 목록을 관리하는 state
  const [defaultAI, setDefaultAI] = useState([]);
  const [userAI, setUserAI] = useState([]);

  // 데이터가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    if (userData && myFriendData) {
      // 사용자가 로그인한 경우, 해당 유저의 AI와 공지 봇 목록을 추출하여 state 업데이트
      const defaultAIArray = myFriendData?.data.data.filter(
        (e: any) =>
          e.authority === "ROLE_FREE" || e.authority === "ROLE_ANNOUNCE"
      );
      const userAIArray = myFriendData?.data.data.filter(
        (e: any) => e.authority === "ROLE_CUSTOM"
      );
      setDefaultAI(defaultAIArray);
      setUserAI(userAIArray);
    } else if (defaultFriendData?.data.data) {
      // 사용자가 로그인하지 않은 경우, 기본 AI와 공지 봇 목록을 추출하여 state 업데이트
      const defaultAIArray = defaultFriendData?.data.data.filter(
        (e: any) =>
          e.authority === "ROLE_FREE" || e.authority === "ROLE_ANNOUNCE"
      );
      const userAIArray = defaultFriendData?.data.data.filter(
        (e: any) => e.authority === "ROLE_CUSTOM"
      );
      setDefaultAI(defaultAIArray);
      setUserAI(userAIArray);
    }
  }, [myFriendData, defaultFriendData, userData]);

  // 모달 오픈 함수
  const openMakeFriendModal = () => {
    openMyModal({
      component: <NewFriendModal closeMyModal={closeMyModal} />,
    });
  };

  return (
    <Container>
      /* 사용자가 로그인한 경우, 사용자 정보를 보여줌 */
      <Column alignItems="center">
        {userData ? (
          <FriendContainer
            url={userData.data.data.url}
            id={0}
            name={userData.data.data.name}
            statusMsg={userData.data.data.statusMessage}
            authority="USER"
          />
        ) : (
          /* 사용자가 로그인하지 않은 경우, 로그인 유도 메시지와 로그인 버튼을 표시 */
          <LoginButtonContainer>
            <Text fontType="$p3">
              로그인하고 더 많은
              <br /> 기능을 이용해보세요!
            </Text>
            <Button
              width={8}
              height={3.5}
              backgroundColor={Color.white}
              color={Color.primary}
              content="로그인"
              onClick={openModal}
            />
          </LoginButtonContainer>
        )}
        {/* 기본 AI 목록을 표시하는 컴포넌트 */}
        <FriendListContainer
          friendsList={defaultAI}
          listName="공지 봇"
          type="공지"
        />
        {/* 사용자 AI 목록을 표시하는 컴포넌트 (사용자가 로그인한 경우에만 표시) */}
        {userData && (
          <FriendListContainer
            friendsList={userAI}
            listName="AI 채팅 봇"
            type="채팅"
          />
        )}
        {/* AI 친구 추가 버튼 */}
        <AddAIBotButtonDiv onClick={() => openMakeFriendModal()}>
          <AddBotIcon width={3} height={3} />
        </AddAIBotButtonDiv>
      </Column>
      {/* 화면 하단 로고 */}
      <FriendSidebarFooter>
        <Image
          src={Logo}
          alt="logo"
          style={{ width: "11rem", height: "10rem" }}
        />
      </FriendSidebarFooter>
    </Container>
  );
};

export default FriendSidebar;

// 스타일 컴포넌트 정의
const Container = styled.div`
  width: fit-content;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 0px 0px ${Color.gray200};
  z-index: 2;
  overflow-y: scroll;
`;

const FriendSidebarFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 1rem;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
`;

const AddAIBotButtonDiv = styled.div`
  margin-top: 2rem;
  margin-bottom: 8rem;
  opacity: 0.5;
  transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.8;
  }
`;
