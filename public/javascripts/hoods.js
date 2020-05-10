
color_1 = ['e5be9e','b2945b','cbc0ad','86a397','361d2e','1a090d', '348aa7', '8de969' ,'443850', '984447' ,'a5668b','6cd4ff','087e8b','d0b8ac','ebebeb']
const arrayColumn = (arr, n) => arr.map(x => x[n]);
var title = 'Top 15 Neighborhoods of San Francisco (out of a total 41) Sorted by Their Respective Percentage of the Total Number of Incident Calls in 2019'

function foo(cb){
    $.get('/api/top_cities', {json: true}, cb);
  }

foo(cb) 


function cb(err, res, body){

    var obj = JSON.parse(body.responseText);
    
    // Create items array
    var items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    var percents = items;

    var arr = []
    var row_1 = arrayColumn(percents,0)
    row_1.push({ role: 'annotation' } )
    row_1.unshift('Neghborhoods')

    var row_2 = arrayColumn(percents,1)
    row_2.push('')
    row_2.unshift('')
    console. log(row_1, row_2)

    arr.push(row_1)
    arr.push(row_2)

    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);

        var options = {
            title: title,
            titleTextStyle: {            
                fontSize: 14, // 12, 18 whatever you want (don't specify px)
                bold: true,    // true or false
            },
            colors : color_1,
            // width: 900,
            // height: 300,
            legend: { position: 'top', maxLines: 4 },
            bar: { groupWidth: '45%' },
            hAxis: {format: '%#'},
            isStacked: true,
            'chartArea': {'width': '95%', 'height': '50%'}

        };

        var chart = new google.visualization.BarChart(document.getElementById("top_cities_chart"));
        chart.draw(data, options);
    }
    
        
    
  };