import useModal from "@/hooks/useModal";
import * as S from "./style";
import CloseIcon from "@/styles/mysvg/closeIcon";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedBotAtom } from "@/store/chat";
import { LikeIcon, UnLikeIcon } from "@/styles/svg";

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
    isLiked: false,
    count: 0,
  });

  const GetMeet = async (feedId: number) => {
    const token = localStorage.getItem("access-token");
    try {
      const response = await axios.get(
        `http://findfriend.kro.kr/api/feed?feedId=` + feedId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Get Meet" + response.data);
      setGet(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const GetLike = async (feedId: number) => {
    const token = localStorage.getItem("access-token");
    try {
      const response = await axios.get(
        `http://findfriend.kro.kr/api/like?feedId=${feedId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("api" + JSON.stringify(response.data));
      setLike(response.data);
      // setStateLike(response.data.isLike);
    } catch (e) {
      console.error(e);
    }
  };

  const likeHandler = (feedid: number) => {
    if (isLike.isLiked === true) {
      DeleteLike(feedid);
    } else if (isLike.isLiked === false) {
      PostLike(feedid);
    } else {
      alert("좋아요 error");
    }
  };

  const DeleteLike = async (id: number) => {
    try {
      const token = localStorage.getItem("access-token");
      await axios.delete(`http://findfriend.kro.kr/api/like?feedId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("싫어요");
      GetLike(id);
    } catch (e) {
      console.error(e);
    }
  };

  const PostLike = async (id: number) => {
    try {
      const token = localStorage.getItem("access-token");
      await axios.post(`http://findfriend.kro.kr/api/like?feedId=${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("좋아요");
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
              onClick={() => {
                likeHandler(id);
              }}
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              {isLike.isLiked ? <LikeIcon /> : <UnLikeIcon />}
              <div>{isLike.count}</div>
            </div>
            {get?.tags.map((props) => (
              <S.Tag>{props}</S.Tag>
            ))}
          </S.Wrapper>
        </S.Bottom>
      </S.Contents>
    </S.Container>
  );
};

export default FeedModal;
