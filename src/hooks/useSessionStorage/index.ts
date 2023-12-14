export const useSessionStorage = () => {
  const getStorageItem = (key: string) => {
    if (window) {
      return window.sessionStorage.getItem(key);
    }
  };

  const setStorageItem = (key: string, value: any) => {
    if (window) {
      window.sessionStorage.setItem(key, value);
      return;
    }
  };

  const removeStorageItem = (key: string) => {
    if (window) {
      window.sessionStorage.removeItem(key);
    }
  };

  const clearStorageItem = () => {
    if (window) {
      window.sessionStorage.clear();
    }
  };

  return {
    getStorageItem,
    setStorageItem,
    removeStorageItem,
    clearStorageItem,
  };
};
