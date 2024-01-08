import { atom } from "recoil";

export const selectedBotAtom = atom({
  key: "selectedBot",
  default: {
    id: 1,
    authority: "ROLE_ANNOUNCE",
  },
});

export const AIChatlogAtom = atom({
  key: "AIChatlog",
  default: [],
});

export const freeChatAmountAtom = atom({
  key: "freeChatAmountAtom",
  default: 3,
});
