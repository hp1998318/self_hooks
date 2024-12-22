import React from "react";
import useOnline from "./useOnline";
export const TestOnline = () => {
  const lineStatus = useOnline();
  return (
    <div>
      <h1>useOnline</h1>
      <h2>{`Line status: ${lineStatus}`}</h2>
      <h1>-----------------------------------------------</h1>
    </div>
  );
};
