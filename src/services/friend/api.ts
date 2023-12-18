import { Authorization } from "@/apis/authorization";
import { instance } from "@/apis/instance";

export const getDefaultFriend = async () => {
  const data = await instance.get("/friend");
  return { data };
};

export const makeMyFriend = async (name: string, statusMessage: string) => {
  const data = await instance.post(
    "/friend/meet",
    { name, statusMessage },
    Authorization()
  );

  return { data };
};
