import { instance } from "@/apis/instance";
import { useQuery } from "@tanstack/react-query";

const GetList = async (id: number) => {
  const response = await instance.get("/feed/list?friendId=" + (id + 1));
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
