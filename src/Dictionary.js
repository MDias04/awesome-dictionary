import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          className="search-bar"
          type="search"
          placeholder="What is the word?"
          onChange={handleKeyword}
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
