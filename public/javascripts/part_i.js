// Script to plot Part I violent and property crimes figures 

var input = all_months_categories;
var violent = ["Homicide", "Rape", "Assault", "Robbery"];
var property = ["Burglary", "Larceny Theft", "Motor Vehicle Theft", "Arson"];

// TO DO add month range arguments to function part_i()
function part_i(contents, start=0, end=12){
    output = {}
        var i, j;
        for (j = 0; j < contents.length; j++){
            output[contents[j]] = 0;
            for (i = start; i < end; i++) {
                output[contents[j]] += input[i][contents[j]]
            }
        }
    return output;
}

// List Maker

function google_array_maker(data,contents, col_heads, color ){
// Data and contents needs to have the same size
// Data is obtained via a src e.g. "/data_files/all_months_crim_cat_nums.js"
// Contents is e.g. ["Homicide", "Rape", "Assault", "Robbery"];
// Col_heads is a list containing the column headers: c1, c2, c3, ...
    var googleData = [];
    var header = col_heads;
    googleData.push(header);
    var j;
    if (color) {
      for (j = 0; j < Object.keys(data).length; j++){
        var row = [contents[j], data[contents[j]], color];
        googleData.push(row) ;  
      }
    } else {
      for (j = 0; j < Object.keys(data).length; j++){
        var row = [contents[j], data[contents[j]]];
        googleData.push(row) ;
      }
    }
    return googleData;
}



google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(init);

var data_init = part_i(violent); 
var obj = { role: "style" };
var header = ["Crime", "Incident Calls Number", obj ];
var color = "#5f5c55";

function init () {
    
    var title = "Part I Violent Crimes (FBI Classification) Categories Data in 2019";
    var googleData = google_array_maker(data_init,violent, header, color);
    var chart_id_violent = "part_i_violent";
    var data = google.visualization.arrayToDataTable(googleData);
    drawChart_Part_i(data, chart_id_violent, title)
    
    // var btn = document.createElement("BUTTON");   // Create a <button> element
    // btn.innerHTML = "CLICK ME";                   // Insert text
    // $("#part_i_violent").appendtTo(btn);               // Append <button> to <body>
  


    data_init = part_i(property);
    title = "Part I Property Crimes (FBI Classification) Categories Data in 2019";
    googleData = google_array_maker(data_init,property, header, color);
    chart_id_violent = "part_i_property";
    data = google.visualization.arrayToDataTable(googleData);
    drawChart_Part_i(data, chart_id_violent, title)

}


function part_i_monthly(str, select, i) {
  let data_month, title, chart_id, googleData;
  
  if (i) {
    data_month = part_i(violent, select, select + 1);
    title = "Part I Violent Crimes Categories Data in " + str;
    chart_id = "part_i_violent";
    googleData = google_array_maker(data_month,violent, header, color);
  } else {
    data_month = part_i(property, select, select + 1);
    title = "Part I Property Crimes Categories Data in " + str;
    chart_id = "part_i_property";
    googleData = google_array_maker(data_month,property, header, color);
  }
  //let data_month = part_i(violent, select, select + 1); 
  //var title = "Part I Violent Crime Categories in " + str;
  var data = google.visualization.arrayToDataTable(googleData);
  drawChart_Part_i(data, chart_id, title)
}



function drawChart_Part_i(data, chart_id, title) {

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                    { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                    2]);

    var options = {
      title: title,
      titleTextStyle: {
        fontSize: 15,
        bold: false,
        color: 'black'
      },
      // width: 250,
      // height: 400,
      bar: {groupWidth: "55%"},
      legend: { position: "none" },
      chartArea:{top:80, width:"70%"},
      vAxis: {format:'short'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById(chart_id));

    function selectHandler() {
        var selectedItem = chart.getSelection()[0];
        if (selectedItem) {
          var topping = data.getValue(selectedItem.row, 0);
          //alert('The user selected ' + topping);
        }
    }
      
    google.visualization.events.addListener(chart, 'select', selectHandler); 

    chart.draw(view, options);
}


function daraw_chart_monthly_cats(topping, index) {

  // function google_array_maker(data,contents, col_heads, color ){
  
  var data_input = input[index];
  var keys = Object.keys(data_input);
  var googleData = google_array_maker(data_input,keys, header, color);

  var data = google.visualization.arrayToDataTable(googleData);
  var title = "Total Incident Calls numbers in " + topping;
  var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
  var options = {
    title: title,
    width: 1300,
    height: 900,
    bar: {groupWidth: "75%"},
    legend: { position: "none" },
    hAxis: {
      textStyle : {
        fontSize: 10,
        padding: 1 
      },   
    },
    vAxis: { logscale: true,
      textStyle : {
        fontSize: 10,
        padding: 1 
      } 
    },
    chartArea:{top:80, width:"95%"},
    annotations: {
      alwaysOutside: true,
      textStyle: {
          fontSize: 14,
          auraColor: 'none'
      }}
  
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div_2'));
  chart.draw(view, options);
}  