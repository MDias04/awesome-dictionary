import React from "react";
import "./styles/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="--word">{props.meaning.partOfSpeech}</h3>
      <div className="noun"></div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
