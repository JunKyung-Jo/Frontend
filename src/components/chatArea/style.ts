import styled, { keyframes } from "styled-components";
import color from "../../styles/theme/color";
import font from "@/styles/theme/font";

export const Send = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${color.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProfileImg = styled.div`
  width: 7rem;
  height: 7rem;

  border-radius: 999rem;

  background-color: black;
`;
export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ChatAiInfoContainer = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ChatAiInfo = styled.div`
  width: 70rem;
  height: 15rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 45px;
  /* box-shadow: 0px 0px 6px ${color.gray200}; */
  border-radius: 20px;
  border: 1px solid ${color.gray100};
`;

export const ChatAiOption = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${color.white};

  position: absolute;
  right: 6px;
  top: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  white-space: nowrap;
  ${font.$p2}
  color: ${color.warn};
  border: 1px solid ${color.gray100};
`;

export const SettingButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  border-radius: 999px;
  cursor: pointer;

  padding: 0.5rem;
  color: ${color.gray200};
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);
`;

export const ChatArea = styled.div`
  width: 100%;
  height: 500px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px 62px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 10%;
  border-top: 1px solid ${color.gray200};
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const Input = styled.input`
  border: 1px solid ${color.gray200};
  border-radius: 10px;
  width: 90%;
  height: 50px;
  padding: 1rem 1rem;
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  ${font.$p1}

  &:focus {
    border: 1px solid ${color.primary};
  }
`;

export const ChatAiName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
`;
