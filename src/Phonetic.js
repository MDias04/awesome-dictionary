import React from "react";
import "./styles/Phonetics.css";
import { FaVolumeUp } from "react-icons/fa";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <FaVolumeUp />
      </a>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
