import { GoogleIcon, KakaoIcon, Logo, NaverIcon } from "@/styles/svg";
import { Color } from "@/styles/theme";
import { Column, Input, Button, Text, Row, ModalLayout } from "@/styles/ui";
import Link from "next/link";
import styled from "styled-components";

const LoginModal = () => {
  return (
    <ModalLayout>
      <Container>
        <Logo width={40} height={6} />
        <Column gap={2}>
          <Input placeholder="이메일을 입력해주세요" label="이메일" />
          <Input
            placeholder="비밀번호를 입력해주세요"
            label="비밀번호"
            type="password"
          />
          <Button content="로그인" onClick={() => {}} />
        </Column>
        <Column gap={1}>
          <Text fontType="$p1" color={Color.gray500}>
            소셜 계정으로 로그인
          </Text>
          <Row gap={1.5}>
            <a href="https://google.com" target="blank_">
              <GoogleIcon />
            </a>
            <a
              href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
              target="blank_"
            >
              <KakaoIcon />
            </a>
            <a href="https://naver.com" target="blank_">
              <NaverIcon />
            </a>
          </Row>
        </Column>
        <Text fontType="$p1">
          파인드 프렌드가 처음이신가요? &ensp;
          <Link href="/signup">
            <Text fontType="$Button3" color={Color.primary}>
              회원가입 하기
            </Text>
          </Link>
        </Text>
      </Container>
    </ModalLayout>
  );
};

export default LoginModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: fit-content;
  height: fit-content;

  background-color: ${Color.white};
  border-radius: 2rem;

  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.03),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  padding: 2.6rem;

  gap: 3.5rem;
`;
