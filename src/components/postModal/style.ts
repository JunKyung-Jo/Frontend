import styled from "styled-components";
import font from "@/styles/theme/font";
import color from "@/styles/theme/color";

export const Rows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Rows1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 120rem;
  height: 70rem;

  border-radius: 20px;
  background: ${color.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  width: 95%;
  height: 6rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 449px;

  border-bottom: 1px solid ${color.gray200};

  color: var(--Black, #000);

  ${font.$H5}
`;

export const UploadImage = styled.p`
  color: ${color.black};

  margin-top: 1.7rem;
  margin-bottom: 4.4rem;

  ${font.$Body3};
`;

export const Button = styled.label`
  display: inline-flex;
  padding: 13px 37px;
  justify-content: center;
  align-items: center;
  color: ${color.white};

  border-radius: 10px;
  background: var(--primary, #0064ff);

  ${font.$Button2};
`;

export const BorderBox = styled.div<{ height: number }>`
  width: 64rem;
  height: ${(props) => `${props.height}rem`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-right: 1px solid ${color.gray200};
`;

export const ContentsBox = styled.textarea<{ height: number }>`
  display: flex;
  width: 56rem;
  height: ${(props) => `${props.height}rem`};
  padding: 18px;
  align-items: center;
  resize: none;

  border: none;
  border-bottom: 1px solid ${color.gray200};

  &: focus {
    outline: none;
  }
`;

export const SubmitBox = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.div`
  cursor: pointer;

  display: inline-flex;
  padding: 13px 37px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--primary, #0064ff);

  color: var(--White, #fff);

  ${font.$Button2}
`;
