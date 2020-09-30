var element = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(element, {
  type: "bar",
  data: {
    labels: [
      "09.08.2020",
      "09.10.2020",
      "09.13.2020",
      "09.15.2020",
      "09.18.2020",
      "09.20.2020",
      "09.21.2020",
      "09.25.2020",
      "09.27.2020",
      "09.28.2020"
    ],
    datasets: [
      {
        label: ["Income"],
        data: [19, 28, 35, 50, 45, 15, 10, 30, 45, 12.5],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

var element2 = document.getElementById("myChart2").getContext("2d");
var myChart2 = new Chart(element2, {
  type: "bar",
  data: {
    labels: [
      "09.08.2020",
      "09.10.2020",
      "09.13.2020",
      "09.15.2020",
      "09.18.2020",
      "09.20.2020",
      "09.21.2020",
      "09.25.2020",
      "09.27.2020",
      "09.28.2020"
    ],
    datasets: [
      {
        label: ["Expense"],
        data: [19, 28, 35, 50, 45, 15, 10, 30, 45, 12.5],
        backgroundColor: [
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)"
        ],
        borderColor: [
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

var element3 = document.getElementById("myChart3").getContext("2d");
var myChart3 = new Chart(element3, {
  type: "bar",
  data: {
    labels: [
      "08.02.2020",
      "08.11.2020",
      "08.14.2020",
      "08.15.2020",
      "08.16.2020",
      "08.18.2020",
      "08.23.2020",
      "08.24.2020",
      "08.26.2020",
      "08.28.2020"
    ],
    datasets: [
      {
        label: ["Income"],
        data: [10, 3, 33, 50, 42, 2, 8, 80, 5, 18.5],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

var element4 = document.getElementById("myChart4").getContext("2d");
var myChart4 = new Chart(element4, {
  type: "bar",
  data: {
    labels: [
      "08.03.2020",
      "08.10.2020",
      "08.13.2020",
      "08.15.2020",
      "08.18.2020",
      "08.20.2020",
      "08.21.2020",
      "08.25.2020",
      "08.27.2020",
      "08.28.2020"
    ],
    datasets: [
      {
        label: ["Expense"],
        data: [12, 0, 3, 0, 5, 15, 10, 30, 41, 13.5],
        backgroundColor: [
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)"
        ],
        borderColor: [
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)",
          "rgba(231, 76, 60,0.2)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
