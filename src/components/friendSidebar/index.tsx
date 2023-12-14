import React from "react";
import styled from "styled-components";
import FriendContainer from "./friendContainer";
import FriendListContainer from "./friendListContainer";
import { Color } from "@/styles/theme";
import { Logo } from "@/styles/svg";
import { Button, Text } from "@/styles/ui";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useLocalStorage } from "@/hooks/useSessionStorage";

const FriendSidebar = () => {
  const { openModal } = useLoginModal();
  const { getStorageItem } = useLocalStorage();

  return (
    <Container>
      {getStorageItem("userData") ? (
        <FriendContainer
          name="HeeSung"
          statusMsg="이것은 상태 메세지 입니다."
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
      <FriendListContainer listName="공지 봇" type="공지" />
      <FriendListContainer listName="AI 채팅 봇" type="채팅" />
      <FriendSidebarFooter>
        <Logo width={16} height={4} />
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
  box-shadow: 1px 0px 0px ${Color.gray200};

  z-index: 2;
`;

const FriendSidebarFooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;

  padding: 1.5rem 2rem 1.5rem 2rem;
`;
