import { Button, Column, Row, Text } from "@/styles/ui";
import styled from "styled-components";
import { Color, Font } from "@/styles/theme";
import { Bluebadge, CrossIcon } from "@/styles/svg";

const RightSideBar = () => {
  return (
    <SideBarPage>
      <RightSidebarHeader>
        <Row justifyContent="end">
          <CrossIcon width={2} height={2} />
        </Row>
        <Row alignItems="center" gap={4.5}>
          <BotProfile />
          <div>
            <Row gap={0.3} alignItems="center">
              <BotName>공지봇</BotName>
              <Bluebadge width={3} height={3} />
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
  position: fixed;
  right: 0px;
  width: 54rem;
  height: 108rem;
  flex-shrink: 0;
  border-left: 1px solid ${Color.gray200};
  background: ${Color.gray50};
`;

const RightSidebarHeader = styled.div`
  width: 100%;
  padding-top: 2.5rem;
  padding-left: 5.8rem;
  padding-right: 2.5rem;
`;

const BotProfile = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${Color.black};
`;

const BotName = styled.div`
  color: ${Color.black};

  ${Font.$H4}
`;

const BotInfo = styled.div`
  color: ${Color.black};

  ${Font.$Body3}
`;

const PostCount = styled.div`
  color: ${Color.black};
  text-align: end;
  margin-top: 10rem;

  ${Font.$Body3}
`;

const PostContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const PostContent = styled.div`
  width: 18rem;
  height: 18rem;
  background: ${Color.black};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${Color.white};
`;
