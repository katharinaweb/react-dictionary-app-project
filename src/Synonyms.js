import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <ul className="Synonyms-ul">
          {props.synonyms.map((synonyms, index) => {
            return (
              <li key={index} className="Synonyms-li">
                {synonyms}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
