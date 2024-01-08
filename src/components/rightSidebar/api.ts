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
    queryKey: ["getList", id], // query key 지정
    queryFn: () => GetList(id), // 실행시킬 함수 지정
  });

  return { data, isLoading, ...restQuery };
};
