import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map((synonyms, index) => {
            return (
              <div key={index}>
                <li>{synonyms}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
