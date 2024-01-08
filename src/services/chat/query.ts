import { useQuery } from "@tanstack/react-query";
import { getChatlog } from "./api";

export const useGetUserchatQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["userchat"],
    queryFn: () => getChatlog(id),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, ...restQuery };
};
