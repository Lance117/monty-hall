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
        return (
            <header>
                <button onClick={this.handleOpenModal} className="header-btn">About</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Test"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    className="about-modal"
                    overlayClassName="overlay"
                >
                    <p style={{margin: "10px"}}>
                        The Monty Hall problem is an interesting stats puzzle named after the tv host of
                        Let's Make a Deal. In this game, there are three doors: a car is behind one door
                        and goats are behind the other two doors. After the contestant chooses a door,
                        the host reveals one door with a goat. Now there are two doors, two choices:
                        do you stay with your choice or switch?
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
                                <th>3</th>
                                <th>1</th>
                                <th>75</th>
                            </tr>
                            <tr>
                                <th>Stay</th>
                                <th>3</th>
                                <th>10</th>
                                <th>30</th>
                            </tr>
                        </tbody>
                    </table>
                </ReactModal>
            </header>
        )
    }
}

export default Header;