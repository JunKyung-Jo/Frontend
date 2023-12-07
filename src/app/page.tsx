"use client";

import { FriendSidebar, RightSidebar, UserChat } from "@/components";
import { useModal } from "@/hooks/useRightSidebarModal";
import styled from "styled-components";

export default function Home() {
  const { modalState } = useModal();
  return (
    <Container>
      <FriendSidebar />
      <UserChat />
      {modalState.show && <RightSidebar />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
