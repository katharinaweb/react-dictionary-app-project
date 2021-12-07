import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props);
  return (
    <div className="Meanings">
      <h4 className="Meanings-partOfSpeech">{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map((definitions, index) => {
        return (
          <div key={index}>
            {" "}
            <div className="Meanings-definition">{definitions.definition}</div>
            <div className="Meanings-example">
              <i>{definitions.example}</i>
            </div>
            <Synonyms synonyms={definitions.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
