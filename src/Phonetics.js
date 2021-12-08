import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <a
        className="Phonetics-link"
        href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
      <div className="Phonetics-text">{props.phonetics.text}</div>
    </div>
  );
}
