import React, { useState } from "react";
import * as S from "./style";
import { Text } from "@/styles/ui";
import { instance } from "@/apis/instance";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../common/provider";

interface Modal {
  closeMyModal(): void;
  name: string;
  statusMsg: string;
}

const UpdateModal = ({ closeMyModal, name, statusMsg }: Modal) => {
  const [userInput, setUserInput] = useState({
    name: name,
    statusMessage: statusMsg,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [field]: e.target.value,
    }));
  };

  const { mutate: profileUpdateMutate } = useMutation({
    mutationFn: async () => {
      closeMyModal();
      await instance.put("/user/update", userInput, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token") || ""}`,
        },
      });
    },
    onSuccess() {
      console.log("데이터를 잘 보냈다");
      queryClient.invalidateQueries({ queryKey: ["userdata"] });
    },
  });

  return (
    <S.Container>
      <Text fontType="$Body1" width="100%" textAlign="center">
        프로필 수정
      </Text>
      <S.Contents>
        <Text fontType="$Body2" width="100%" textAlign="left">
          유저 이름
        </Text>
        <S.Input
          value={userInput.name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        <Text fontType="$Body2" width="100%" textAlign="left">
          상태메세지
        </Text>
        <S.Input
          value={userInput.statusMessage}
          onChange={(e) => handleInputChange(e, "statusMessage")}
        />
        <S.Button onClick={profileUpdateMutate}>수정하기</S.Button>
      </S.Contents>
      <div />
    </S.Container>
  );
};

export default UpdateModal;
