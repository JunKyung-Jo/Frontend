import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Color } from "@/styles/theme";
import { Row, Text } from "..";
import { useRecoilState } from "recoil";
import { CheckboxAtom } from "@/store/checkBox";

interface CheckBoxProps {
  labels: string[];
  index: number;
}

const CheckBox = ({ labels, index }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(true);
  const [checkboxData, setCheckboxData] = useRecoilState(CheckboxAtom);
  return (
    <Container>
      <Row gap={1} alignItems="center" justifyContent="center">
        <Checkbox
          onClick={() => {
            setIsChecked(!isChecked);
            let checkboxArray = [...checkboxData];
            checkboxArray.splice(index, 1, labels[0]);
            setCheckboxData(checkboxArray);
          }}
          checked={isChecked}
        />
        <Text fontType="$p3">{labels[0]}</Text>
      </Row>
      <Row gap={1} alignItems="center" justifyContent="center">
        <Checkbox
          onClick={() => {
            setIsChecked(!isChecked);
            let checkboxArray = [...checkboxData];
            checkboxArray.splice(index, 1, labels[0]);
            setCheckboxData(checkboxArray);
          }}
          checked={!isChecked}
        />
        <Text fontType="$p3">{labels[1]}</Text>
      </Row>
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Checkbox = styled.div<{ checked: boolean }>`
  width: 1.75rem;
  height: 1.75rem;

  border: 1px solid black;
  border-radius: 0.25rem;

  cursor: pointer;

  ${({ checked }) =>
    checked
      ? css`
          background-color: ${Color.primary};
        `
      : css`
          background-color: white;
        `}
`;
