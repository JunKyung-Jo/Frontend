import React from "react";
import * as S from "./style";
import { Text } from "@/styles/ui";

interface Modal {
  closeMyModal(): void;
}

const UpdateModal = ({ closeMyModal }: Modal) => {
  return (
    <S.Container>
      <Text fontType="$Body1" width="100%" textAlign="center">
        프로필 수정
      </Text>
      <S.Contents>
        <Text fontType="$Body2" width="100%" textAlign="left">
          유저 이름
        </Text>
        <S.Input />
        <Text fontType="$Body2" width="100%" textAlign="left">
          상태메세지
        </Text>
        <S.Input />
        <S.Button>수정하기</S.Button>
      </S.Contents>
      <div />
    </S.Container>
  );
};

export default UpdateModal;
