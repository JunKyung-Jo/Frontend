import { Color } from "@/styles/theme";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Row, Text } from "..";

const CheckBox = ({
  labels,
  onChange,
}: {
  labels: [string, string];
  onChange: (label: string) => void;
}) => {
  const [checkedLabel, setCheckedLabel] = useState(labels[0]);

  const handleCheckboxClick = (label: string) => {
    setCheckedLabel(label);
    onChange(label);
  };

  return (
    <Container>
      <Row gap={1} alignItems="center" justifyContent="center">
        <StyledCheckbox
          onClick={() => handleCheckboxClick(labels[0])}
          checked={checkedLabel === labels[0]}
        />
        <Text fontType="$p3">{labels[0]}</Text>
      </Row>
      <Row gap={1} alignItems="center" justifyContent="center">
        <StyledCheckbox
          onClick={() => handleCheckboxClick(labels[1])}
          checked={checkedLabel === labels[1]}
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

const StyledCheckbox = styled.div<{ checked: boolean }>`
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
