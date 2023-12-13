import { useLoginModal } from "@/hooks/useLoginModal";
import {
  GoogleIcon,
  KakaoIcon,
  Logo,
  NaverIcon,
  CrossIcon,
} from "@/styles/svg";
import { Color } from "@/styles/theme";
import { Column, Input, Button, Text, Row, ModalLayout } from "@/styles/ui";
import Link from "next/link";
import styled from "styled-components";

const LoginModalForm = () => {
  const { closeModal } = useLoginModal();

  return (
    <ModalLayout>
      <Container>
        <CloseModalBtn onClick={closeModal}>
          <CrossIcon width={2} height={2} />
        </CloseModalBtn>
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
          <Text fontType="$p2" color={Color.gray500}>
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
        <Text fontType="$p2">
          파인드 프렌드가 처음이신가요? &ensp;
          <Link href="/signup">
            <Text fontType="$Button4" color={Color.primary}>
              회원가입 하기
            </Text>
          </Link>
        </Text>
      </Container>
    </ModalLayout>
  );
};

export default LoginModalForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;

  width: fit-content;
  height: fit-content;

  background-color: ${Color.white};
  border-radius: 2rem;

  box-shadow: 0px 0px 10px ${Color.gray200};

  padding: 2.6rem;

  gap: 3.5rem;
`;

const CloseModalBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border-radius: 999px;
  cursor: pointer;

  padding: 0.5rem;
  color: ${Color.gray200};
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${Color.gray50};
  }

  &:active {
    transition: 0.1s cubic-bezier(0.3, 0.49, 0.5, 1);
    background-color: ${Color.gray50};
  }
`;
