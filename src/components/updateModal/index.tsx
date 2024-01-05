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
    file: null,
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

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0] || null;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      file: selectedFile,
    }));
  };

  const { mutate: profileUpdateMutate } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      const { name, statusMessage } = userInput;
      formData.append(
        "data",
        new Blob([JSON.stringify({ name, statusMessage })], {
          type: "application/json",
        })
      );

      if (userInput.file) {
        formData.append("file", userInput.file);
      }

      closeMyModal();

      await instance.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access-token") || ""}`,
        },
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["userdata"] });
    },
  });

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const content = reader.result as string;
        resolve(content);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  return (
    <S.Container>
      <Text fontType="$Body1" width="100%" textAlign="center">
        프로필 수정
      </Text>
      <S.Contents>
        <S.Wrapper>
          <S.Image type="file" onChange={handleFileChange} />
          <S.Label htmlFor="file">프로필 이미지</S.Label>
        </S.Wrapper>
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
        <S.Button onClick={() => profileUpdateMutate()}>수정하기</S.Button>
      </S.Contents>
      <div />
    </S.Container>
  );
};

export default UpdateModal;
