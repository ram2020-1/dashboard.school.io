let studentsPaiChart = document.getElementById("admin-student-gender-PaiChart");
let naitvPaiChartPar = document.querySelector("#D-NPC .par");
let naitvPaiContent = document.querySelector(
  ".naitv-paiChart-card .naitv-paiChart-content"
);
const DALC = document.getElementById("DALC");
const DABC = document.getElementById("DABC");
let naitvPaiChart = document.getElementById("D-NPC");
let student_student_gender_PaiChart = document.getElementById("student_student_gender_PaiChart");
let techer_student_gender_PaiChart = document.getElementById("techer_student_gender_PaiChart");

fetch("src/json/charts.json")
  .then((response) => response.json())
  .then((data) => {
    if (studentsPaiChart != null) {
      var paigender = studentsPaiChart.getContext("2d");
      var mypaiSec1 = new Chart(paigender, {
        type: "doughnut",
        data: {
          labels: data.admin_student_gender_PaiChart.labels,
          datasets: [
            {
              label: "High Temperature F",
              backgroundColor: data.admin_student_gender_PaiChart.backgroundColor,

              data: data.admin_student_gender_PaiChart.data,
              borderWidth: 0,
            },
          ],
        },
      });

    };
    // end pai-chart
    if (student_student_gender_PaiChart != null) {
      var paigenderS = student_student_gender_PaiChart.getContext("2d");
      var mypaiSec1 = new Chart(paigenderS, {
        type: "doughnut",
        data: {
          labels: data.student_student_gender_PaiChart.labels,
          datasets: [
            {
              label: "High Temperature F",
              backgroundColor: data.student_student_gender_PaiChart.backgroundColor,

              data: data.student_student_gender_PaiChart.data,
              borderWidth: 0,
            },
          ],
        },
      });

    };
    // end pai-chart
    if (techer_student_gender_PaiChart != null) {
      console.log("#".repeat(20))
      var paigenderT = techer_student_gender_PaiChart.getContext("2d");
      var mypaiSec = new Chart(paigenderT, {
        type: "doughnut",
        data: {
          labels: data.techer_student_gender_PaiChart.labels,
          datasets: [
            {
              label: "High Temperature F",
              backgroundColor: data.techer_student_gender_PaiChart.backgroundColor,

              data: data.techer_student_gender_PaiChart.data,
              borderWidth: 0,
            },
          ],
        },
      });

    };
    // end pai-chart

    if (naitvPaiChart) {
      for (var i = 0; i < data.naitvPaiChart.spans.length; i++) {
        naitvPaiChartPar.innerHTML += `<span style="width:${data.naitvPaiChart.spans[i]} ; background-color:${data.naitvPaiChart.colors[i]};">`;
        naitvPaiContent.innerHTML += `
          <div class="d-flex row warp">
          <div> <span style="background-color:${data.naitvPaiChart.colors[i]};"></span> ${data.naitvPaiChart.titles[i]} </div>
          <div>${data.naitvPaiChart.numbers[i]}</div>
          <div>${data.naitvPaiChart.spans[i]}</div>


          </div>`;
      }
    }

    if (DALC != null) {
      const mixedChart = new Chart(DALC, {
        data: {
          datasets: [
            {
              type: "line",
              label: data.mixid_chart.first_line.label,
              label: data.mixid_chart.first_line.label,
              data: data.mixid_chart.first_line.data,
              borderColor: "rgb(75, 192, 192)",
            },
            {
              type: "line",
              label: data.mixid_chart.second_line.label,
              data: data.mixid_chart.second_line.data,
              borderColor: "#3f7afc",
            },
          ],
          labels: data.mixid_chart.labels,
        },
      });
    }

    if (DABC != null) {

      var chart = new Chart(DABC, {
        type: "bar",
        data: {
          labels: data.bar_chart.labels,
          datasets: [
            {
              label: data.bar_chart.label,
              data: data.bar_chart.data,
              backgroundColor: data.bar_chart.backgroundColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  });
