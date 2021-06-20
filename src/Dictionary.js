import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import { FaSearch } from "react-icons/fa";
import "./styles/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation here: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="wrap-dictionary">
      <section className="search-form">
        <form onSubmit={search}>
          <input
            className="search__input"
            type="search"
            placeholder="What is the word?"
            onChange={handleKeyword}
          />
          <button className="search__submit">
            <FaSearch />
          </button>
        </form>
      </section>
      <div className="hint">
        <strong>Suggested Words:</strong> Sunset, Apple
      </div>

      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
