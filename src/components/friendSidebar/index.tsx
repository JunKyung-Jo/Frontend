import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FriendContainer from "./friendContainer";
import FriendListContainer from "./friendListContainer";
import { Color } from "@/styles/theme";
import { AddBotIcon, Logo } from "@/styles/svg";
import { Button, Column, Row, Text } from "@/styles/ui";
import { useLoginModal } from "@/hooks/useLoginModal";
import Image from "next/image";

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

  const [defaultAI, setDefaultAI] = useState([]);
  const [userAI, setUserAI] = useState([]);

  useEffect(() => {
    if (userData && myFriendData) {
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

  return (
    <Container>
      <Column alignItems="center">
        {userData ? (
          <FriendContainer
            id={0}
            name={userData.data.data.name + " (나)"}
            statusMsg={userData.data.data.statusMessage}
            authority="USER"
          />
        ) : (
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
        <FriendListContainer
          friendsList={defaultAI}
          listName="공지 봇"
          type="공지"
        />
        {userData && (
          <FriendListContainer
            friendsList={userAI}
            listName="AI 채팅 봇"
            type="채팅"
          />
        )}
        <AddAIBotButtonDiv>
          <AddBotIcon width={3} height={3} />
        </AddAIBotButtonDiv>
      </Column>
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

  background-color: ${Color.gray50};
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
