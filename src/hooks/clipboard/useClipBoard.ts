import { useCallback, useState } from "react";

const useClipBoard = () => {
  const [copyText, setCopyText] = useState("");
  let useClipBoardTuple: [string, (text: string) => Promise<void>];
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopyText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.focus();
        textArea.select();
        new Promise((resolve, reject) => {
          document.execCommand("copy")
            ? resolve("COPY SUCCESS")
            : reject(new Error("ERROR"));
          textArea.remove();
        }).then((res) => {
          setCopyText(text);
        });
      }
    } catch (e) {
      console.log("copy fail", e);
    }
  }, []);
  useClipBoardTuple = [copyText, copyToClipboard];
  return useClipBoardTuple;
};

export default useClipBoard;
