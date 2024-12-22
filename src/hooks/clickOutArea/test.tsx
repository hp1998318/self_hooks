import React, { useRef, useState } from "react";
import { useClickOutArea } from "./useClickoutArea";

export const ClickOutAreaTest = () => {
  const [isModal, setIsModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutArea(modalRef, () => setIsModal(false));
  return (
    <div>
      <h1>useClickOutArea</h1>
      <button onClick={() => setIsModal(true)}>Open Modal</button>
      {isModal && (
        <div style={{ backgroundColor: "green" }} ref={modalRef}>
          <h2>我是模态框</h2>
          <p>点击外部关闭模态框</p>
          <div>dig</div>
        </div>
      )}
      <h1>-----------------------------------------------</h1>
    </div>
  );
};
