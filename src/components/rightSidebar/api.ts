import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GetList = async (id: number) => {
  const response = await axios.get(
    "http://findfriend.kro.kr/api/feed/list?friendId=" + (id + 1)
  );
  console.log("데이터" + response.data);
  return response.data;
};

export const useGetListQuery = (id: number) => {
  const { data, isLoading, ...restQuery } = useQuery<void, Error, void>({
    queryKey: ["getList", id],
    queryFn: () => GetList(id),
  });

  return { data, isLoading, ...restQuery };
};
