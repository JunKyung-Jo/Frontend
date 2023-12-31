import { Authorization } from "@/apis/authorization";
import { instance } from "@/apis/instance";

export const getChatlog = async (id: number) => {
  const data = await instance.get(`/chat?id=${id}`, Authorization());
  return { data };
};

export const userChat = async (text: string, id: number) => {
  const data = await instance.post(
    "/chat",
    { text: text, friendId: id },
    Authorization()
  );
  return { data };
};

export const userFreeChat = async (text: string, id: number) => {
  const data = await instance.post("/chat/free", { text: text, friendId: id });
  return { data };
};
