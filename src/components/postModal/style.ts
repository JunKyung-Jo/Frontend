import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 20px;
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 70%;
  background-color: ${color.gray200};
  border-radius: 10px;
`;

export const Description = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Tag = styled.div`
  ${font.$Body3};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;
