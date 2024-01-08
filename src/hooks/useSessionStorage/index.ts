export const useLocalStorage = () => {
  const getStorageItem = (key: string) => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(key);
    }
    return null;
  };

  const setStorageItem = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
    return;
  };

  const removeStorageItem = (key: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
    return;
  };

  const clearStorageItem = () => {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
    return;
  };

  return {
    getStorageItem,
    setStorageItem,
    removeStorageItem,
    clearStorageItem,
  };
};
