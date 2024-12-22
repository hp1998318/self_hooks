import { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setStatus] = useState(true);
  const handleLineStatus = (netStatus: boolean) => {
    setStatus(netStatus);
  };
  useEffect(() => {
    window.addEventListener("online", () => handleLineStatus(true));
    window.addEventListener("offline", () => handleLineStatus(false));
    return () => {
      window.addEventListener("online", () => handleLineStatus(true));
      window.addEventListener("offline", () => handleLineStatus(false));
    };
  }, []);
  return status;
};
export default useOnline;
