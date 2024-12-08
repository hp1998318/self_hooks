import React from "react";
import "./App.css";
import { TestDebounce } from "./hooks/debounce/debounceTest";
import { ClickOutAreaTest } from "./hooks/clickOutArea/clickOutAreaTest";
import { TestUseLocal } from "./hooks/useLocalStorage/TestUseLocal";
function App() {
  return (
    <div className="App">
      <TestDebounce />
      <ClickOutAreaTest />
      <TestUseLocal />
    </div>
  );
}

export default App;
