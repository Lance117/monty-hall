import React from 'react';
import Select from 'react-select';
import SimBarGraph from './SimBarGraph'

class MontySim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numTrials: null
        };

    }

    handleChange = selectedOption => {
        this.setState({ numTrials: selectedOption.value });
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="monty-sim">
                <div style={{ width: "300px" }}>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="Welcome to simulator! Please choose N rounds:"
                    />
                </div>
                <SimBarGraph numTrials={this.state.numTrials} />
            </div>
        )
    }
}

// Variables
const options = [
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 500, label: '500' },
    { value: 1000, label: '1000' },
];
//---------

export default MontySim;