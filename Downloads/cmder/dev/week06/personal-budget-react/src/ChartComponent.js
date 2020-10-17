import Axios from 'axios';
import React, {Component} from 'react';
import Chart from 'chart.js';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}          
        }
    }

    componentWillMount() {
        this.getChartData();
    }
    
    getChartDataTwo() {
        Axios.get('/required.json')
        .then(function(res) {
            console.log(res.data)
            for (var i = 0; i < res.data.myBudget.length; i++) {
                this.state.chartData.datasets[0].data[i] = res.data.myBudget[i].budget;
                this.state.chartData.labels[i] = res.data.myBudget[i].title;
            }
        });
    }

        getChartData() {
            this.setState({
                chartData: {
                    datasets: [
                        {
                            data: [],
                            backgroundColor: [
                                '#ffcd56',
                                '#ff6384',
                                '#36a2eb',
                                '#fd6b19',
                                "#66ff33",
                                "#6600ff",
                                "#000000",
                                "#ff33cc",                        
                            ],
                        }
                    ],
                    labels: []
                }
            }) 

            this.getChartDataTwo();
        }
    

    render() {
        return (
            <div className = "chart">
                <Chart 
                    data = {this.state.chartData}
                    options = {{}}
                />
            </div>
        )
    }
}

export default ChartComponent;