import React, { Component } from 'react'
import {HorizontalBar} from 'react-chartjs-2';

export default class SimBarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numTrials: this.props.numTrials
        }

        this.chartReference = {};
    }

    componentDidUpdate() {
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
    }

    componentDidMount() {
        console.log(this.chartReference)
    }

    // helper variables & functions
    data = {
        labels: ['Stay', 'Switch'],
        datasets: [
            {
                label: 'Win %',
                backgroundColor: 'rgba(122,200,0,0.6)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [50, 50]
            },
            {
                label: 'Loss %',
                backgroundColor: 'rgba(242,97,48,0.6)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [50, 50]
            }
        ]
    };

    updateData = (chart, stayWinRate) => {
        chart.props.data.datasets[0].data = [stayWinRate, 100 - stayWinRate]; 
        chart.props.data.datasets[1].data = [100 - stayWinRate, stayWinRate]; 
        chart.chartInstance.update();
    }
    //-----------------

    render() {
        return (
            <div style={{width: "500px"}}>
                <h2>Win Rate by Strategy</h2>
                <HorizontalBar
                    ref={(reference) => this.chartReference = reference}
                    data={this.data}
                    options={{
                        responsive: true,
                        scales: {
                            yAxes: [{
                                stacked: true,
                                barThickness: "flex",
                                fontSize: 15,
                                categoryPercentage: 0.5
                            }],
                            xAxes: [{
                                stacked: true,
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 15
                                }
                            }]
                        },
                        legend: {display: false},
                    }}
                />
            </div>
        )
    }
}