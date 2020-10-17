import axios from 'axios';
import React, {Component} from 'react';
import Chart from 'chart.js';
import 

class ChartComponent extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}          
        }
    }

    componentDidMount() {
        this.getChartData();
    }
    
    getChartData() {
        axios.get("./required.json")
        .then(function(res) {
            const myBudget = res.data;
            let labels = [];
            let data = [];
            myBudget.array.forEach(element => {
                labels.push(element.labels);
                data.push(element.data);
            });
            console.log(myBudget)
            this.setState({
                chartData: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Budget",
                            data: data,
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
                    ]
                }
            });          
        });
    }
    

    render() {
        return (
            <div className = "ChartComponent">
                <Chart 
                    chartData = {this.state.chartData}
                    options = {{}}
                />
            </div>
        )
    }
}

export default ChartComponent;