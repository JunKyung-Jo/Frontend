import color from "@/styles/theme/color";
import { Button, Column, Text } from "@/styles/ui";
import styled from "styled-components";
import { Color, Font } from "@/styles/theme";

const RightSideBar = () => {
  return <SideBarPage></SideBarPage>;
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
