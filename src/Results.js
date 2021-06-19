import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./styles/Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="word-result">{props.results.word}</h1>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="meaning-result" key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
