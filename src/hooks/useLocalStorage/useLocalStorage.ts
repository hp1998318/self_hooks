import { useCallback, useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log("set Store err", err);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: string | number | Function) => {
      try {
        const valueToStore = value instanceof Function ? value() : value;
        setStoreValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.log("set Store err", err);
      }
    },
    [key, storeValue]
  );
  return [storeValue, setValue];
};
