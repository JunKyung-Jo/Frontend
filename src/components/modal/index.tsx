// Modal 컴포넌트는 useModal 훅을 사용하여 모달 상태를 제어하고, 모달을 렌더링하는 역할이다.
import useModal from "@/hooks/useModal";
import { useRecoilState } from "recoil";
import modalStore from "@/store/modal/modal.store";
import ModalView from "./View";

const Modal = () => {
  const [modal] = useRecoilState(modalStore);
  const { closeMyModal } = useModal();

  // 모달을 닫거나 사용자 지정 onClose 이벤트를 처리하는 함수
  const handleModalClose = () => {
    modal.onClose?.();
    if (!modal.menualClose) {
      closeMyModal();
    }
  };

  return <ModalView {...modal} onClose={handleModalClose} />;
};

export default Modal;
