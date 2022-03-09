/* globals Chart:false, feather:false */


let id = 1;
var myChart;


Vue.createApp({

  data() {
    return {
      runs: [],
      results: [],
      buyat: 15,
      sellat: 1000,

      total: 10,
      winnersfromtotal: 1,

      investment: 10000,
      repeat: 10,

      winners: 0,
      losers: 0,
      bank: 0
    };
  },

  computed: {
    roi: {
      get() {
        return Math.round(this.sellat / this.buyat)
      }
    },
    
  },

  methods: {

    sim() {
      let t = 0.5;
      var r = Math.random();
      if (r > t) { this.results.push({result: true}); this.winners++; this.bank = this.bank + this.roi * this.investment}
      else { this.results.push({result: false}); this.losers++; this.bank = this.bank - this.investment}
      
      this.runs.push(
        { id: id++,
          investment: this.investment,
        });

      myChart.data.labels.push(id-1);
      myChart.data.datasets[0].data.push(this.bank);
      myChart.update();

    },

    reset() {
      this.stop();
      this.runs = [];
      this.results = [];
      id = 1;
      this.winners = 0;
      this.losers = 0;
      this.bank = 0;
      myChart.data.labels = [];
      myChart.data.datasets[0].data = [];
      myChart.update();

    },

    run() {
      for (let i = 0; i < this.repeat; i++) {
        setTimeout( () => { 
          this.sim();
        }, 200 * i );
      }
    },
    stop() {
      const highestTimeoutId = window.setTimeout(() => {
        for (let i = highestTimeoutId; i >= 0; i--) {
          window.clearInterval(i);
        }
      }, 0);
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
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
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






