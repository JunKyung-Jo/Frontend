import color from "@/styles/theme/color";
import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 700px;
  background-color: ${color.white};
  border-radius: 10px;
  padding: 15px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid ${color.gray100};
  border-radius: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;
