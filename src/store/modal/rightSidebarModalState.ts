import { atom } from "recoil";

export const useModalStateAtom = atom({
  key: "useModalStateAtom",
  default: {
    show: false,
    animationState: false,
  },
});
