import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4 className="Meanings-partOfSpeech">{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map((definitions, index) => {
        return (
          <div key={index}>
            {" "}
            <ul>
              <li className="Meanings-definition">{definitions.definition}</li>
              <li className="Meanings-example">
                <i>{definitions.example}</i>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
