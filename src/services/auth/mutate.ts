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
    onError: () => {
      alert("인증 중 문제가 발생했습니다.");
      router.push("/");
    },
  });

  return { userLoginMutate, ...restMutation };
};
