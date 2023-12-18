import { useMutation } from "react-query";
import { userLoginbyAuth } from "./api";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useRouter } from "next/navigation";

export const useUserLoginMutation = (code: any, auth: string) => {
  const { setStorageItem } = useSessionStorage();
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
