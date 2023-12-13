import { Button, Column, Row, Text } from "@/styles/ui";
import styled from "styled-components";
import { Color, Font } from "@/styles/theme";
import { Purplebadge, CrossIcon } from "@/styles/svg";
import { useRightbarSideModal } from "@/hooks/useRightSidebarModal";

const RightSideBar = () => {
  const { closeModal } = useRightbarSideModal();
  return (
    <SideBarPage>
      <RightSidebarHeader>
        <div style={{ cursor: "pointer" }} onClick={closeModal}>
          <Row justifyContent="end">
            <CrossIcon width={2} height={2} />
          </Row>
        </div>
        <Row alignItems="center" gap={3}>
          <BotProfile />
          <div>
            <Row gap={0.3} alignItems="center">
              <BotName>공지봇</BotName>
              <Purplebadge width={3} height={3} />
            </Row>
            <BotInfo>이것은 상태 메세지입니다.</BotInfo>
          </div>
        </Row>
        <PostCount>게시물 NN</PostCount>
      </RightSidebarHeader>
      <PostContainer>
        <PostContent>this is a pen</PostContent>
        <PostContent></PostContent>
        <PostContent></PostContent>
        <PostContent></PostContent>
      </PostContainer>
    </SideBarPage>
  );
};

export default RightSideBar;

const SideBarPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42rem;
  height: 100vh;
  /* box-shadow: -1px 0px 0px ${Color.gray200}; */
  background-color: ${Color.gray25};
  z-index: 2;
`;

const RightSidebarHeader = styled.div`
  width: 100%;
  padding-top: 2.5rem;
  padding-left: 5.8rem;
  padding-right: 2.5rem;
`;

const BotProfile = styled.div`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${Color.black};
`;

const BotName = styled.div`
  color: ${Color.black};

  ${Font.$H5}
`;

const BotInfo = styled.div`
  color: ${Color.black};

  ${Font.$p1}
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

const PostContent = styled.div`
  width: 13rem;
  height: 13rem;
  background: ${Color.black};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${Color.white};
  border-radius: 3px;
`;
