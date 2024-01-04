import * as S from "./style";
import React from "react";
import { ImageIcon } from "@/styles/svg";
import CloseIcon from "@/styles/mysvg/closeIcon";

interface GenerateModalProps {
  closeMyModal: () => void;
  id: number;
}

const PostModal = ({ closeMyModal, id }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.Rows>
        <div></div>
        <S.Header>게시물 업로드</S.Header>
        <div onClick={closeMyModal}>
          <CloseIcon />
        </div>
      </S.Rows>
      <S.Rows>
        <S.BorderBox height={64}>
          <ImageIcon />
          <S.UploadImage>게시물 이미지를 업로드 해주세요.</S.UploadImage>
          <input
            type="file"
            id="image"
            onChange={(e) => {}}
            style={{ display: "none" }}
          />
          <S.Button htmlFor="image">이미지를 선택해 주세요.</S.Button>
        </S.BorderBox>
        <div>
          <S.ContentsBox
            height={20.2}
            placeholder="문구를 입력하세요"
          ></S.ContentsBox>
          <S.ContentsBox
            height={14}
            placeholder="해시태그를 추가하세요"
          ></S.ContentsBox>
          <S.SubmitBox>
            <S.SubmitButton>등록하기</S.SubmitButton>
          </S.SubmitBox>
        </div>
      </S.Rows>
    </S.Container>
  );
};

export default PostModal;
