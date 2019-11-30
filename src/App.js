import React from 'react';
import MontySim from './MontySim'
import MontyGame from './MontyGame'
import './App.css';

const App = () => (
  <div className="app">
    <MontyGame />
    <MontySim />
    <footer className="main-footer">Hello world</footer>
  </div>
)

export default App;
