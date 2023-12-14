import { useMutation } from "react-query";
import { userLoginbyAuth } from "./api";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const useUserLoginMutation = (code: string) => {
  const { setStorageItem } = useLocalStorage();

  const { mutate: userLoginMutate, ...restMutation } = useMutation({
    mutationFn: () => userLoginbyAuth(code),
    onSuccess: (res: any) => {
      setStorageItem("access-token", res.data.accessToken);
      setStorageItem("refresh-token", res.data.refreshToken);
    },
  });

  return { userLoginMutate, ...restMutation };
};
