import { Button, Column, Row, Text } from "@/styles/ui";
import styled, { keyframes } from "styled-components";
import { Color, Font } from "@/styles/theme";
import { Purplebadge, CrossIcon } from "@/styles/svg";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import { useRecoilValue } from "recoil";
import { selectedBotAtom } from "@/store/chat";
import useModal from "@/hooks/useModal";
import FeedModal from "../feedModal";
import axios from "axios";
import { useLayoutEffect, useState } from "react";

const RightSideBar = ({
  userData,
  defaultFriendData,
  myFriendData,
}: {
  userData: any;
  defaultFriendData: any;
  myFriendData: any;
}) => {
  const { closeModal, rightModalState } = useRightbarSideModal();
  const selectedFriend = useRecoilValue(selectedBotAtom);

  const { openMyModal, closeMyModal } = useModal();

  const openPost = (id: number, url: string) => {
    openMyModal({
      component: <FeedModal closeMyModal={closeMyModal} id={id} url={url} />,
    });
  };

  const [feed, setFeed] = useState([]);

  const GetList = async (id: number) => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.get(
        "http://findfriend.kro.kr/api/feed/list?friendId=" + (id + 1),
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("데이터" + response.data);
      setFeed(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useLayoutEffect(() => {
    GetList(selectedFriend.id);
  }, []);

  return (
    <SideBarPage rightModalState={rightModalState.animationState}>
      <RightSidebarHeader>
        <div style={{ cursor: "pointer" }} onClick={closeModal}>
          <Row justifyContent="end">
            <CrossIcon width={2} height={2} />
          </Row>
        </div>
        <Row alignItems="center" gap={3}>
          <BotProfile
            src={
              myFriendData
                ? myFriendData.data.data.find(
                    (e: any) => e.id === selectedFriend.id + 1
                  )?.url
                : defaultFriendData?.data.data.find(
                    (e: any) => e.id === selectedFriend.id + 1
                  )?.url
            }
          />
          <div>
            <Row gap={0.3} alignItems="center">
              <Text fontType="$H5" width={"20rem"} textAlign="left" ellipsis>
                {myFriendData
                  ? myFriendData.data.data.find(
                      (e: any) => e.id === selectedFriend.id + 1
                    )?.name
                  : defaultFriendData?.data.data.find(
                      (e: any) => e.id === selectedFriend.id + 1
                    )?.name}
                {myFriendData?.data.data[selectedFriend.id]?.authority ===
                  "ROLE_ANNOUNCE" && <Purplebadge width={3} height={3} />}
              </Text>
            </Row>
            <Text fontType="$p1" width={"20rem"} textAlign="left" ellipsis>
              {myFriendData
                ? myFriendData.data.data.find(
                    (e: any) => e.id === selectedFriend.id + 1
                  )?.statusMessage
                : defaultFriendData?.data.data.find(
                    (e: any) => e.id === selectedFriend.id + 1
                  )?.statusMessage}
            </Text>
          </div>
        </Row>
        <PostCount>게시물 {feed.length}개</PostCount>
      </RightSidebarHeader>
      <PostContainer>
        {feed.map((props: { id: number; url: string }) => (
          <PostContent
            key={props.id}
            onClick={() => {
              openPost(props.id, props.url);
            }}
            img={props.url}
          />
        ))}
      </PostContainer>
    </SideBarPage>
  );
};

export default RightSideBar;

const ShowSidebarAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const CloseSidebarAnimation = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`;

const SideBarPage = styled.div<{ rightModalState: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42rem;
  height: 100vh;
  /* box-shadow: -1px 0px 0px ${Color.gray200}; */
  background-color: ${Color.gray25};
  z-index: 2;

  animation: ${({ rightModalState }) =>
      rightModalState ? ShowSidebarAnimation : CloseSidebarAnimation}
    0.65s cubic-bezier(0.23, 1, 0.12, 1) forwards;
`;

const RightSidebarHeader = styled.div`
  width: 100%;
  padding-top: 2.5rem;
  padding-left: 5.8rem;
  padding-right: 2.5rem;
`;

const BotProfile = styled.img`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  border-radius: 50%;
`;

const PostCount = styled.div`
  color: ${Color.black};
  text-align: end;
  margin-top: 8rem;

  ${Font.$p1}
`;

const PostContainer = styled.div`
  width: 39rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
`;

const PostContent = styled.div<{ img: string }>`
  width: 13rem;
  height: 13rem;
  background: ${Color.black};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${Color.white};
  border-radius: 3px;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
