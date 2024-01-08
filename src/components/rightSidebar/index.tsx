import { Row, Text } from "@/styles/ui";
import styled, { keyframes } from "styled-components";
import { Color, Font } from "@/styles/theme";
import { Purplebadge, CrossIcon } from "@/styles/svg";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";
import { useRecoilValue } from "recoil";
import { selectedBotAtom } from "@/store/chat";
import useModal from "@/hooks/useModal";
import FeedModal from "../feedModal";
import { useEffect, useLayoutEffect, useState } from "react";
import { useGetListQuery } from "./api";

interface QueryResult {
  data: any;
  isLoading: boolean;
}

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
  //feed list 받아온 값을 저장하는 state
  const [feed, setFeed] = useState([]);
  // query key를 지정하여 새로고침 없이 실행시킬 react query
  const { data, isLoading } = useGetListQuery(selectedFriend.id) as QueryResult;

  useEffect(() => {
    // 받아오는 시간동안은 true로 끝나면 false로 반환하는 isLoading 변수
    if (!isLoading) {
      setFeed(data); // 전체 feed
    }
  }, [data]); // data값이 변경되면 실행된다

  return (
    <SideBarPage rightModalState={rightModalState.animationState}>
      <RightSidebarHeader>
        <div style={{ cursor: "pointer" }} onClick={closeModal}>
          <Row justifyContent="end">
            <CrossIcon width={2} height={2} />
          </Row>
        </div>
        <Row alignItems="center" gap={3}>
          {/* myFriendData를 활용하여 등록 */}
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
                {/* myFriendData에 있는 데이터를 활용하여 권한 처리 */}
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
        {/* feed 전체 갯수를 길이로 나타낸다(?널 허용한다는 뜻) */}
        <PostCount>게시물 {feed?.length}개</PostCount>
      </RightSidebarHeader>
      <PostContainer>
        {
          // feed 최신순으로 정렬
          feed
            ?.slice(0)
            .reverse()
            // feed id 를 넘겨주는 props
            .map((props: { id: number; url: string }) => (
              <PostContent
                key={props.id}
                onClick={() => {
                  // feed 모달 띄우는 function
                  openPost(props.id, props.url);
                }}
                // 이미지 background(배경)처리
                img={props.url}
              />
            ))
        }
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

  overflow-y: scroll;
`;

const PostContent = styled.div<{ img: string }>`
  width: 13rem;
  height: 13rem;
  background: ${(props) => (props.img === "" ? Color.black : Color.white)};
  )display: inline-flex;
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
