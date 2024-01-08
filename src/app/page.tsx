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
import { selectedBotAtom } from "@/store/chat";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function Home() {
  const { rightModalState } = useRightbarSideModal();
  const { modalState } = useLoginModal();
  const { getStorageItem } = useLocalStorage();

  const { defaultFriendData, isDefaultFriendLoading } =
    useGetDefaultFriendQuery();
  const { myFriendData, isMyFriendLoading } = useGetMyFriendQuery();
  const { data, isLoading } = useUserdataQuery();

  const [defaultFriendArray, setDefaultFriendArray] = useState<any>(null);
  const [myFriendArray, setMyFriendArray] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [selectedBot, setSelectedBot] = useRecoilState(selectedBotAtom);

  useEffect(() => {
    if (!isDefaultFriendLoading) {
      setDefaultFriendArray(defaultFriendData);
    }
  }, [defaultFriendData]);

  useEffect(() => {
    setSelectedBot({
      authority: defaultFriendArray?.data.data[0].authority,
      id: defaultFriendArray?.data.data[0].id,
    });
  }, [defaultFriendArray]);

  useEffect(() => {
    if (!isLoading) {
      setUserData(data);
    }
  }, [data]);

  useEffect(() => {
    if (!isMyFriendLoading) {
      setMyFriendArray(myFriendData);
    }
  }, [myFriendData]);

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
        userData={userData ? userData : userDataDummy}
        defaultFriendData={
          defaultFriendArray ? defaultFriendArray : defaultFriendListDummy
        }
        myFriendData={myFriendArray ? myFriendArray : myFriendListDummy}
      />
      <ChatArea
        defaultFriendData={
          defaultFriendArray ? defaultFriendArray : defaultFriendListDummy
        }
        myFriendData={myFriendArray ? myFriendArray : myFriendListDummy}
      />
      {rightModalState.show && (
        <RightSidebar
          userData={userData ? userData : userDataDummy}
          defaultFriendData={
            defaultFriendArray ? defaultFriendArray : defaultFriendListDummy
          }
          myFriendData={myFriendArray ? myFriendArray : myFriendListDummy}
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
