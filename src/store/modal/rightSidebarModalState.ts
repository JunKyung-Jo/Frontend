import { atom } from "recoil";

export const rightModalStateAtom = atom({
  key: "rightModalStateAtom",
  default: {
    show: false,
    animationState: false,
  },
});
