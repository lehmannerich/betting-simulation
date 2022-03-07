/* globals Chart:false, feather:false */


let id = 1;
var myChart;

Vue.createApp({

  data() {
    return {
      runs: [],
      results: [],
      investment: 10000,
      roi: 100000,
      repeat: 1,

      winners: 0,
      losers: 0,
      bank: 0
    };
  },

  methods: {

    sim() {

      let t = 0.5;
      var r = Math.random();
      if (r > t) { this.results.push({result: true}); this.winners++; this.bank = this.bank + this.roi}
      else { this.results.push({result: false}); this.losers++; this.bank = this.bank - this.investment}
      
      this.runs.push(
        { id: id++,
          investment: this.investment,
        });

      myChart.data.labels.push("LAB");
      myChart.data.datasets.forEach((dataset) => {
          dataset.data.push(1);
      });
      myChart.update();
    },

    reset() {
      this.runs = [];
      this.results = [];
      id = 1;
      this.winners = 0;
      this.losers = 0;
      this.bank = 0;
    },

    run() {
      for (let i = 0; i < this.repeat; i++) {
        this.sim();
      }
    },

    createChart() {
    }

  },

  mounted() {
    myChart = new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            data: [],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          // animation: {
          //   duration: 0
          // },
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
      }); 
  }

}).mount("#app");






