"use client";

import {
  FriendSidebar,
  RightSidebar,
  UserChat,
  LoginModalForm,
} from "@/components";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import styled from "styled-components";

export default function Home() {
  const { rightModalState } = useRightbarSideModal();
  const { modalState } = useLoginModal();
  return (
    <Container>
      {modalState.show && <LoginModalForm />}
      <FriendSidebar />
      <UserChat />
      {rightModalState.show && <RightSidebar />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
