import { Authorization } from "@/apis/authorization";
import { instance } from "@/apis/instance";

export const getChatlog = async (id: number) => {
  const data = await instance.get(`/chat?id=${id}`, Authorization());
  return { data };
};

export const userChat = async (text: string, id: number) => {
  console.log(text, "fewfe");

  const data = await instance.post(
    "/chat",
    { text: text, friendId: id },
    Authorization()
  );
  return { data };
};
