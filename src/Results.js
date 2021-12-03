import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h2>{props.results[0].word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
