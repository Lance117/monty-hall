import React from 'react';
import MontySim from './MontySim'
import MontyGame from './MontyGame'
import './App.css';

const App = () => (
  <div className="app">
    <MontyGame />
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <MontySim />
      <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Probability_diagram_for_Monty_Hall_problem.gif"></img>
    </div>
  </div>
)

export default App;
