import { Authorization } from "@/apis/authorization";
import { instance } from "@/apis/instance";
import { useLocalStorage } from "@/hooks/useSessionStorage";

export const userLoginbyAuth = async (code: any, auth: string) => {
  const data = await instance.post(`auth/signup?code=${code}&auth=${auth}`);
  return { data };
};

export const getUserdata = async () => {
  const data = await instance.get("user/get", Authorization());
  return { data };
};

export const refreshAccessToken = async (refreshToken: string) => {
  const data = await instance.put(
    "http://findfriend.kro.kr/api/auth/refresh",
    {},
    {
      headers: {
        "Authorization-refresh": `Bearer ${refreshToken}`,
      },
    }
  );
  return {
    accessToken: data.data.accessToken,
    refreshToken: data.data.refreshToken,
  };
};
