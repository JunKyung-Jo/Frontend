import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Text, Column } from "@/styles/ui";
import { Color } from "@/styles/theme";
import { FriendListContainerAttribute } from "@/types/components/FriendListContainer.type";
import FriendContainer from "../friendContainer";
import { ArrowIcon } from "@/styles/svg";

const FriendListContainer = ({
  listName,
  friendsList,
}: FriendListContainerAttribute) => {
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
        <FriendContainerList>
          {/*서버에서 받아온 친구 배열 반복문 돌려서 하나하나 값 넣어서 렌더링*/}
          {friendsList.map((e: any, i) => {
            return (
              <FriendContainer
                key={`friendContainer${i}`}
                name={e.name}
                statusMsg={e.statusMessage}
                id={e.id}
                authority={e.authority}
                url={e.url}
              />
            );
          })}
        </FriendContainerList>
      )}
    </Container>
  );
};

export default FriendListContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;

  overflow: hidden;
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;
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

const FriendContainerList = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;
