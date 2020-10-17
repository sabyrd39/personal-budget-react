import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Chart from 'chart.js';

class App extends Component {
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
    axios.get('./required.json')
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
    <Router >
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage/>
            <div className = "App">
              {Object.keys(this.state.chartData).length &&
                <Chart
                  chartData={this.state.chartData}
                />
              }
            </div>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
  }
}

export default App;
