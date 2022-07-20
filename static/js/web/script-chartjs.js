function altElement0() {
  const element = document.getElementById('element-0'),
        labels  = ['January', 'February', 'March', 'April', 'May', 'June'],
        data    = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  },
        config  = {
    type: 'line',
    data: data
  },
        chart   = new Chart(element, config);
}