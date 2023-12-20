import { useQuery } from "@tanstack/react-query";
import { getUserdata, refreshAccessToken } from "./api";
import { useLocalStorage } from "@/hooks/useSessionStorage";
import { useRouter } from "next/navigation";

export const useUserdataQuery = () => {
  const router = useRouter();

  const { data, ...restQuery } = useQuery({
    queryKey: ["userdata"],
    queryFn: () => getUserdata(),
    retry: 5,
  });

  return { data, ...restQuery };
};
