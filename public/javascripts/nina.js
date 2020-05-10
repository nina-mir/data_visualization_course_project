google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);
//google.charts.setOnLoadCallback(drawAxisTickColors1);



function drawAxisTickColors() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Incident Calls', { role: 'style' }],
    ['January', 12117, '393309'],
    ['February', 10961, '4C440C'],
    ['March',11777, '5F550F' ],
    ['April', 11785, '736511'],
    ['May',12284, '867614'],
    ['June',12093, '998717' ],
    ['July', 13087, 'AC981A'],
    ['August',13702, 'BEA91D'],
    ['September',12838, 'D5BF33'],
    ['October', 13594, 'D2CD82'],
    ['November',12112, 'B9B87E'],
    ['December',12141, 'BFB9BC']
  ]);

  var options = {
    legend: { position: "none" },
    bar: { groupWidth: '40%' },
    title: 'Monthly Incident Calls to SFPD in 2019',
    titleTextStyle: {
        fontSize: 16,
        bold: true,
        color: 'black'
      },
    hAxis: {
      title: 'number of calls',
      minValue: 10500,
      textStyle: {
        bold: true,
        fontSize: 12,
        color: '#4d4d4d'
      },
      titleTextStyle: {
        bold: true,
        fontSize: 14,
        color: '#4d4d4d'
      }
    },
    vAxis: {
      textStyle: {
        fontSize: 14,
        bold: true,
        color: 'black'
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: 'gray'
      }
    }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      
  function selectHandler() {
      var selectedItem = chart.getSelection()[0];
      if (selectedItem) {
        var topping = data.getValue(selectedItem.row, 0);
        alert('The user selected ' + topping);
        drawAxisTickColors1()
        //document.getElementById("test").innerHTML = "HI NINA!"
        // to send a request to server -- a test for now.
        $.get('/api/ninatest', function(response) {
          console.log(response);       
        });
      }
    }
  google.visualization.events.addListener(chart, 'select', selectHandler);  
  chart.draw(data, options);




  function drawAxisTickColors1() {
    var data = google.visualization.arrayToDataTable([
    ['Incident Category', 'Number of Calls', { role: 'style' }],
    ['Larceny Theft', 3683, '736511'], ['Other Miscellaneous', 932, '736511'],
      ['Non-Criminal', 760, 'blue'], ['Malicious Mischief', 731, '736511'], 
      ['Assault', 679, 'red'], ['Burglary', 532, '736511'], ['Warrant', 453, '736511'],
    ['Motor Vehicle Theft', 417, '736511'], ['Lost Property', 417, '736511'],
    ['Recovered Vehicle', 391, '736511'], ['Fraud', 371, '736511'],
    ['Drug Offense', 311, '736511'], ['Robbery', 291, '736511'],
    ['Missing Person', 281, '736511'], ['Offences Against The Family And Children', 239, '736511'], 
    ['Disorderly Conduct', 225, '736511'], ['Suspicious Occ', 224, '736511'], 
    ['Traffic Violation Arrest', 155, '736511'], ['Miscellaneous Investigation', 111, '736511'],
    ['Other Offenses', 100, '736511'], ['Other', 95, '736511'], ['Weapons Offense', 88, '736511'], 
    ['Stolen Property', 83, '736511'], ['Weapons Carrying Etc', 81, '736511'],
      ['Forgery And Counterfeiting', 66, '736511'], ['Case Closure', 63, 'blue'],
      ['Civil Sidewalks', 62, '736511'], ['Prostitution', 52, '736511'], 
      ['Courtesy Report', 40, '736511'], ['Sex Offense', 29, '736511'],
    ['Traffic Collision', 26, '736511'], ['Arson', 25, '736511'],
    ['Embezzlement', 19, '736511'], ['Vandalism', 16, '736511'], 
    ['Family Offense', 14, '736511'], ['Suicide', 10, 'red'], ['Rape', 9, 'red'],
    ['Vehicle Impounded', 8, '736511'], ['Fire Report', 7, '736511'], ['Vehicle Misplaced', 5, '736511'], 
    ['Drug Violation', 5, '736511'], ['Liquor Laws', 4, '736511'], 
    ['Motor Vehicle Theft?', 3, '736511'], ['Gambling', 2, '736511'],
    ['Homicide', 1, 'red'],
    ['Human Trafficking (A), Commercial Sex Acts', 1, '736511']]
    );
    var options = {
      title: "January Incident Report Calls Per Category",
      width: 1500,
      height: 900,
      bar: {groupWidth: "75%"},
      legend: { position: "none" },
      vAxis: {
        scaleType: 'Log',
        textStyle : {
          fontSize: 10,
          padding: 0 
        }   
      },
      hAxis: {
        scaleType: 'mirrorLog'       
      }
    };
  
    var chart = new google.visualization.BarChart(document.getElementById('chart_div_2'));
    chart.draw(data, options);
  }  
}

  





    

// List of words
var myWords = [{word:"Suicide", size: "10"},
{word:"Malicious Mischief", size: "15"},
{word:"Miscellaneous Investigation", size: "10"},
{word:"Arson", size: "10"},
{word:"Rape", size: "10"},
{word:"Sex Offense", size: "10"},
{word:"Motor Vehicle Theft", size: "15"},
{word:"Weapons Carrying Etc", size: "10"},
{word:"Stolen Property", size: "10"},
{word:"Gambling", size: "10"},
{word:"Non-Criminal", size: "15"},
{word:"Suspicious", size: "10"},
{word:"Vehicle Misplaced", size: "10"},
{word:"Traffic Violation Arrest", size: "10"},
{word:"Other Miscellaneous", size: "15"},
{word:"Drug Offense", size: "10"},
{word:"Robbery", size: "10"},
{word:"Vandalism", size: "10"},
{word:"Liquor Laws", size: "10"},
{word:"Embezzlement", size: "10"},
{word:"Case Closure", size: "10"},
{word:"Suspicious Occ", size: "10"},
{word:"Weapons Offence", size: "10"},
{word:"Recovered Vehicle", size: "10"},
{word:"Human Trafficking (A), Commercial Sex Acts", size: "10"},
{word:"Fraud", size: "10"},
{word:"Larceny Theft", size: "49"},
{word:"Lost Property", size: "15"},
{word:"Courtesy Report", size: "10"},
{word:"Traffic Collision", size: "10"},
{word:"Vehicle Impounded", size: "10"},
{word:"Fire Report", size: "10"},
{word:"Forgery And Counterfeiting", size: "10"},
{word:"Assault", size: "15"},
{word:"Warrant", size: "15"},
{word:"Drug Violation", size: "10"},
{word:"Human Trafficking, Commercial Sex Acts", size: "10"},
{word:"Prostitution", size: "10"},
{word:"Other Offenses", size: "10"},
{word:"Missing Person", size: "10"},
{word:"Offences Against The Family And Children", size: "10"},
{word:"Civil Sidewalks", size: "10"},
{word:"Burglary", size: "15"},
{word:"Motor Vehicle Theft?", size: "10"},
{word:"Weapons Offense", size: "10"},
{word:"Family Offense", size: "10"},
{word:"Other", size: "10"},
{word:"Homicide", size: "10"},
{word:"Disorderly Conduct", size: "10"}]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  .padding(1)        //space between words
  .rotate(function() { return ~~(Math.random() * 1) * 90; })
  .fontSize(function(d) { return d.size; })      // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        .style("fill", "#393309")
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}