import { Logo } from "@/styles/svg";
import { Color } from "@/styles/theme";
import { Column, Input, Button, Text, Row } from "@/styles/ui";
import styled from "styled-components";

const LoginModal = () => {
  return (
    <Container>
      <Logo width={27} height={6} />
      <Column gap={2}>
        <Input placeholder="이메일을 입력해주세요" label="이메일" />
        <Input placeholder="비밀번호를 입력해주세요" label="비밀번호" />
        <Button content="로그인" onClick={() => {}} />
      </Column>
      <Column>
        <Text fontType="$p1" color={Color.gray500}>
          소셜 계정으로 로그인
        </Text>
        <Row gap={1}>23fwe</Row>
      </Column>
    </Container>
  );
};

export default LoginModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  height: fit-content;

  padding: 2.6rem;

  gap: 3.5rem;
`;
