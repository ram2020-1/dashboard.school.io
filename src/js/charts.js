let studentsPaiChart = document.querySelectorAll(`[data-chart="student-paiChart"]`);
let naitvPaiChart = document.getElementById("D-NPC");
let naitvPaiChartPar = document.querySelector("#D-NPC .par");
let naitvPaiContent = document.querySelector(".naitv-paiChart-card .naitv-paiChart-content");
let dashBordStudentsPagePaiChart = document.getElementById("DSPP")

fetch("src/json/charts.json")
  .then(response => response.json())
  .then(data => {
    console.log(studentsPaiChart.length)
    if (studentsPaiChart.length != 0) {
      async function piaChartStarto(){
    for (var i = 0; i < studentsPaiChart.length; i++) {

        var paigender = studentsPaiChart[i].getContext('2d');
        var mypaiSec1 = new Chart(paigender, {
          type: 'doughnut',
          data: {
            labels: data.paiChartOption.labels,
            datasets: [

              {
                label: 'High Temperature F',
                backgroundColor: data.paiChartOption.backgroundColor,

                data: data.paiChartOption.data,
                borderWidth: 0
              }


            ]
          }
        })


      }
      };
      piaChartStarto();
    }
    if (naitvPaiChart) {
      for (var i = 0; i < data.naitvPaiChart.spans.length; i++) {
        naitvPaiChartPar.innerHTML += `<span style="width:${data.naitvPaiChart.spans[i]} ; background-color:${data.naitvPaiChart.colors[i]};">`
        naitvPaiContent.innerHTML += `
          <div class="d-flex row warp">
          <div> <span style="background-color:${data.naitvPaiChart.colors[i]};"></span> ${data.naitvPaiChart.titles[i]} </div>
          <div>${data.naitvPaiChart.numbers[i]}</div>
          <div>${data.naitvPaiChart.spans[i]}</div>


          </div>`
      }
    }

  })


const DALC = document.getElementById("DALC");
if (DALC != null) {

  const mixedChart = new Chart(DALC, {
    data: {
      datasets: [{
        type: 'line',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: 'rgb(75, 192, 192)',

      }, {
        type: 'line',
        label: 'Line Dataset',
        data: [50, 44, 220, 0],
        borderColor: '#3f7afc',

      }],
      labels: ['January', 'February', 'March', 'April']
    },

  });
}

const DABC = document.getElementById("DABC");
if (DABC != null) {

  const DABC = document.getElementById('DABC');

  var chart = new Chart(DABC, {
    type: 'bar',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow',
      ],
      datasets: [{
        label: '# of Votes',
        data: [12000, 1234, 8288],
        backgroundColor: [
          "#3d3d",
          "#3d3d",
          "#3d3d",

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}