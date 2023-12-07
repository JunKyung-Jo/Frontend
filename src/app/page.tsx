"use client";

import { FriendSidebar, UserChat } from "@/components";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <FriendSidebar />
      <UserChat />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
