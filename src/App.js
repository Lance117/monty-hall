import React from 'react';
import Keyboard, { Cursor } from 'react-mk'
import Select from 'react-select';
import SimBarGraph from './SimBarGraph'
import './App.css';

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  handleClick = () => {
    this.setState({isOpened: this.state.isOpened ? false : true});
  }

  render() {
    let doorname = "door";
    if (this.state.isOpened) {
      doorname = "door door-open";
    }

    return (
      <div className="backdoor">
        <div className={doorname}>
          <img src="https://www.pnglot.com/pngfile/detail/172-1721328_tardis-door-opening-gif.png" alt="tardis-door" onClick={this.handleClick}></img>
        </div>
      </div>
    );
  }
}

class MontyGame extends React.Component {

  renderDoor(i) {
    return <Door />;
  }

  render() {
    const status = 'Choose your door: ';

    return (
      <div className="monty-game">
        <div className="doors">
          {this.renderDoor(0)}
          {this.renderDoor(1)}
          {this.renderDoor(2)}
        </div>
        <div className="status">
          <Keyboard sentenceDelayPerCharRange={[0, 0]}>{status}</Keyboard>
          <Cursor />
        </div>
      </div>
    )
  }
}

class MontySim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numTrials: null
    };

  }

  handleChange = selectedOption => {
    this.setState({numTrials: selectedOption.value});
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="monty-sim">
        <div style={{width: "300px"}}>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder="Welcome to simulator! Please choose N rounds:"
          />
        </div>
        <SimBarGraph numTrials={this.state.numTrials}/>
      </div>
    )
  }
}

// Variables
const options = [
  {value: 50, label: '50'},
  {value: 100, label: '100'},
  {value: 500, label: '500'},
  {value: 1000, label: '1000'},
];
//---------

const App = () => (
  <div className="app">
    <MontyGame />
    <MontySim />
    <footer className="main-footer">Hello world</footer>
  </div>
)

export default App;
