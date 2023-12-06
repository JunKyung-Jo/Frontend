import color from "@/styles/theme/color";
import { Button, Column, Row, Text } from "@/styles/ui";
import styled from "styled-components";
import { Color, Font } from "@/styles/theme";
import font from "@/styles/theme/font";
import { Bluebadge } from "@/styles/svg";

const RightSideBar = () => {
  return (
    <SideBarPage>
      <Row>
        <BotProfile />
        <div>
          <Row alignItems="center" gap={0.3} justifyContent="center">
            <BotName>공지봇</BotName>
            <Bluebadge width={3} height={3} />
          </Row>
          <BotInfo>공지사항봇 입니다</BotInfo>
        </div>
      </Row>
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

const BotProfile = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${Color.black};
`;

const BotName = styled.div`
  color: $H4{Color.black};

  ${font.$H4}
`;

const BotInfo = styled.div`
  color: ${Color.black};

  ${font.$Body3}
`;
