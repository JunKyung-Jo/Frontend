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
      console.log("총 " + response.data);
      setLike(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const likeHandler = async (feedId: number) => {
    try {
      const token = localStorage.getItem("access-token");
      if (isLike) {
        await axios.delete(
          `http://findfriend.kro.kr/api/like?feedId=${feedId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("삭제");
      } else {
        await axios.post(`http://findfriend.kro.kr/api/like?feedId=${feedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("좋아요");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [get, setGet] = useState<{ content: string; users: string[] }>();
  const [isLike, setLike] = useState<{ isLiked: boolean; count: number }>({
    isLiked: false,
    count: 0,
  });

  return (
    <S.Container>
      {/* 여기 */}
      <S.Image url={url}></S.Image>
      <S.Contents>
        <S.Top>
          <S.Wrapper>
            <S.Profile />
            <S.Name>공지봇</S.Name>
          </S.Wrapper>
          <CloseIcon onClick={closeMyModal} />
        </S.Top>
        {/* 여기 */}
        <S.Description>{get?.content}</S.Description>
        <div>곗수 : {isLike.count}</div>
        <S.Bottom>
          <S.Wrapper>
            <div
              onClick={() => {
                likeHandler(id);
              }}
            >
              {isLike.isLiked ? <LikeIcon /> : <UnLikeIcon />}
            </div>
            {get?.users.map((props) => (
              <S.Tag>#{props}</S.Tag>
            ))}
            <S.Tag>#hello</S.Tag>
            <S.Tag>#hello</S.Tag>
          </S.Wrapper>
        </S.Bottom>
      </S.Contents>
    </S.Container>
  );
};

export default FeedModal;