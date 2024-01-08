import { useQuery } from "@tanstack/react-query";
import { getUserdata } from "./api";

export const useUserdataQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["userdata"],
    queryFn: () => getUserdata(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, ...restQuery };
};
