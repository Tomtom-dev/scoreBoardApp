import React, {useState} from "react" ;

import Player from '../components/Players'


export default function Scoreboard() {
  
    const [players, set_players] = useState([
        { id: 1, name: "Violeta", score: 11 },
        { id: 2, name: "Eszter", score: 14 },
        { id: 3, name: "Jeroen v2", score: 4 },
        { id: 4, name: "Lisabelle", score: 42 },
        ]);

    
    //  return (<div>
    //      {players.map((player) => {
    //          console.log("PLAYER:", player.name, player.score, player.id);
    //          return <Player id={player.id} name={player.name} score={player.score} />

    //      })}
    //      </div>)

      
      

        return (
        <div className="Scoreboard">
        <p>Player's scores:</p>
        <h1>Scoreboard</h1>
            <div>
            {players.map(player) => {
                <player id={player.id}  name={player.name} score={player.score}/>
            }
            </div>

        </div>
    );
}