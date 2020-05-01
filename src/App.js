import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard'
import Players from './components/Players'
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <main>
        <Title/>
       <h2 style={{clear :'left'}}>Players score</h2> 
      <Scoreboard/>
      </main>
    </div>
  );
}

export default App;
