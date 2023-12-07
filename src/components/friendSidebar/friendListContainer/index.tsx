import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Text, Column } from "@/styles/ui";
import { Color } from "@/styles/theme";
import { FriendListContainerAttribute } from "@/types/components/FriendListContainer.type";
import FriendContainer from "../friendContainer";
import { ArrowIcon } from "@/styles/svg";

const FriendListContainer = ({ listName }: FriendListContainerAttribute) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
      <ListHeader onClick={() => setIsOpen(!isOpen)}>
        <Text fontType="$Button4" color={Color.gray600}>
          {listName}
        </Text>
        <ArrowIcon width={1.2} height={1.2} deg={isOpen ? 0 : 180} />
      </ListHeader>
      {isOpen && (
        <Column>
          <FriendContainer
            name="공지봇"
            statusMsg="이것은 상태 메세지 입니다."
          />
          <FriendContainer
            name="잔잔한 친구"
            statusMsg="이것은 상태 메세지 입니다."
          />
          <FriendContainer
            name="활발한 친구"
            statusMsg="이것은 상태 메세지 입니다."
          />
        </Column>
      )}
    </Container>
  );
};

export default FriendListContainer;

const OpenAnimation = keyframes`
    from {

    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  border-top: 1px solid ${Color.gray200};

  cursor: pointer;
  transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: ${Color.gray100};
  }

  &:active {
    background-color: ${Color.gray50};
  }
`;
