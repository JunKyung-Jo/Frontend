import { Color } from "@/styles/theme";
import { Column, Text } from "@/styles/ui";
import { FriendContainerAttribute } from "@/types/components/FriendContainerAttribute.type";
import React from "react";
import styled from "styled-components";

const FriendContainer = ({ name, statusMsg }: FriendContainerAttribute) => {
  return (
    <Container>
      <ProfileImg />
      <Column alignItems="flex-start" justifyContent="space-evenly">
        <Text fontType="$Button3">{name}</Text>
        <Text width="120px" fontType="$p3" textAlign="left" ellipsis>
          {statusMsg}
        </Text>
      </Column>
    </Container>
  );
};

export default FriendContainer;

const Container = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;

  padding: 1.5rem 7rem 1.5rem 2rem;
  transition: 0.15s cubic-bezier(0.3, 0.49, 0.5, 1);
  cursor: pointer;

  &:hover {
    background-color: ${Color.gray100};
  }
`;

const ProfileImg = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 999rem;

  background-color: black;
`;
