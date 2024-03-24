import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dicntionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "040ffb19o36e1562a0f417abf724b2t9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
