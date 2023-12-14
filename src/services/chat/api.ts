import { Authorization } from "@/apis/authorization";
import { instance } from "@/apis/instance";

export const getChatlog = async (id: string) => {
  const data = await instance.get(`/chat?id=${id}`);
  return { data };
};

export const userChat = async (text: string) => {
  const data = await instance.post("/chat", { text }, Authorization());
  return { data };
};
