import React from 'react';
import Header from './Header';
import Keyboard, { Cursor } from 'react-mk'

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

    handleSubmit = () => {
        this.setState({
            selected: null,
            revealed: [false, false, false],
            switched: false,
            finished: false,
            winner: Math.ceil(Math.random() * 3)
        })
    };

    renderDoor(i) {
        return <Door key={i.toString()} onClick={() => this.handleClick(i)}
        isSelected={this.state.selected === i} isOpened={this.state.revealed[i - 1]}
        isWinner={i === this.state.winner} />;
    }

    render() {
        let status = 'Choose a door: ';
        let revealedStatus = '';
        let finishedMsg = '';
        if (this.state.selected && !this.state.finished) {
            status = `You've chosen door #${this.state.selected}. Click on your final choice. `
            revealedStatus = `Behind door #${this.state.revealed.indexOf(true) + 1} is a G.O.A.T! `
        } else if (this.state.finished) {
            status = '';
            if (this.state.winner === this.state.selected) {
                finishedMsg = "Congrats, you've chosen the winning door! "
                if (this.state.switched) {
                    this.switchWins += 1;
                    window.localStorage.setItem('switchWins', this.switchWins);
                } else {
                    this.stayWins += 1;
                    window.localStorage.setItem('stayWins', this.stayWins);
                }
            } else {
                finishedMsg = `Sorry, the prize was behind door #${this.state.winner}. `
                if (this.state.switched) {
                    this.switchLosses += 1;
                    window.localStorage.setItem('switchLosses', this.switchLosses);
                } else {
                    this.stayLosses += 1;
                    window.localStorage.setItem('stayLosses', this.stayLosses);
                }
            }
            finishedMsg = finishedMsg.concat('Click "reset" to try again. ')
        }

        return (
            <div className="monty-game">
                <Header />
                <div className="doors">
                    {this.renderDoor(1)}
                    {this.renderDoor(2)}
                    {this.renderDoor(3)}
                </div>
                <div className="status" style={{ marginTop: "17px" }}>
                    {!this.state.finished && <Keyboard keyPressDelayRange={[30, 50]} sentenceDelayPerCharRange={[0, 0]}>{status}</Keyboard>}
                    <Cursor blinkAnimationDuration={1000}></Cursor><br/>
                    {this.state.revealed && <Keyboard keyPressDelayRange={[30, 50]} sentenceDelayPerCharRange={[0, 0]}>{revealedStatus}</Keyboard>}
                    {this.state.finished && <Keyboard keyPressDelayRange={[30, 50]} sentenceDelayPerCharRange={[0, 0]}>{finishedMsg}</Keyboard>}<br/>
                    {this.state.finished && <button onClick={this.handleSubmit}>Reset</button>}
                </div>
            </div>
        )
    }
}

class Door extends React.Component {

    render() {
        let doorname = "door";
        let revealClass = "backdoor";
        if (this.props.isOpened) doorname = "door door-open";
        if (this.props.isSelected) doorname = doorname.concat(' selected');
        if (this.props.isWinner) revealClass = "winning-door";

        return (
            <div className={revealClass}>
                <div className={doorname}>
                    <img src="https://www.pnglot.com/pngfile/detail/172-1721328_tardis-door-opening-gif.png" alt="tardis-door" onClick={() => this.props.onClick()}></img>
                </div>
            </div>
        );
    }
}

export default MontyGame;