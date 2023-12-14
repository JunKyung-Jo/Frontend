import { useMutation } from "react-query";
import { userLoginbyAuth } from "./api";
import { useSessionStorage } from "@/hooks/useSessionStorage";

export const useUserLoginMutation = (code: any, auth: string) => {
  const { setStorageItem } = useSessionStorage();

  const { mutate: userLoginMutate, ...restMutation } = useMutation({
    mutationFn: () => userLoginbyAuth(code, auth),
    onSuccess: (res: any) => {
      setStorageItem("access-token", res.data.accessToken);
      setStorageItem("refresh-token", res.data.refreshToken);
    },
  });

  return { userLoginMutate, ...restMutation };
};
