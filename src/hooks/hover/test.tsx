import React, { useRef } from "react";
import useHover from "./useHover";
export const TestHover = () => {
  const ele = useRef(null);
  const hoverStatus = useHover(ele);
  return (
    <div>
      <h1>useHover</h1>
      <div>
        <div
          ref={ele}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        >
          target Element
        </div>
      </div>
      <h2>{`hover status: ${hoverStatus}`}</h2>
      <h1>-----------------------------------------------</h1>
    </div>
  );
};
