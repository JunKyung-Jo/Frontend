import { useQuery } from "react-query";
import { getDefaultFriend } from "./api";

export const useGetDefaultFriendQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["getDefaultFriend"],
    queryFn: () => getDefaultFriend(),
  });

  return { data, ...restQuery };
};
