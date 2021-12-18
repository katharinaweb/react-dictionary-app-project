import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    let apiPexelsKey =
      "563492ad6f91700001000001273c56eacc64455882f45d9fd22fb803";
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headersPexels = { Authorization: `Bearer ${apiPexelsKey}` };
    axios.get(apiUrl).then(handleResponse);
    axios
      .get(apiPexelsUrl, { headers: headersPexels })
      .then(handlePexelsResponse);
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
            e.g. letter, word, dictionary, knowledge, information, ...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
