import { useQuery } from "react-query";
import { getUserdata } from "./api";
import { useLocalStorage } from "@/hooks/useSessionStorage";

export const useUserdataQuery = () => {
  const { setStorageItem } = useLocalStorage();

  const { data, isLoading, ...restQuery } = useQuery({
    queryKey: ["userdata"],
    queryFn: () => getUserdata(),
    onSuccess: (res) => {
      setStorageItem("userdata", JSON.stringify(res.data.data));
    },
    retry: false,
  });

  return { ...restQuery };
};
