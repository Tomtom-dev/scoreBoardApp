import React, { useState } from "react";    



export default function AddPlayerForm(props) {

  const [newName, setNewName] = useState("");
  console.log(newName);

  function handleSubmit(event){
    event.preventDefaut();
    console.log(props.addPlayer);

    // clear the input field when we are done
    setNewName("");
  }

  return (
    <form onSubmit= {handleSubmit}>
        <p>
          New player:{" "}
          <input
          // controlled component value is managed by the state
          value ={newName} 
          onChange={(event) => setNewName( event.target.value)} 
          />
          <input type="submit"/>
        </p>
    </form>

  );
}