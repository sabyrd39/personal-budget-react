import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';

function HomePage() {
    
    var dataSource = {
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
        };

        function createChart() {
            var ctx = document.getElementById("myChart");
            var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: dataSource
            });
        }

        function getBudget() {
            axios.get('/budget')
            .then(function (res) {
                console.log(res.data);
                for (var i=0; i < res.data.myBudget.length; i++ ) {
                    dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                    dataSource.labels[i] = res.data.myBudget[i].title;
                    createChart();
                }
            })
        }
        getBudget();

  return (
    
    <main className="center" id="main">

  <div className="page-area">

      <pb-article>
          <h1>Stay on track</h1>
          <div>
              Do you know where you are spending your money? If you really stop to track it down,
              you would get surprised! Proper budget management depends on real data... and this
              app will help you with that!
          </div>
      </pb-article>

      <pb-article>
          <h1>Alerts</h1>
          <div>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </div>
      </pb-article>

      <pb-article>
          <h1>Results</h1>
          <div>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they to live happier lives... since they expend without guilt or fear...
              because they know it is all good and accounted for.
          </div>
      </pb-article>

      <pb-article>
          <h1>Free</h1>
          <div>
              This app is free!!! And you are the only one holding your data!
          </div>
      </pb-article>

      <pb-article>
          <h1>Stay on track</h1>
          <div>
              Do you know where you are spending your money? If you really stop to track it down,
              you would get surprised! Proper budget management depends on real data... and this
              app will help you with that!
          </div>
      </pb-article>

      <pb-article>
          <h1>Alerts</h1>
          <div>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </div>
      </pb-article>

      <pb-article>
          <h1>Results</h1>
          <div>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they to live happier lives... since they expend without guilt or fear...
              because they know it is all good and accounted for.
          </div>
      </pb-article>
      </div>
      <div class="bottom">
        <div class="center">
            All rights reserved &copy; Fabio Nolasco
        </div>
    </div>
    <div>
      <canvas id="myChart" height="400" width="400"/>
    </div>
</main>

    
  );

}

export default HomePage;