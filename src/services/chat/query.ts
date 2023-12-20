import { useQuery } from "@tanstack/react-query";
import { getChatlog } from "./api";
import { useSetRecoilState } from "recoil";
import { AIChatlogAtom } from "@/store/chat";

export const useGetUserchatQuery = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["userchat"],
    queryFn: () => getChatlog(id),
  });

  return { data, ...restQuery };
};
