import React from "react";
import styled from "styled-components";
import FriendContainer from "./friendContainer";
import FriendListContainer from "./friendListContainer";
import { Color } from "@/styles/theme";
import { Logo } from "@/styles/svg";
import { Button } from "@/styles/ui";
import { useModal } from "@/hooks/useLoginModal";
import { LoginModalForm } from "..";

const FriendSidebar = () => {
  const { openModal, modalState } = useModal();

  return (
    <Container>
      {modalState.show && <LoginModalForm />}
      <FriendContainer name="HeeSung" statusMsg="이것은 상태 메세지 입니다." />
      <FriendListContainer listName="공지 봇" type="공지" />
      <FriendListContainer listName="AI 채팅 봇" type="채팅" />
      <FriendSidebarFooter>
        <Logo width={13} height={3} />
        <Button
          width={8}
          height={3.5}
          backgroundColor={Color.primary}
          content="로그인"
          onClick={openModal}
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

  background-color: ${Color.gray50};
`;

const FriendSidebarFooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  border-top: 1px solid ${Color.gray200};

  background-color: ${Color.gray100};
`;
