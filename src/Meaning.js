import React from "react";
import "./styles/Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="--word">{props.meaning.partOfSpeech}</h3>
      <div className="--noun"></div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="--definition">
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em className="--definition-example">{definition.example}</em>
              <br />
              <strong>Synonyms: </strong>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
