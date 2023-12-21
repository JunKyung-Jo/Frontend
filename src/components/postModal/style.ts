import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  display: flex;
`;

export const Image = styled.div<{ imgUrl: string }>`
  width: 60%;
  height: 100%;
  background: ${color.gray900};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Contents = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Top = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${color.gray200};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${color.gray800};
  border-radius: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.h1`
  ${font.$p1};
`;

export const Description = styled.div`
  ${font.$p1};
`;

export const Bottom = styled.div`
  margin-top: 60%;
  width: 100%;
  height: 30%;
  border-top: 1px solid ${color.gray200};
`;

export const Tag = styled.div`
  ${font.$p1}
  cursor: pointer;
`;
