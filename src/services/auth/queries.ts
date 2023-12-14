import { useQuery } from "react-query";
import { getUserdata } from "./api";

export const useUserdataQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["userdata"],
    queryFn: () => getUserdata(),
    retry: false,
  });

  return { data, ...restQuery };
};
