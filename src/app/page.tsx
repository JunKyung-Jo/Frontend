"use client";

import {
  FriendSidebar,
  RightSidebar,
  UserChat,
  LoginModalForm,
} from "@/components";
import Modal from "@/components/modal";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import { useLocalStorage } from "@/hooks/useSessionStorage";
import { useUserdataQuery } from "@/services/auth/queries";
import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const { rightModalState } = useRightbarSideModal();
  const { modalState } = useLoginModal();
  const { data } = useUserdataQuery();
  const { setStorageItem } = useLocalStorage();

  useEffect(() => {
    console.log(data);
    if (data) {
      setStorageItem("userdata", data);
    }
  }, []);

  return (
    <Container>
      <Modal />
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
