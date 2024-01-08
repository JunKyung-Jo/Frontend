import React from "react";
import { useRecoilState } from "recoil";
import modalStore from "@/store/modal/modal.store";
import IModalState from "@/types/hooks/ImodalState";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalStore);

  // 모달을 열기 위한 함수
  const openMyModal = React.useCallback(
    (modalData: IModalState) => {
      setModal({
        ...modalData,
        visible: true,
      });
    },
    [setModal]
  );

  // 모달을 닫기 위한 함수
  const closeMyModal = React.useCallback(() => {
    setModal({
      component: null,
      visible: false,
    });
  }, [setModal]);

  // 모달의 현재 상태 (열림 또는 닫힘) 반환
  return { openMyModal, closeMyModal, visible: !!modal.visible };
};

export default useModal;
