import * as S from "./style";
import CloseIcon from "@/styles/mysvg/closeIcon";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LikeIcon, UnLikeIcon } from "@/styles/svg";
import { instance } from "@/apis/instance";

interface GenerateModalProps {
  closeMyModal: () => void;
  id: number;
  url: string;
}

const FeedModal = ({ closeMyModal, id, url }: GenerateModalProps) => {
  useEffect(() => {
    GetMeet(id);
    GetLike(id);
  }, []);

  const [get, setGet] = useState<{
    name: string;
    content: string;
    tags: string[];
    url: string;
  }>();
  const [isLike, setLike] = useState<{ isLiked: boolean; count: number }>({
    isLiked: false, //자신이 좋아요했으면 true
    count: 0, //게시물 전체 좋아요 갯수
  });

  const GetMeet = async (feedId: number) => {
    const token = localStorage.getItem("access-token"); // 로컬의 토큰 가져오기
    try {
      const response = await instance.get(
        `/feed?feedId=` + feedId, // api get 요청
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGet(response.data); // 요청받은 response 를 state에 저장
    } catch (error) {
      console.error(error);
    }
  };

  // 좋아요 가져오기
  const GetLike = async (feedId: number) => {
    const token = localStorage.getItem("access-token");
    try {
      // instance 안에 잇는 base url 통해서 도메인 지정후 요청
      const response = await instance.get(`/like?feedId=${feedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("api" + JSON.stringify(response.data));
      setLike(response.data);
      // setStateLike(response.data.isLike);
    } catch (e) {
      console.error(e);
    }
  };

  // 자신의 좋아요 상태에 따라 post와 delete 조건처리
  const likeHandler = (feedid: number) => {
    if (isLike.isLiked === true) {
      DeleteLike(feedid);
    } else if (isLike.isLiked === false) {
      PostLike(feedid);
    } else {
      alert("좋아요 error");
    }
  };

  // 좋아요 삭제
  const DeleteLike = async (id: number) => {
    try {
      const token = localStorage.getItem("access-token");
      await instance.delete(`/like?feedId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      GetLike(id);
    } catch (e) {
      console.error(e);
    }
  };

  // 좋아요 post
  const PostLike = async (id: number) => {
    try {
      const token = localStorage.getItem("access-token");
      await instance.post(`/like?feedId=${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      GetLike(id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.Container>
      {/* 여기 */}
      <S.Image url={url}></S.Image>
      <S.Contents>
        <S.Top>
          <S.Wrapper>
            <S.Profile i={get?.url ?? ""} />
            <S.Name>{get?.name}</S.Name>
          </S.Wrapper>
          <CloseIcon onClick={closeMyModal} />
        </S.Top>
        {/* 여기 */}
        <S.Description>{get?.content}</S.Description>
        <S.Bottom>
          <S.Wrapper>
            <div
              // 클릭시 likeHandler function으로 이동
              onClick={() => {
                likeHandler(id);
              }}
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              {isLike.isLiked ? (
                <LikeIcon width={2} height={2} />
              ) : (
                <UnLikeIcon width={2} height={2} />
              )}
              <S.LikeFont>{isLike.count}</S.LikeFont>
            </div>
            {/* #으로 구별된 태그 전부 가져오기 */}
            {get?.tags.map((props, i) => (
              <S.Tag key={i}>{props}</S.Tag>
            ))}
          </S.Wrapper>
        </S.Bottom>
      </S.Contents>
    </S.Container>
  );
};

export default FeedModal;
