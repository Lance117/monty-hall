import React, { useState } from 'react';
import MontySim from './MontySim'
import MontyGame from './MontyGame'
import './App.css';

const App = () => {
  const [showSlidein, setSlidein] = useState(true);

  return (
    <div className="app">
      <MontyGame />
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <MontySim />
        <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Probability_diagram_for_Monty_Hall_problem.gif" alt="prob-diagram"></img>
      </div>
      {showSlidein && <aside className="slidein">
        <section className="slidein-content">
          <p>
            Hello! This app is about the <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem">Monty Hall problem.</a> 
            There's a prize behind one of the three doors. How to play:
          </p>
          <ol>
            <li>Choose a door.</li>
            <li>Switch doors or keep the same one.</li>
            <li>You've won or lost.</li>
          </ol>
          There's also a simulator to help prove that switching doors is the best strategy. Try it out!
          <button className="header-btn" onClick={() => setSlidein(false)}>Got It!</button>
        </section>
      </aside>}
    </div>
  )
}

export default App;
