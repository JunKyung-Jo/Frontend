import { atom } from "recoil";

export const CheckboxAtom = atom({
  key: "checkboxAtom",
  default: ["1", "12", "123", "1234"],
});
