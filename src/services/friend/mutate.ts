import { useMutation } from "@tanstack/react-query";
import { makeMyFriend } from "./api";

export const useMakeMyFriendMutation = (
  name: string,
  statusMessage: string
) => {
  const { mutate: makeMyFriendMutate, ...restMutation } = useMutation({
    mutationFn: () => makeMyFriend(name, statusMessage),
  });
};
