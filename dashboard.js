/* globals Chart:false, feather:false */



(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()


let id = 1;

Vue.createApp({
  data() {
    return {
      runs: [],
      investment: 10000,
      repeat: 5,
    };
  },
  methods: {
    sim() {
      let t = 0.5;
      var r = Math.random();
      
      this.runs.push(
        { id: id++, 
          investment: this.investment,
          outcome: true
        })
    },
    reset() {
      this.runs = [];
      this.outcomes = [];
      id = 1;
    },
    run() {
      for (let i = 0; i < this.repeat; i++) {
        this.sim();
      }
    }
  }
}).mount("#app");











