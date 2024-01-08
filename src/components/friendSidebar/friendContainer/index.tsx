import UpdateModal from "@/components/updateModal";
import useModal from "@/hooks/useModal";
import { selectedBotAtom } from "@/store/chat";
import { OptionIcon } from "@/styles/svg";
import { Color } from "@/styles/theme";
import font from "@/styles/theme/font";
import { Column, Text } from "@/styles/ui";
import { FriendContainerAttribute } from "@/types/components/FriendContainerAttribute.type";
import React from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import Logo from "@/styles/svg/logo.png";
import Image from "next/image";

const FriendContainer = ({
  name,
  statusMsg,
  id,
  authority,
  url,
}: FriendContainerAttribute) => {
  //선택된 봇 정보담고있는 전역변수

  const [selectedFriend, setSelectedFriend] = useRecoilState(selectedBotAtom);

  //본인정보 수정 모달띄워주는 함수

  const { openMyModal, closeMyModal } = useModal();

  const openUpdateModal = () => {
    openMyModal({
      component: (
        <UpdateModal
          name={name}
          statusMsg={statusMsg}
          closeMyModal={closeMyModal}
        />
      ),
    });
  };

  return (
    <Container
      isSelected={selectedFriend.id === id}
      onClick={() => {
        // 눌렀을때 유저 컨테이너가 아니라면 선택된 봇 정보 변경해주기 (유저는 선택해도 게시물 모달창 & 채팅영역 정보 변경 없음.)
        if (authority !== "USER") {
          setSelectedFriend({ id: id, authority });
        }
      }}
    >
      <div style={{ width: "4rem", height: "4rem", position: "relative" }}>
        {/*사진 넣고 없으면 기본이미지 넣어주기*/}
        <ProfileImg src={url ? url : Logo} alt="friend" fill />
      </div>
      <Column alignItems="flex-start" justifyContent="space-evenly">
        <Text fontType="$Button3" width="12rem" textAlign="left" ellipsis>
          {/*봇 이름*/}
          {name}
        </Text>
        <Text width="12rem" fontType="$p3" textAlign="left" ellipsis>
          {/*봇 상태 메세지*/}
          {statusMsg}
        </Text>
        {/*정보 수정 버튼*/}
        {authority === "USER" && (
          <EditProfileButton onClick={openUpdateModal}>
            정보 수정
          </EditProfileButton>
        )}
      </Column>
    </Container>
  );
};

export default FriendContainer;

const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  position: relative;
  gap: 2rem;

  width: 100%;

  padding: 1.5rem 7rem 1.5rem 2rem;
  transition: 0.15s cubic-bezier(0.3, 0.49, 0.5, 1);
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: ${Color.gray100};
        `
      : css`
          background-color: ${Color.white};
        `}

  &:hover {
    background-color: ${Color.gray100};
  }
  &:active {
    background-color: ${Color.gray50};
  }
`;

const ProfileImg = styled(Image)`
  border-radius: 999rem;
`;

const EditProfileButton = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  padding: 0.25rem;
  border-radius: 999px;
  transition: 0.15s cubic-bezier(0.3, 0.49, 0.5, 1);
  text-decoration: underline;

  text-decoration-color: ${Color.gray500};

  opacity: 0.7;

  ${font.$Mini};
`;
