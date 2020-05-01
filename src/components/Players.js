import React from "react";

export default function Player(props) {
  return (
      <ul>
<li className="Player">
      <p style={{clear:"left" }}> Player : {props.name}  /  SCORE : {props.score} </p>
    </li>
      </ul>
  );
}