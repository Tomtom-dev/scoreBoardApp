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

    
    // const initialScore = playersCopy3.map(player => player.score);
    // const [numberScore, setnumberScore] = useState(initialScore);

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

    function resetScore (){
      const reset = players.map((player) => {
       if(player.score !== 0){
          return {...player, score : 0};

        }else{
          return player
        }
      });
        set_players(reset)
       }
       
       function randomize (){
        const reset = players.map((player) => {
        const random =parseInt(Math.random()*101);
            return {...player, score : random};
        });
          set_players(reset)
         }

    function addPlayer(name){
      // console.log('NEW NAME: ', name);
      const newPlayer = {
        id: players.length +1,
        name: name,
        score :0
      }
      const updateNewPlayer =[...players, newPlayer]
      // console.log(updateNewPlayer);
      set_players(updateNewPlayer)
    }

    return (
        <div>
          <AddPlayerForm addPlayer={addPlayer}/>
      <p>
        <label>Sort by:{" "}</label>
        <select onChange={change_sorting}>
          <option value="score"> score</option>
          <option value="name"> name</option>
        </select>
        <button onClick={resetScore}>reset</button>
        <button onClick={randomize}>randomize</button>
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