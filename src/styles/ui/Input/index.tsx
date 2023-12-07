import styled from "styled-components";
import { Color } from "@/styles/theme";
import { Text } from "@/styles/ui";
import { InputAttribute } from "@/types/ui/InputAttribute.type";
import font from "@/styles/theme/font";

const Input = ({
  width = 35,
  height = 5,
  borderRadius = 1,
  placeholder,
  label,
  type = "text",
}: InputAttribute) => {
  return (
    <Container>
      <Text fontType="$p3" color={Color.black}>
        {label}
      </Text>
      <StyledInput
        placeholder={placeholder}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          borderRadius: `${borderRadius}rem`,
        }}
        type={type}
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

  border: none;
  box-shadow: 0px 0px 0px 1px ${Color.gray200};

  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1);

  ${font.$p1}

  &:focus {
    box-shadow: 0px 0px 0px 2px ${Color.primary};
  }
`;
