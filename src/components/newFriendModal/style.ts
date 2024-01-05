import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  min-height: 700px;
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

export const ImageInputContent = styled.div`
  width: min-content;
  position: relative;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageInput = styled.input`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  background-color: ${color.black};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  background-color: ${color.black};
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1.25px solid ${color.gray400};
  border-radius: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  transition: 0.15s ease-in-out;

  &:focus {
    border: 1.25px solid ${color.black};
  }
`;

export const botRadioGrid = styled.div`
  min-width: 3rem;
  width: fit-content;
  height: fit-content;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CloseModalBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border-radius: 999px;
  cursor: pointer;

  padding: 0.5rem;
  color: ${color.gray200};
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${color.gray50};
  }

  &:active {
    transition: 0.1s cubic-bezier(0.3, 0.49, 0.5, 1);
    background-color: ${color.gray50};
  }
`;

export const MakeFriendBtn = styled.div`
  width: 140px;
  height: 50px;

  background-color: ${color.primary};
  color: white;
  ${font.$Button4};

  border-radius: 12px;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
