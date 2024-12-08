import React from "react";
import { useLocalStorage } from "./useLocalStorage";
export const TestUseLocal = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div>
      <h1>useLocalStorage</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(() => e.target.value)}
      />
      <p>Your name is {name}</p>
      <h1>-----------------------------------------------</h1>
    </div>
  );
};
