import { atom } from "recoil";

export const CheckboxAtom = atom({
  key: "checkboxAtom",
  default: ["EXTROVERTED", "REALISTIC", "ORGANIZED", "SENSITIVE"],
});
