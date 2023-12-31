import { useQuery } from "@tanstack/react-query";
import { getDefaultFriend, getMyFriend } from "./api";
import { useEffect } from "react";

export const useGetDefaultFriendQuery = () => {
  const { data, isLoading, ...restQuery } = useQuery({
    queryKey: ["getDefaultFriend"],
    queryFn: () => getDefaultFriend(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    defaultFriendData: data,
    isDefaultFriendLoading: isLoading,
    ...restQuery,
  };
};

export const useGetMyFriendQuery = () => {
  const { data, isLoading, ...restQuery } = useQuery({
    queryKey: ["getMyFriend"],
    queryFn: () => getMyFriend(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { myFriendData: data, isMyFriendLoading: isLoading, ...restQuery };
};
