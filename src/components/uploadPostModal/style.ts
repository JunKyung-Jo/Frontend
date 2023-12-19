import color from "@/styles/theme/color";
import font from "@/styles/theme/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 500px;
  border-radius: 10px;
  background-color: ${color.white};
`;

export const ModalTop = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid ${color.gray200};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.h1`
  ${font.$H5};
`;

export const UploadImageArea = styled.div`
  width: 50%;
  height: 90%;
  border-right: 1px solid ${color.gray200};
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Description = styled.h1`
  ${font.$Body3};
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: ${color.primary};
  ${font.$Button2};
  border: none;
  color: ${color.white};
`;

export const InputArea = styled.div`
  width: 50%;
  height: 90%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50%;
  border: none;
  border-bottom: 1px solid ${color.gray200};
`;
