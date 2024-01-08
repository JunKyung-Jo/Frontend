import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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

export const freeChatAmountAtom = atom({
  key: "freeChatAmountAtom",
  default: 3,
  effects_UNSTABLE: [persistAtom],
});
