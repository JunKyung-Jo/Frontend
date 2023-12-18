import { atom } from "recoil";
import IModalState from "@/types/hooks/ImodalState";

const modalStore = atom<IModalState>({
  key: "modalStore",
  default: {
    component: null,
    visible: false,
  },
});

export default modalStore;
