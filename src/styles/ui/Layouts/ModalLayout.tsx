import { useModal } from "@/hooks/useLoginModal";
import { ModalLayoutAttribute } from "@/types/ui/ModalLayoutAttribute.type";
import styled, { keyframes } from "styled-components";

const ModalLayout = ({ children }: ModalLayoutAttribute) => {
  const { modalState } = useModal();

  return (
    <Container modalState={modalState.animationState}>{children}</Container>
  );
};

export default ModalLayout;

const ShowModalAnimation = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const CloseModalAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0
  }
  `;

const Container = styled.div<{ modalState: boolean }>`
  width: 100vw;
  height: 100vh;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  backdrop-filter: blur(0.2rem);
  animation: ${({ modalState }) =>
      modalState ? ShowModalAnimation : CloseModalAnimation}
    0.5s cubic-bezier(0.23, 1, 0.12, 1) forwards;
`;
