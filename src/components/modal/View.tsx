// ModalView 컴포넌트는 모달의 내용과 배경을 렌더링한다.
import IModalState from "@/types/hooks/ImodalState";
import * as S from "./style";

interface ModalViewProps extends IModalState {
  onClose?: () => void;
}

const ModalView = ({ component, visible, onClose }: ModalViewProps) => {
  return (
    <S.ModalContainer>
      {/* 배경을 클릭하면 모달이 닫히도록 설정 */}
      <S.ModalBackground hidden={!visible} onClick={onClose} />
      <S.ModalBox>{component}</S.ModalBox>
    </S.ModalContainer>
  );
};

export default ModalView;
