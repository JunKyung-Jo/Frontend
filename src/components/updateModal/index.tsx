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
  const [newUrl, setNewUrl] = useState("");

  // 입력 필드의 값이 변경될 때 호출되는 이벤트 핸들러
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [field]: e.target.value,
    }));
  };

  // 파일 선택 시 호출되는 이벤트 핸들러
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0] || null;
    const newUrl = URL.createObjectURL(selectedFile);
    setNewUrl(newUrl);

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      file: selectedFile,
    }));
  };

  // useMutation을 사용하여 프로필 업데이트 요청을 처리함
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

      // 예시 스키마 API 문서 참고
      await instance.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access-token") || ""}`,
        },
      });
    },
    onSuccess() {
      // 업데이트 성공 시, 해당 사용자 데이터 다시 받아옴.
      queryClient.invalidateQueries({ queryKey: ["userdata"] });
    },
  });

  return (
    <S.Container>
      <Text fontType="$Body1" width="100%" textAlign="center">
        프로필 수정
      </Text>
      <S.Contents>
        <S.Wrapper>
          {/*이미지 입력 받는 태그*/}
          <S.Image
            accept="image/gif, image/jpeg, image/png"
            type="file"
            onChange={handleFileChange}
          />
          <S.Label url={newUrl} htmlFor="file">
            프로필 이미지
          </S.Label>
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
