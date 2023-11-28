import { ModalLayoutAttribute } from "@/types/ui/ModalLayoutAttribute.type";
import styled from "styled-components";

const ModalLayout = ({ children }: ModalLayoutAttribute) => {
  return <Container>{children}</Container>;
};

export default ModalLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: brightness(80%);
`;
