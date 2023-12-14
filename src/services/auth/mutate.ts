import { useMutation } from "react-query";
import { userLoginbyAuth } from "./api";
import { useLocalStorage } from "@/hooks/useSessionStorage";

export const useUserLoginMutation = (code: any, auth: string) => {
  const { setStorageItem } = useLocalStorage();

  const { mutate: userLoginMutate, ...restMutation } = useMutation({
    mutationFn: () => userLoginbyAuth(code, auth),
    onSuccess: (res: any) => {
      setStorageItem("access-token", res.data.data.accessToken);
      setStorageItem("refresh-token", res.data.data.refreshToken);
    },
  });

  return { userLoginMutate, ...restMutation };
};
