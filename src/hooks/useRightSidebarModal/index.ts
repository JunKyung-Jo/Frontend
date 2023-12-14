import { useRecoilState } from "recoil";
import { rightModalStateAtom } from "@/store/modal/rightSidebarModalState";

export const useRightbarSideModal = () => {
  const [rightModalState, setModalState] = useRecoilState(rightModalStateAtom);

  const openModal = () => {
    setModalState({ show: true, animationState: true });
  };

  const closeModal = () => {
    setModalState({ ...rightModalState, animationState: false });
    setTimeout(() => {
      setModalState({ ...rightModalState, show: false });
    }, 175);
  };

  return { openModal, closeModal, rightModalState };
};
