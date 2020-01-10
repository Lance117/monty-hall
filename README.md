### What is This?
This app is a Monty Hall game and simulator. Demo: https://lancesanity.github.io/monty-hall/

The **Monty Hall problem** is an interesting stats puzzle named after the tv host of [Let's Make a Deal](https://en.wikipedia.org/wiki/Let%27s_Make_a_Deal#The_Monty_Hall_Problem). In this game, there are three doors: a car is behind one door and goats are behind the other two doors. After the contestant chooses a door, the host reveals one door with a goat. Now there are two doors, two choices: do you stay with your choice or switch?

<img src="demo.gif">

Do you think that the odds are now 50-50 because there are now two doors instead of three?
That idea seems to make sense, but is incorrect! Brief explanation: the odds of choosing
the winning door are 1/3, so the odds of that door losing are 2/3. Even though one door is opened,
the odds of initially choosing the winning door don't change. Therefore, switching
gives you the best odds of winning.

<details>
  <summary>Probability Diagram</summary>
  <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Probability_diagram_for_Monty_Hall_problem.gif">
</details>

### Setup
```
$ git clone https://github.com/LanceSanity/monty-hall
$ npm install
$ npm run start
```

### Features
- 3 door game and simulator for N rounds
- Switch/stay stats saved in LocalStorage

### Language and Libraries
- [JavaScript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [chart.js](https://www.chartjs.org/)

### Code Samples
#### Simulating the problem with selected number of trials
The idea: for each trial, a door is chosen at random and a winning door is chosen at random. The chosen door is either the winner or loser. Because a non-prize door is revealed, if the chosen door loses, that means switching would be the winner.
<details>
  <summary>Example Code</summary>
  
  ```js
  if (this.props.numTrials) {
    let stayWins = 0;
    let chosenDoor;
    let winningDoor;
    let winRate;
    for (let i = 1; i <= this.props.numTrials; i++) {
        chosenDoor = Math.floor(Math.random() * 3);
        winningDoor = Math.floor(Math.random() * 3);
        if (winningDoor === chosenDoor) {
            stayWins += 1;
        }
        winRate = Math.floor((stayWins / i) * 100);
        this.updateData(this.chartReference, winRate)
    }
}
  ```
</details>

#### Component to keep track of the game's state
The game component keeps track of the selected door, revealed doors, whether the user switches.
<details>
  <summary>Example Code</summary>
  
  ```js
  class MontyGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            revealed: [false, false, false],
            switched: false,
            finished: false,
            winner: Math.ceil(Math.random() * 3)
        }
        this.stayWins = parseInt(window.localStorage.getItem('stayWins')) || 0;
        this.stayLosses = parseInt(window.localStorage.getItem('stayLosses')) || 0;
        this.switchWins = parseInt(window.localStorage.getItem('switchWins')) || 0;
        this.switchLosses = parseInt(window.localStorage.getItem('switchLosses')) || 0;
    }

    handleClick = (i) => {
        const nonSelected = [1, 2, 3].filter(x => { return x !== i });
        const finished = this.state.selected;
        let revealed = null;
        let revealedDoors = [...this.state.revealed];
        let switched = this.state.selected && i !== this.state.selected;
        if (!finished) {
            while (!revealed) {
                revealed = nonSelected[Math.floor(Math.random() * nonSelected.length)];
                if (revealed === this.state.winner) revealed = null;
            }
            revealedDoors[revealed - 1] = true;
        } else {
            revealedDoors = [true, true, true];
        }
        this.setState({
            selected: i,
            revealed: revealedDoors,
            switched,
            finished
        });
    }
  ```
</details>
