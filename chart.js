// // create data
// var data = [
//     {x: "Burnt", value: 50},
//     {x: "Pancakeswap liquidity pool", value: 46},
//     {x: "Development & Marketing fund", value: 4}
//   ];
  
//   // create a pie chart and set the data
//   chart = anychart.pie(data);
  
//   /* set the inner radius
//   (to turn the pie chart into a doughnut chart)*/
//   chart.innerRadius("30%");
  
//   // set the container id
//   chart.container("chart-container");
  
//   // initiate drawing the chart
//   chart.draw();
// am4core.ready(function() {

//     // Themes begin
//     am4core.useTheme(am4themes_kelly);
//     // Themes end
    
//     // Create chart instance
//     var chart = am4core.create("chartdiv", am4charts.PieChart);
    
//     // Add data
//     chart.data = [ {
//       "key": "Burnt",
//       "values": 500
//     }, {
//       "key": "Pancakeswap liquidity pool",
//       "values": 460
//     },{
//         "key": "Development & Marketing fund",
//         "values": 40
//     }];
    
//     // Set inner radius
//     chart.innerRadius = am4core.percent(50);
    
//     // Add and configure Series
//     var pieSeries = chart.series.push(new am4charts.PieSeries());
//     pieSeries.dataFields.value = "values";
//     pieSeries.dataFields.category = "key";
//     pieSeries.slices.template.stroke = am4core.color("#fff");
//     pieSeries.slices.template.strokeWidth = 2;
//     pieSeries.slices.template.strokeOpacity = 1;
    
//     // This creates initial animation
//         pieSeries.hiddenState.properties.opacity = 1;
//         pieSeries.hiddenState.properties.endAngle = -90;
//         pieSeries.hiddenState.properties.startAngle = -90;
    
//     }); 




var ctx = document.getElementById('chartdiv').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 'Burnt', 'Pancakeswap liquidity pool', 'Development & Marketing Fund'],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 46, 4],
          backgroundColor: [
            'rgb(241, 197, 14)',
            'rgb(54, 162, 235)',
            'rgb(26, 26, 26)'
          ],
          hoverOffset: 8
        }]
    },
    
});

