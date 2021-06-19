import React from "react";
import "./styles/Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        {/* Add a listen symbol */}
        Listen
      </a>

      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
