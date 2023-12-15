import React from "react";
import { useRecoilState } from "recoil";
import modalStore from "@/store/modal/modal.store";
import IModalState from "@/types/hooks/ImodalState";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalStore);

  const openMyModal = React.useCallback(
    (modalData: IModalState) => {
      setModal({
        ...modalData,
        visible: true,
      });
    },
    [setModal]
  );

  const closeMyModal = React.useCallback(() => {
    setModal({
      component: null,
      visible: false,
    });
  }, [setModal]);

  return {
    openModal: openMyModal,
    closeModal: closeMyModal,
    visible: !!modal.visible,
  };
};

export default useModal;
