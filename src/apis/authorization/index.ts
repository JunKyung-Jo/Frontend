import { useSessionStorage } from "@/hooks/useSessionStorage";

export const Authorization = () => {
  const { getStorageItem } = useSessionStorage();

  return {
    headers: {
      Authorization: `Bearer ${getStorageItem("access-token")}`,
    },
  };
};
