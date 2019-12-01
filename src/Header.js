import React from 'react';
import ReactModal from 'react-modal';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    componentDidMount() {
        ReactModal.setAppElement(document.getElementById('root'));
    }

    handleOpenModal = () => {
        this.setState({showModal: true});
    }

    handleCloseModal = () => {
        this.setState({showModal: false});
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
                <button className="header-btn">Your Stats</button>
            </header>
        )
    }
}

export default Header;