import * as S from "./style";
import React from "react";
import { Column } from "@/styles/ui";
import { ImageIcon } from "@/styles/svg";

const PostModal = () => {
  return (
    <S.Container>
      <S.Header>게시물 업로드</S.Header>
      <Column alignItems="center" justifyContent="space-between">
        <S.BorderBox height={64}>
          <ImageIcon />
          <S.UploadImage>게시물 이미지를 업로드 해주세요.</S.UploadImage>
          <S.Button type="file">컴푸터에서 선택</S.Button>
        </S.BorderBox>
        <div>
          <S.ContentsBox height={20.2}>문구를 입력하세요</S.ContentsBox>
          <S.ContentsBox height={14}>해시태그를 추가하세요</S.ContentsBox>
        </div>
      </Column>
    </S.Container>
  );
};

export default PostModal;
