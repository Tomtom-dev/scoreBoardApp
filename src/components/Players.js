import React from "react";
import "../components/Player.scss"
export default function Player(props) {
  
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id,1 );
  };

  const onClickDecrement = () => {
    props.decrementScore(props.id, 1)
  };

  const onClickReset = () => {
    props.resetScore(props.id, 0)
  }
  
  return (
      <ul>
<li className="Player">
    <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p key={props.id} style={{clear:"left" }}> Player : {props.name}  /  SCORE : {props.score} </p>
  <button onClick={onClickIncrement} style={{marginBottom : 25}}> score ++ </button>
  <button onClick={onClickDecrement}>score --</button>
  <button onClick={onClickReset}>reset</button>
    </li>
    
      </ul>
      
  );
  }