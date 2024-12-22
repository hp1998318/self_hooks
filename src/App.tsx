import React from "react";
import "./App.css";
import { TestDebounce } from "./hooks/debounce/test";
import { ClickOutAreaTest } from "./hooks/clickOutArea/test";
import { TestUseLocal } from "./hooks/useLocalStorage/test";
import { TestOnline } from "./hooks/online/test";
import { TestHover } from "./hooks/hover/test";
import { TestClipBoard } from "./hooks/clipboard/test";
function App() {
  return (
    <div className="App">
      <TestDebounce />
      <ClickOutAreaTest />
      <TestUseLocal />
      <TestOnline />
      <TestHover />
      <TestClipBoard />
    </div>
  );
}

export default App;
