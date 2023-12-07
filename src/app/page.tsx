"use client";

import { FriendSidebar, RightSidebar, UserChat } from "@/components";
import { useModal } from "@/hooks/useRightSidebarModal";
import styled from "styled-components";

export default function Home() {
  const { openModal, modalState } = useModal();
  return (
    <Container>
      <FriendSidebar />
      <UserChat />
      {/* <button onClick={openModal}>test</button> */}
      {modalState.show && <RightSidebar />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
