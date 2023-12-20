import { useLocalStorage } from "@/hooks/useSessionStorage";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://findfriend.kro.kr/api",
});

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    const { getStorageItem, setStorageItem } = useLocalStorage();

    try {
      axios
        .put(
          "http://findfriend.kro.kr/api/auth/refresh",
          {},
          {
            headers: {
              "Authorization-refresh": `Bearer ${getStorageItem(
                "refresh-token"
              )}`,
            },
          }
        )
        .then(({ data }) => {
          setStorageItem("access-token", data.accessToken);
          setStorageItem("refresh-token", data.refreshToken);
        });
    } catch (e) {}

    return Promise.reject(error);
  }
);
