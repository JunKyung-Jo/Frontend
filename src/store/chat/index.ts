import { atom } from "recoil";

export const selectedBotAtom = atom({
  key: "selectedBot",
  default: {
    id: 0,
    authority: "ROLE_ANNOUNCE",
  },
});

export const AIChatlogAtom = atom({
  key: "AIChatlog",
  default: [],
});
