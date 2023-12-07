"use client";

import { FriendSidebar, RightSidebar, UserChat } from "@/components";
import { useModal } from "@/hooks/useModal";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <FriendSidebar />
      <UserChat />
      <RightSidebar />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
