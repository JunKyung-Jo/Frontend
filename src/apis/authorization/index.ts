import { useLocalStorage } from "@/hooks/useSessionStorage";

export const Authorization = () => {
  const { getStorageItem } = useLocalStorage();

  return {
    headers: {
      Authorization: `Bearer ${getStorageItem("access-token")}`,
    },
  };
};
