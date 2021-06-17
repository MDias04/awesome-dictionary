import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return <p>{props.meaning.definitions[0].definition};</p>;
}
