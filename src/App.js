import React from 'react';
import Keyboard, { Cursor } from 'react-mk'
import Select from 'react-select';
import SimBarGraph from './SimBarGraph'
import './App.css';

class Door extends React.Component {

  render() {
    let doorname = "door";
    if (this.props.isOpened) {
      doorname = "door door-open";
    }
    if (this.props.isSelected) {
      doorname = doorname.concat(' selected');
    }

    return (
      <div className="backdoor">
        <div className={doorname}>
          <img src="https://www.pnglot.com/pngfile/detail/172-1721328_tardis-door-opening-gif.png" alt="tardis-door" onClick={() => this.props.onClick()}></img>
        </div>
      </div>
    );
  }
}

class MontyGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      revealed: null
    }
    this.winner = Math.ceil(Math.random() * 3);
  }

  handleClick = (i) => {
    const nonSelected = [1, 2, 3].filter(x => {return x !== i});
    let revealed = null;
    while (!revealed) {
      revealed = nonSelected[Math.floor(Math.random() * nonSelected.length)];
      if (revealed === this.winner) revealed = null;
    }
    this.setState({
      selected: i,
      revealed: revealed
    });
  }

  renderDoor(i) {
    return <Door key={i.toString()} onClick={() => this.handleClick(i)} isSelected={this.state.selected === i} isOpened={this.state.revealed === i}/>;
  }

  render() {
    let status = 'Choose your door: ';
    let revealedStatus = '';
    if (this.state.selected) {
      status = `You've chosen door #${this.state.selected}. `
      revealedStatus = `Behind door #${this.state.revealed} is a GOAT! `
    }

    return (
      <div className="monty-game">
        <div className="doors">
          {this.renderDoor(1)}
          {this.renderDoor(2)}
          {this.renderDoor(3)}
        </div>
        <div className="status" style={{marginTop: "17px"}}>
          <Keyboard keyPressDelayRange={[40, 80]} sentenceDelayPerCharRange={[0, 0]}>{status}</Keyboard><br />
          {this.state.revealed && <Keyboard keyPressDelayRange={[40, 80]} sentenceDelayPerCharRange={[0, 0]}>{revealedStatus}</Keyboard>}
          <Cursor blinkAnimationDuration={1000}></Cursor>
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
