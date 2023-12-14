import { useLocalStorage } from "@/hooks/useLocalStorage";

export const Authorization = () => {
  const { getStorageItem } = useLocalStorage();

  return {
    headers: {
      Authorization: `Bearer ${getStorageItem("access-token")}`,
    },
  };
};
