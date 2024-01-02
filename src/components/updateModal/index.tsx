import React, { useState } from "react";
import * as S from "./style";
import { Text } from "@/styles/ui";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "@/store/services";
import { instance } from "@/apis/instance";

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

  const handleUpdate = async () => {
    closeMyModal();
    await instance.put("/user/update", userInput, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token") || ""}`,
      },
    });
  };

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
        <S.Button onClick={handleUpdate}>수정하기</S.Button>
      </S.Contents>
      <div />
    </S.Container>
  );
};

export default UpdateModal;
