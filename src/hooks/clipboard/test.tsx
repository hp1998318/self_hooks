import React, { useState } from "react";
import useClipBoard from "./useClipBoard";
interface ClipBoardAttribute {
  text: string;
}
const ClipBoard = (attribute: ClipBoardAttribute) => {
  const { text } = attribute;
  const [copyText, setCopyText] = useClipBoard();
  const handleCopy = () => {
    setCopyText(text);
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleCopy}>
        {text === copyText ? "已复制" : "点击复制"}
      </button>
    </div>
  );
};
export const TestClipBoard = () => {
  return <ClipBoard text="我是复制文本" />;
};
