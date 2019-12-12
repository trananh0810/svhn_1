$(function(){
    var ctx = document.getElementById('myChart');
        
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6','7','8', '9', '10', '11', '12'],
                datasets: [{
                    label: 'Doanh thu',
                    data: [12000000000, 1900000000, 3000000000, 5000000, 2000000000, 3000000000],
                    borderColor: [
                        '#18a4dd'
                    ],
                    borderWidth: 2,
                    lineTension: 0,
                    backgroundColor: '#18a4dd00',
                    pointHoverBackgroundColor: "#18a4dd"
                }],
            },
            options:{
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[0].data[tooltipItem.index];
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join('.');
                            return value;
                        }
                  } // end callbacks:
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            // Return an empty string to draw the tick line but hide the tick label
                            // Return `null` or `undefined` to hide the tick line entirely
                                userCallback: function(value, index, values) {
                                // Convert the number to a string and splite the string every 3 charaters from the end
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                
                                // Convert the array to a string and format the output
                                value = value.join('.');
                                return value;
                            }
                        }
                    }]
                },
                responsive: true,
            }
        });

    
})