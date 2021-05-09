
var ctx = document.getElementById('chartdiv').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 'Burnt', 'Pancakeswap', 'Development'],
        datasets: [{
          label: 'Tokenomics',
          data: [50, 46, 4],
          backgroundColor: [
            'rgb(241, 197, 14)',
            'rgb(34, 28, 2)',
            'rgb(248, 225, 134)'
          ],
          hoverOffset: 8
        }]
    },
    
});

