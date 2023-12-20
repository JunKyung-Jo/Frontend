import { useMutation } from "@tanstack/react-query";
import { userLoginbyAuth } from "./api";
import { useLocalStorage } from "@/hooks/useSessionStorage";
import { useRouter } from "next/navigation";

export const useUserLoginMutation = (code: any, auth: string) => {
  const { setStorageItem } = useLocalStorage();
  const router = useRouter();

  const { mutate: userLoginMutate, ...restMutation } = useMutation({
    mutationFn: () => userLoginbyAuth(code, auth),
    onSuccess: (res: any) => {
      setStorageItem("access-token", res.data.data.accessToken);
      setStorageItem("refresh-token", res.data.data.refreshToken);
      router.push("/");
    },
  });

  return { userLoginMutate, ...restMutation };
};
