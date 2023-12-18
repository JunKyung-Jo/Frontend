"use client";

import {
  FriendSidebar,
  RightSidebar,
  ChatArea,
  LoginModalForm,
} from "@/components";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import { useUserdataQuery } from "@/services/auth/query";
import styled from "styled-components";

export default function Home() {
  const { rightModalState } = useRightbarSideModal();
  const { modalState } = useLoginModal();
  const query = useUserdataQuery();

  return (
    <Container>
      {modalState.show && <LoginModalForm />}
      <FriendSidebar />
      <ChatArea />
      {rightModalState.show && <RightSidebar />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
