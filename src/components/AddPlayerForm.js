import React, { useState } from "react";    

export default function AddPlayerForm() {

const [name, set_name] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input onChange={event => set_name (event.target.value)} type="text" placeholder="Name" value={name}/>{" "}
        <button onClick={AddPlayerForm}>Add</button>
      </p>
    </div>
  );
}