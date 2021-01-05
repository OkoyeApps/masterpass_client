import Chart from 'chart.js';

function smallMenuButton() {
  var menu = document.getElementById("small-menu");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open")
  }
}
function modalControl(modalId) {
  let modal = document.getElementById(modalId)
  let body = modal.getElementsByClassName("modal-body")[0]
  let content = modal.getElementsByClassName("modal-content")[0]

  if (modal.classList.contains("open")) {
    content.classList.remove("open")
    document.body.classList.remove("no-overflow")
    setTimeout(() => {
      modal.classList.remove("open")
      body.classList.remove("no-overflow")
    }, 150)
  } else {
    document.body.classList.add("no-overflow")
    modal.classList.add("open")
    setTimeout(() => {
      body.classList.add("show");
      content.classList.add("open")
    }, 100)
  }
}

function drawChart() {
  var chart = document.getElementById("last-week-this-week");

  var chart_area = new Chart(chart, {
    type: 'bar',
    responsive: true,
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Last week',
          data: [8, 1.3, 5, 15, 8, 3, 5],
          backgroundColor: "#bc5299"
        },
        {
          label: 'This week',
          data: [4, 3, 5, 9, 8, 3, 2],
          backgroundColor: "#1e3d69"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Ticket Sales this week and last'
      }
    }
  })


  var cart_chart = document.getElementById("bought-category-chart")

  var category_chart = new Chart(cart_chart, {
    type: 'pie',
    responsive: true,
    data: {
      labels: ['Weddings', 'MeetUps', 'Birthdays', 'Ashebi'],
      datasets: [
        {
          data: [1000, 1200, 700, 2050],
          backgroundColor: ["#f4a300", "#cc5299", "#c83e6a", "#1e3d69"]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Ticket bought by categories'
      }
    }
  })

  var horizontal_chart = document.getElementById("horizontal_chart")
  var money_chart = new Chart(horizontal_chart, {
    type: "horizontalBar",
    responsive: true,
    data: {
      labels: ['Weddings', 'MeetUps', 'Birthdays', 'Ashebi'],
      datasets: [
        {
          data: [1000, 1200, 700, 2050],
          backgroundColor: ["#f4a300", "#cc5299", "#c83e6a", "#1e3d69"]
        }
      ]
    }
  })
}
/* window.addEventListener('click', function (e) {
  if(document.getElementById())
}) */
export {
  modalControl,
  smallMenuButton,
  drawChart
}