import { useMutation } from "@tanstack/react-query";
import { userChat, userFreeChat } from "./api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AImessage } from "@/store/services";
import { selectedBotAtom } from "@/store/chat";

export const useUserChatMutation = (text: string) => {
  const setAIMessage = useSetRecoilState(AImessage);
  const selectedBot = useRecoilValue(selectedBotAtom);

  const { mutate: userChatMutate, ...restMutation } = useMutation({
    mutationFn: () => userChat(text, selectedBot.id + 1),
    onSuccess: (res: any) => {
      setAIMessage(res.data.data.response);
    },
  });

  return { userChatMutate, ...restMutation };
};

export const useUserFreeChatMutation = (text: string) => {
  const selectedBot = useRecoilValue(selectedBotAtom);
  const setAIMessage = useSetRecoilState(AImessage);

  const { mutate: userFreeChatMutate, ...restMutation } = useMutation({
    mutationFn: () => userFreeChat(text, selectedBot.id + 1),
    onSuccess: (res) => {
      setAIMessage(res.data.data.response);
    },
  });

  return { userFreeChatMutate, ...restMutation };
};
