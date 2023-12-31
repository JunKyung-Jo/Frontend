import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: fit-content;
  height: 600px;
  border-radius: 10px;
  background-color: white;
  display: flex;
`;

export const FeedImage = styled.div<{ url: string }>`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  width: 700px;
  height: 600px;

  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Contents = styled.div`
  width: 35rem;
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

export const Profile = styled(Image)`
  border-radius: 999rem;
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

export const LikeFont = styled.p`
  ${font.$p3};

  margin-left: 0.4rem;
`;
