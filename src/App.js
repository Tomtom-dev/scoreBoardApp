import React from 'react';
import './App.scss';
import Scoreboard from './components/Scoreboard'
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
