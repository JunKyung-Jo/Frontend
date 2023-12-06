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
        <Text fontType="$p3">{statusMsg}</Text>
      </Column>
    </Container>
  );
};

export default FriendContainer;

const Container = styled.div`
  display: flex;
  gap: 2rem;

  padding: 2rem 3rem;
`;

const ProfileImg = styled.div`
  width: 5rem;
  height: 5rem;

  border-radius: 999rem;

  background-color: black;
`;
