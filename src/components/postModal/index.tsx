import * as S from "./style";
import React from "react";
import { ImageIcon } from "@/styles/svg";
import CloseIcon from "@/styles/mysvg/closeIcon";

//e.target.files[0] -> 유즈스테이트에 담아라
// const formData = new FormData();
// formData.append('이미데이터 칼럼이름', e.target.files[0])
// formData.append('내용 칼럼이름', JSON.stringify(여기에 뭐내용적고)
//instance.post("주소", formData, {"Content-Type": ""...Auth()})

interface GenerateModalProps {
  closeMyModal: () => void;
  id: number;
}

const PostModal = ({ closeMyModal, id }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.Rows1>
        <div></div>
        <S.Header>게시물 업로드</S.Header>
        <div onClick={closeMyModal}>
          <CloseIcon />
        </div>
      </S.Rows1>
      <S.Rows>
        <S.BorderBox height={64}>
          <ImageIcon width={10} height={10} />
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
