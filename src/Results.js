import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="Results-word">{props.results[0].word}</h2>
        <h3 className="Results-phonetic">[{props.results[0].phonetic}]</h3>
        {props.results[0].meanings.map((meanings, index) => {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
