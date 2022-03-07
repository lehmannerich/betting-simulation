/* globals Chart:false, feather:false */


let id = 1;

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

      this.createChart();
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
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            'Sunday',
            'Monday'
          ],
          datasets: [{
            data: [
              this.winners,
              2
            ],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          animation: {
            duration: 0
          },
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

  },

  mounted() {
    this.createChart();    
  }

}).mount("#app");











