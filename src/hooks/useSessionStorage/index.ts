export const useLocalStorage = () => {
  const getStorageItem = (key: string) => {
    if (window) {
      return window.localStorage.getItem(key);
    }
    return null;
  };

  const setStorageItem = (key: string, value: any) => {
    if (window) {
      window.localStorage.setItem(key, value);
    }
    return;
  };

  const removeStorageItem = (key: string) => {
    if (window) {
      window.localStorage.removeItem(key);
    }
    return;
  };

  const clearStorageItem = () => {
    if (window) {
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
