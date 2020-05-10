google.load('visualization', '1', {'packages':['corechart', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/cities', function(response) {
        console.log(response);

        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.cityName, item.population, item.income]);
        }

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'City Name');
        data.addColumn('number', 'Population');
        data.addColumn('number', 'Income');
        data.addRows(chartData);

        var options = {
            title: 'City population and average income',
            bars: 'horizontal', // Required for Material Bar Charts.
            series: {
                0: { axis: 'population' },
                1: { axis: 'income' }
            },
            axes: {
                x: {
                    population: {label: 'population'},
                    income: {side: 'top', label: 'income'}
                }
            }
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.BarChart(document.getElementById('barchart'));
        chart.draw(data, options);

    }, 'json');
}


