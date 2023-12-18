export const useSessionStorage = () => {
  const getStorageItem = (key: string) => {
    if (window && window.sessionStorage.getItem(key)) {
      return window.sessionStorage.getItem(key);
    }
    return null;
  };

  const setStorageItem = (key: string, value: any) => {
    if (window) {
      window.sessionStorage.setItem(key, value);
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
