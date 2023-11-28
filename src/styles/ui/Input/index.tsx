import styled from "styled-components";
import { Color } from "@/styles/theme";
import { Text } from "@/styles/ui";
import { InputAttribute } from "@/types/ui/InputAttribute.type";
import font from "@/styles/theme/font";

const Input = ({
  width = 45,
  height = 6,
  borderRadius = 1,
  placeholder,
  label,
}: InputAttribute) => {
  return (
    <Container>
      <Text fontType="$p2" color={Color.black}>
        {label}
      </Text>
      <StyledInput
        placeholder={placeholder}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          borderRadius: `${borderRadius}rem`,
        }}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 0.4rem;
`;

const StyledInput = styled.input`
  padding: 1.6rem;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Color.gray200};

  ${font.$p1}
`;
