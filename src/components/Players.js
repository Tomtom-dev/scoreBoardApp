import React from "react";

export default function Player(props) {
  
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id,1 );
  };


  
  return (
      <ul>
<li className="Player">
      <p key={props.id} style={{clear:"left" }}> Player : {props.name}  /  SCORE : {props.score} </p>
  <button onClick={onClickIncrement}> score ++ </button>
    </li>
    <button >reset</button>
      </ul>
      
  );
  }