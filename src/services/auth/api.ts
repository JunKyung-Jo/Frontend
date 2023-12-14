import { Authorization } from "@/apis/authorization";
import { instance } from "@/apis/instance";

export const userLoginbyAuth = async (code: any, auth: string) => {
  const data = await instance.post(`auth/signup?code=${code}&auth=${auth}`);
  return { data };
};

export const getUserdata = async () => {
  const data = await instance.get("user/get", Authorization());
  return { data };
};
