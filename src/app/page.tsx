"use client";

import {
  FriendSidebar,
  RightSidebar,
  ChatArea,
  LoginModalForm,
} from "@/components";
import Modal from "@/components/modal";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import { useLocalStorage } from "@/hooks/useSessionStorage";
import { useUserdataQuery } from "@/services/auth/query";
import {
  useGetDefaultFriendQuery,
  useGetMyFriendQuery,
} from "@/services/friend/query";
import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const { rightModalState } = useRightbarSideModal();
  const { modalState } = useLoginModal();
  const { getStorageItem } = useLocalStorage();

  const { defaultFriendData, isDefaultFriendLoading } =
    useGetDefaultFriendQuery();
  const { myFriendData, isMyFriendLoading } = useGetMyFriendQuery();
  const { data, isLoading } = useUserdataQuery();

  useEffect(() => {
    console.log("다시받아옴");
  }, [data, myFriendData]);

  const defaultFriendListDummy = {
    data: {
      data: [{ id: 1, name: " ", statusMessage: " ", authority: "ROLE_FREE" }],
    },
  };

  const myFriendListDummy = {
    data: {
      data: [
        { id: 1, name: " ", statusMessage: " ", authority: "ROLE_CUSTOM" },
      ],
    },
  };

  const userDataDummy = {
    data: {
      data: {
        name: " ",
        statusMessage: " ",
        friends: [],
      },
    },
  };

  return (
    <Container>
      <Modal />
      {modalState.show && <LoginModalForm />}
      <FriendSidebar
        userData={
          getStorageItem("access-token")
            ? isLoading
              ? userDataDummy
              : data
            : null
        }
        defaultFriendData={
          isDefaultFriendLoading ? defaultFriendListDummy : defaultFriendData
        }
        myFriendData={
          getStorageItem("access-token")
            ? isMyFriendLoading
              ? myFriendListDummy
              : myFriendData
            : null
        }
      />
      <ChatArea
        defaultFriendData={
          isDefaultFriendLoading ? defaultFriendListDummy : defaultFriendData
        }
        myFriendData={
          getStorageItem("access-token")
            ? isMyFriendLoading
              ? myFriendListDummy
              : myFriendData
            : null
        }
      />
      {rightModalState.show && (
        <RightSidebar
          userData={
            getStorageItem("access-token")
              ? isLoading
                ? userDataDummy
                : data
              : null
          }
          defaultFriendData={
            isDefaultFriendLoading ? defaultFriendListDummy : defaultFriendData
          }
          myFriendData={
            getStorageItem("access-token")
              ? isMyFriendLoading
                ? myFriendListDummy
                : myFriendData
              : null
          }
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
