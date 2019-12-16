import React from 'react';
import ReactModal from 'react-modal';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showStats: false,
        };
    }

    componentDidMount() {
        ReactModal.setAppElement(document.getElementById('root'));
    }

    handleOpenModal = () => {
        this.setState({showModal: true});
    }

    handleOpenStats = () => {
        this.setState({showStats: true});
    }

    handleCloseModal = () => {
        this.setState({showModal: false});
    }

    handleCloseStats = () => {
        this.setState({showStats: false});
    }

    render() {
        let switchWins = parseInt(window.localStorage.getItem('switchWins') || 0);
        let switchLosses = parseInt(window.localStorage.getItem('switchLosses') || 0);
        let stayWins = parseInt(window.localStorage.getItem('stayWins') || 0);
        let stayLosses = parseInt(window.localStorage.getItem('stayLosses') || 0);

        let stayWinRate = `${((stayWins / (stayWins + stayLosses)) * 100).toFixed(2)}%`;
        if (stayWins + stayLosses === 0) stayWinRate = 'no rounds played'
        let switchWinRate = `${((switchWins / (switchWins + switchLosses)) * 100).toFixed(2)}%`;
        if (switchWins + switchLosses === 0) switchWinRate = 'no rounds played'

        return (
            <header>
                <button onClick={this.handleOpenModal} className="header-btn">What Is This?</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Test"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    className="about-modal"
                    overlayClassName="overlay"
                >
                    <p style={{margin: "10px"}}>
                        The <b>Monty Hall Problem</b> is an interesting stats puzzle named after the tv host of 
                        <a href="https://en.wikipedia.org/wiki/Let%27s_Make_a_Deal#The_Monty_Hall_Problem"> Let's Make A Deal</a>. In this game, there are three doors: a car is behind one door
                        and goats are behind the other two doors. After the contestant chooses a door,
                        the host reveals one door with a goat. Now there are two doors, two choices:
                        do you stay with your choice or switch? Does it even matter?
                    </p>
                    <p style={{margin: "10px"}}>
                        Do you think that the odds are now 50-50 because there are now two doors instead of three?
                        That idea seems to make sense, but is incorrect! Brief explanation: the odds of choosing
                        the winning door are 1/3, so the odds of that door losing are 2/3. Even though one door is opened,
                        the odds of initially choosing the winning door don't change. Therefore, switching
                        gives you the best odds of winning. Try running the simulator a bunch of times and you'll
                        notice that the win rate of keeping your door hovers around 33%.
                    </p>
                </ReactModal>
                <h2>Monty Hall Problem</h2>
                <button onClick={this.handleOpenStats} className="header-btn">Your Stats</button>
                <ReactModal
                    isOpen={this.state.showStats}
                    contentLabel="Stats"
                    onRequestClose={this.handleCloseStats}
                    shouldCloseOnOverlayClick={true}
                    className="stats-modal"
                    overlayClassName="overlay"
                >
                    <table style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>Strategy</th>
                                <th># Wins</th>
                                <th># Losses</th>
                                <th>Win Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Switch</th>
                                <th>{switchWins}</th>
                                <th>{switchLosses}</th>
                                <th>{switchWinRate}</th>
                            </tr>
                            <tr>
                                <th>Stay</th>
                                <th>{stayWins}</th>
                                <th>{stayLosses}</th>
                                <th>{stayWinRate}</th>
                            </tr>
                        </tbody>
                    </table>
                </ReactModal>
            </header>
        )
    }
}

export default Header;