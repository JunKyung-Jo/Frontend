import color from "@/styles/theme/color";
import { Button, Column, Text } from "@/styles/ui";
import styled from "styled-components";
import { Color, Font } from "@/styles/theme";

const Sidebar = () => {
  return (
    <SideBarBox>
      <Column>
        <Button
          width={10}
          height={4}
          border={`1px solid ${Color.gray400}`}
          backgroundColor={`${Color.white}`}
          color={`${Color.gray400}`}
          content="내 프로필"
          borderRadius={1}
          onClick={() => {}}
        />
      </Column>
      <div>
        <ColumnType>이름</ColumnType>
        <ColumnInfo>설명</ColumnInfo>
      </div>
    </SideBarBox>
  );
};

export default Sidebar;

const SideBarBox = styled.div`
  width: 40rem;
  height: 100vh;
  border: 1px solid ${Color.gray200};
  background: ${Color.gray50};
`;

const ColumnType = styled.div``;

const ColumnInfo = styled.div``;
