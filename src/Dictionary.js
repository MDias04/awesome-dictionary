import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import { FaSearch } from "react-icons/fa";
import "./styles/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  //Handles the dictionary
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  //Handles the images
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //documentation here: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000178bfb0ca1fcd41d9a657113694069f73";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="wrap-dictionary">
      <div className="search_form">
        <form onSubmit={search}>
          <input
            className="search_input"
            type="search"
            placeholder="What is the word?"
            onChange={handleKeyword}
          />
          <button className="search_submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="hint">
        <strong>Suggested Words:</strong> Sunset, Apple
      </div>

      <section>
        <Results results={results} />
        <Photos photos={photos} />
      </section>
    </div>
  );
}
