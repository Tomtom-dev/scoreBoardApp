import React, { useState } from "react";    

export default function AddPlayerForm(props) {
  const [newName, setNewName] = useState("");
  //   console.log("STATE:", newName);

  function handleSubmit(event){
    // do not refresh the page on submit
    event.preventDefault();
    
    props.addPlayer(newName)
    // console.log(props.addPlayer);

    // clear the input field when we are done
    setNewName("");
  }

  return (
    <form onSubmit= {handleSubmit}>
        <label>Name</label>
          <input
          // controlled component value is managed by the state
          value={newName} 
          onChange={(event) => setNewName( event.target.value)} 
          />
          <input type="submit"/>
    </form>
  );
}