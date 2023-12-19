import useModal from "@/hooks/useModal";
import { useRecoilState } from "recoil";
import modalStore from "@/store/modal/modal.store";
import ModalView from "./View";

const Modal = () => {
  const [modal] = useRecoilState(modalStore);
  const { closeMyModal } = useModal();

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.();
        if (!modal.menualClose) {
          closeMyModal();
        }
      }}
    />
  );
};

export default Modal;
