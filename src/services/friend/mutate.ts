import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFriend, makeMyFriend } from "./api";
import { useRecoilState } from "recoil";
import { selectedBotAtom } from "@/store/chat";

export const useMakeMyFriendMutation = (
  name: string,
  statusMessage: string
) => {
  const { mutate: makeMyFriendMutate, ...restMutation } = useMutation({
    mutationFn: () => makeMyFriend(name, statusMessage),
  });

  return { makeMyFriendMutate, ...restMutation };
};

export const useDeleteFriendMutation = (friendId: number) => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(selectedBotAtom);
  const queryClient = useQueryClient();

  const { mutate: deleteFriendMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteFriend(friendId),
    onSuccess: () => {
      setSelectedFriend({
        ...selectedFriend,
        id: selectedFriend.id <= 1 ? 1 : selectedFriend.id - 1,
      });
      queryClient.invalidateQueries({
        queryKey: ["getMyFriend", "getDefaultFriend"],
      });
    },
  });

  return { deleteFriendMutate, ...restMutation };
};
