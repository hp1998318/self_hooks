import { useRef, useCallback } from "react";
export const useDebounce = (fn: (args: any) => any, delay: number) => {
  const lastFn = useRef(fn);
  const timeId = useRef<NodeJS.Timeout>(null);
  return useCallback(
    (args: any) => {
      const handleTimeOut = () => {
        lastFn.current(args);
      };
      if (timeId.current) {
        clearTimeout(timeId.current);
      }
      timeId.current = setTimeout(handleTimeOut, delay);
    },
    [delay]
  );
};
