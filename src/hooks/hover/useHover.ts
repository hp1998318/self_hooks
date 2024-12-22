import { useEffect, useState } from "react";

const useHover = (element: React.RefObject<HTMLElement | null>) => {
  const [status, setStatus] = useState(false);
  const targetElement = element.current;
  const handleHover = (hover: boolean) => {
    setStatus(hover);
  };
  useEffect(() => {
    targetElement?.addEventListener("mouseenter", () => handleHover(true));
    targetElement?.addEventListener("mouseleave", () => handleHover(false));
    return () => {
      targetElement?.addEventListener("mouseenter", () => handleHover(true));
      targetElement?.addEventListener("mouseleave", () => handleHover(false));
    };
  });
  return status;
};

export default useHover;
