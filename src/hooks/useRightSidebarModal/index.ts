import { useRecoilState } from "recoil";
import { useModalStateAtom } from "@/store/modal/rightSidebarModalState";

export const useRightbarSideModal = () => {
  const [modalState, setModalState] = useRecoilState(useModalStateAtom);

  const openModal = () => {
    setModalState({ show: true, animationState: true });
  };

  const closeModal = () => {
    setModalState({ ...modalState, animationState: false });
    setTimeout(() => {
      setModalState({ ...modalState, show: false });
    }, 175);
  };

  return { openModal, closeModal, modalState };
};
