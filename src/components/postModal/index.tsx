import useModal from "@/hooks/useModal";
import * as S from "./style";
import CloseIcon from "@/styles/mysvg/closeIcon";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedBotAtom } from "@/store/chat";

interface GenerateModalProps {
  closeMyModal: () => void;
  id: number;
}

const PostModal = ({ closeMyModal, id }: GenerateModalProps) => {
  useEffect(() => {
    GetMeet(id);
    GetLike(id);
  }, []);

  const GetMeet = async (feedId: number) => {
    const token = localStorage.getItem("access-token");
    try {
      const response = await axios.get(
        `http://findfriend.kro.kr/api/feed?feedId=` + (feedId + 1),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
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
      console.log(response.data);
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

  const [get, setGet] = useState([]);
  const [isLike, setLike] = useState<{ isLiked: boolean; count: number }>();

  return (
    <S.Container>
      {/* 여기 */}
      <S.Image imgUrl={"1234"}></S.Image>
      <S.Contents>
        <S.Top>
          <S.Wrapper>
            <S.Profile />
            <S.Name>공지봇</S.Name>
          </S.Wrapper>
          <CloseIcon onClick={closeMyModal} />
        </S.Top>
        {/* 여기 */}
        <S.Description>{get}</S.Description>
        <button
          onClick={() => {
            likeHandler(id);
          }}
        >
          좋아요
        </button>
        <div>곗수 : {isLike?.count ?? 0}</div>
        <S.Bottom>
          <S.Wrapper>
            <S.Tag>#hello</S.Tag>
            <S.Tag>#hello</S.Tag>
            <S.Tag>#hello</S.Tag>
          </S.Wrapper>
        </S.Bottom>
      </S.Contents>
    </S.Container>
  );
};

export default PostModal;
