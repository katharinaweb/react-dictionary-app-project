import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // documentaion: https://dictionaryapi.dev/
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="Dictionary-h1">What word are you looking for?</h1>
          <form className="Dictionary-form" onSubmit={handleSubmit}>
            <input
              className="Dictionary-input form-control"
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
          <div className="Dictionary-hint">
            e.g. word, dictionary, knowledge, information, ...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
