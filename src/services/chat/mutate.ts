import { useMutation } from "react-query";
import { userChat } from "./api";
import { useSetRecoilState } from "recoil";
import { AImessage } from "@/store/services";

export const useUserChatMutation = (text: string) => {
  const setAIMessage = useSetRecoilState(AImessage);

  const { mutate: userChatMutate, ...restMutation } = useMutation({
    mutationFn: () => userChat(text),
    onSuccess: (res: any) => {
      setAIMessage(res.data.data.response);
    },
  });

  return { userChatMutate, ...restMutation };
};
