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

const FriendContainer = ({
  name,
  statusMsg,
  id,
  authority,
}: FriendContainerAttribute) => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(selectedBotAtom);
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
      isSelected={selectedFriend.id === id - 1}
      onClick={() => {
        if (authority !== "USER") {
          setSelectedFriend({ id: id - 1, authority });
          console.log(selectedFriend.id);
        }
      }}
    >
      <ProfileImg />
      <Column alignItems="flex-start" justifyContent="space-evenly">
        <Text fontType="$Button3" width="12rem" textAlign="left" ellipsis>
          {name}
        </Text>
        <Text width="12rem" fontType="$p3" textAlign="left" ellipsis>
          {statusMsg}
        </Text>
        {authority === "USER" ? (
          <EditProfileButton onClick={openUpdateModal}>
            클릭해서 정보를 수정해보세요!
          </EditProfileButton>
        ) : (
          ""
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

const ProfileImg = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 999rem;

  background-color: black;
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
