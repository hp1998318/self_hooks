import React, { useState } from "react";
import { useDebounce } from "./useDebounce";
export const TestDebounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [terms, setTerm] = useState("");
  const debouncedSearch = useDebounce(async (term: string) => {
    console.log("Searching for:", term);
    setTerm(term);
  }, 500);
  const handleChange = (e: any) => {
    const curValue = e.target.value;
    setSearchTerm(curValue);
    debouncedSearch(curValue);
  };
  return (
    <div>
      <h1>useDebounce</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
      <h2>{`Searching for: ${terms}`}</h2>
      <h1>-----------------------------------------------</h1>
    </div>
  );
};
