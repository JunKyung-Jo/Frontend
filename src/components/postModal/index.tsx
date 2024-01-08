import * as S from "./style";
import React, { useState } from "react";
import { ImageIcon } from "@/styles/svg";
import CloseIcon from "@/styles/mysvg/closeIcon";
import axios from "axios";
import { queryClient } from "../common/provider";

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
    friendId: 1,
    tags: [],
  });

  // 매계변수 id는 friendId
  const submitHandler = async (id: number) => {
    // post하기 위한 form 형식의 데이터로 변환
    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify({ ...data, friendId: id })], {
        type: "application/json",
      })
    );
    formData.append("file", img || "");
    // feed 등록 api post
    try {
      const token = localStorage.getItem("access-token");
      await axios.post(
        "http://findfriend.kro.kr/api/feed",
        formData, // 아까 만들 from 데이터
        {
          headers: {
            // form data type 지정
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("성공");
      // query key값이 바뀔때 다시 api get 요청을 보내 새로고침 없이 개시물을 볼수 있게해주는 코드
      queryClient.invalidateQueries({ queryKey: ["getList", id - 1] });
      closeMyModal(); // 모달창 닫는 함수
    } catch (e) {
      alert("실패");
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
          {/* 등록된 이미지가 없을경우 등록페이지 있을경우 예시이미지 보여주기 */}
          {img === undefined && (
            <>
              <ImageIcon width={10} height={10} />
              {/* 이미지 등록하는 input tag */}
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
            placeholder="해시태그를 추가하세요(#으로 구별)"
            onChange={(e) => {
              const hashtags = e.target.value
                // #으로 tag를 구별하여 배열로 변환하는 코드
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
                // 클릭했을 때 실행되는 function
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
