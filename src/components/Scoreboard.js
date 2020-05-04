import React, {useState} from "react" ;

import Player from '../components/Players'
import AddPlayerForm from '../components/AddPlayerForm'
import '../components/Scoreboard.scss'

export default function Scoreboard() {
  
    const [players, set_players] = useState([
        { id: 1, name: "Violeta", score: 11 },
        { id: 2, name: "Eszter", score: 14 },
        { id: 3, name: "Jeroen v2", score: 4 },
        { id: 4, name: "Lisabelle", score: 42 },
        ]);

    const playersCopy3 = [...players]
    const initialScore = playersCopy3.map(player => player.score);
    const [numberScore, setnumberScore] = useState(initialScore);

    const playersCopy = [...players]
    const compare_score =  playersCopy.sort(compare_numbers);
    function compare_numbers(player_a, player_b) {
      return player_b.score - player_a.score;
  }
  const [sort_by, set_sort_by] = useState("score"); 
    const playersCopy2 = [...players]
    const compare_name= playersCopy2.sort((a,b) => a.name.localeCompare(b.name, 'fr', {ignorePunctuation: true}) )
    
    const change_sorting = event => {
      set_sort_by(event.target.value);
    };
    const playersSorted = (sort_by === "name") ? compare_name : compare_score

    function incrementScore (id, changeBy) {
     
     const updatedPlayers = players.map((player) => {
        if(player.id === id){
          return{
            id : player.id,
            name: player.name,
            score: player.score+ changeBy,
          }
        } else{
          return player;
        }
     });
     set_players(updatedPlayers)
    }  

    function decrementScore (id, changeBy) {
     
      const updatelow = players.map((player) => {
         if(player.id === id){
           return{
             id : player.id,
             name: player.name,
             score: player.score- changeBy,
           }
         } else{
           return player;
         }
      });
      set_players(updatelow)
     } 

    return (
        <div>
          <AddPlayerForm addPlayer={name => {
          console.log("Let's add a new player with the name:", name);
        }}/>
      <p>
        Sort by:{" "}
        <select onChange={change_sorting}>
          <option value="score"> score</option>
          <option value="name"> name</option>
        </select>
      </p>
          {playersSorted.map((player) => {
            return (
              <Player
                key={player.id}
                id={player.id}
                name={player.name}
                score={player.score}
                incrementScore= {incrementScore}
                decrementScore= {decrementScore}
                
              />
            );
          })}
        </div>
      );
}