import React, { useEffect } from "react";

export const useClickOutArea = (
  ref: React.RefObject<HTMLDivElement | null>,
  handle: (args: any) => any
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handle(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handle]);
};
