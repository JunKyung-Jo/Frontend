import { useQuery } from "react-query";
import { getChatlog } from "./api";

export const useGetUserchatQuery = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["userchat"],
    queryFn: () => getChatlog(id),
  });

  return { data, ...restQuery };
};
