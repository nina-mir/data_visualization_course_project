function data_tbler(data) {
  var data_tbl = new google.visualization.DataTable();
  data_tbl.addColumn('string', 'Resolution Type');
  data_tbl.addColumn('number', 'Frequency');
  var keys = Object.keys(data);
  for(let i = 0 ; i < keys.length; i++) {
    data_tbl.addRow([keys[i], {v: data[keys[i]]}]);
  }
  return data_tbl;
}


function cb(err, res, body){
  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(init);


  function init(){
    var data = JSON.parse(body.responseText);
    var data_tbl = data_tbler(data);
    var cssClassNames = {headerRow:'table_headers',tableCell: 'big_bold_class'};
    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data_tbl, {'title': '2019 Incidents Resolutions Data','cssClassNames': cssClassNames, allowHtml: true, showRowNumber: false, width: '100%', height: '60%'});
    $('#table_title').html(
      "Overall 2019 Incident Calls Resolutions <br>") 
      $('#more_info').html("Note: <i>Exceptional</i> means SFPD could not make any arrest due to out of control circumstanes. More <a style = 'color:blue;' href = 'https://ucr.fbi.gov/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/offenses-known-to-law-enforcement/clearances/clearancetopic_final'>info.</a>")
  }
};

function foo(cb){
  $.get('/api/resolutions', {"range": "Global"},  cb);
}

 
foo(cb);


function table_rez(topping, index) {
  
  function cb_month(err, res, body){
  
  
    var data = JSON.parse(body.responseText);
    var data_tbl = data_tbler(data);
    var cssClassNames = {headerRow:'table_headers',tableCell: 'big_bold_class'};
    var table = new google.visualization.Table(document.getElementById('table_div'));
    var title = 'Incidents Resolutions Data in ' + topping + ' 2019' ;
    table.draw(data_tbl, {'title': title,
      'cssClassNames': cssClassNames, allowHtml: true, showRowNumber: false, width: '100%', height: '60%'});
    $('#table_title').html(title) 
    //   $('#more_info').html("Note: <i>Exceptional</i> means SFPD could not make any arrest due to out of control circumstanes. More <a style = 'color:blue;' href = 'https://ucr.fbi.gov/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/offenses-known-to-law-enforcement/clearances/clearancetopic_final'>info.</a>")
    
  };
  
  function foo_(cb){
    $.get('/api/resolutions', {"range": topping},  cb);
  }
  
   
  foo_(cb_month);
}





// function data_sankey(data) {
//   var data_snky = new google.visualization.DataTable();
//   data_snky.addColumn('string', 'From');
//   data_snky.addColumn('string', 'To');
//   data_snky.addColumn('number', 'Weight');
//   data_snky.addColumn({type: 'string', role: 'tooltip'});
//   var keys = Object.keys(data);
//   var sum = 0;
//   for(let i = 0 ; i < keys.length; i++) {
//     sum = sum + data[keys[i]] ;
//   }

//   for(let i = 0 ; i < keys.length; i++) {
//     var prozent = data[keys[i]] /sum;
//     prozent = prozent.toString();
//     data_snky.addRow(['Incident Call Numbers',keys[i], data[keys[i]], prozent]);
//   }
//   return data_snky;
// }

// function cb_snky(err, res, body){
//   google.charts.load('current', {'packages': ['sankey']});  
//   google.charts.setOnLoadCallback(init);
//    // Sets chart options.
//    var options = {
//     width: 200,
//     height: 300,
//     sankey: {
//       node: { colors: [ '#a61d4c' ] },
//       link: { color: { stroke: 'blue', strokeWidth: 1 } },
//     }
//   };

//   function init(){
//     var data = JSON.parse(body.responseText);
//     var data_snky = data_sankey(data);
//     // var table = new google.visualization.Table(document.getElementById('table_div'));
//     var chart = new google.visualization.Sankey(document.getElementById('table_div'));
//     chart.draw(data_snky, options);

//   }
// };
 
// foo(cb_snky);


