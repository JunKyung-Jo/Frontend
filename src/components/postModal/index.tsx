import * as S from "./style";
import React, { useState } from "react";
import { ImageIcon } from "@/styles/svg";
import CloseIcon from "@/styles/mysvg/closeIcon";
import axios from "axios";

interface GenerateModalProps {
  closeMyModal: () => void;
  id: number;
}

const PostModal = ({ closeMyModal, id }: GenerateModalProps) => {
  const [img, setImg] = useState<File | null>();
  const [data, setData] = useState<{
    content: string;
    friendId: number;
    tags: string[];
  }>({
    content: "",
    friendId: 0,
    tags: [],
  });

  const submitHandler = async (id: number) => {
    // const formData = new FormData();
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", img || "");
    formData.append("friendId", (id + 1 || 0).toString());
    console.log(data);
    // formData.append('이미데이터 칼럼이름', e.target.files[0])
    // formData.append('내용 칼럼이름', JSON.stringify(여기에 뭐내용적고)
    try {
      const token = localStorage.getItem("access-token");
      await axios.post("http://findfriend.kro.kr/api/feed", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.error(e);
    }
    //instance.post("주소", formData, {"Content-Type": ""...Auth()})
  };

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
        <S.BorderBox height={64} i={img}>
          {img === undefined && (
            <>
              <ImageIcon width={10} height={10} />
              <S.UploadImage>게시물 이미지를 업로드 해주세요.</S.UploadImage>
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  setImg(e.target.files ? e.target.files[0] : null);
                }}
                //e.target.files[0] -> 유즈스테이트에 담아라
                style={{
                  display: "none",
                }}
              />
              <S.Button htmlFor="image">이미지를 선택해 주세요.</S.Button>
            </>
          )}
        </S.BorderBox>
        <div>
          <S.ContentsBox
            height={20.2}
            placeholder="문구를 입력하세요"
            onChange={(e) => {
              setData((prev) => ({ ...prev, content: e.target.value }));
            }}
          ></S.ContentsBox>
          <S.ContentsBox
            height={14}
            placeholder="해시태그를 추가하세요(# 필수)"
            onChange={(e) => {
              const hashtags = e.target.value
                .split("#")
                .filter((tag) => tag !== "")
                .map((tag) => `#${tag.trim()}`);
              setData(
                (prev: {
                  content: string;
                  friendId: number;
                  tags: string[];
                }) => ({ ...prev, tags: hashtags })
              );
            }}
          ></S.ContentsBox>
          <S.SubmitBox>
            <S.SubmitButton
              onClick={() => {
                submitHandler(id);
              }}
            >
              등록하기
            </S.SubmitButton>
          </S.SubmitBox>
        </div>
      </S.Rows>
    </S.Container>
  );
};

export default PostModal;
