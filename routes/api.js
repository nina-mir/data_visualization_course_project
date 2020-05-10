var express = require('express');
var router = express.Router();
// Include fs module
var fs = require('fs');
// To parse my url
var url = require('url');

// column selctor 
const arrayColumn = (arr, n) => arr.map(x => x[n]);

function round_to_precision(x, precision) {
  var y = +x + (precision === undefined ? 0.5 : precision/2);
  return y - (y % (precision === undefined ? 1 : +precision));
}



router.get('/resolutions', function (req, res) {    
    // To parse my url further
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var name = query.range;

    var input_data = fs.readFileSync('public/data_files/res.json','utf8');
    var json = JSON.parse(input_data)

    if (name === "Global"){
        return res.send(json[name]);     
    } else  {
        return res.send(json[name]);
    }
});

router.get('/monthly_total_calls', function (req, res) {    
    // To parse my url further
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    //console.log(query.name);    
    var input_data = fs.readFileSync('public/data_files/monthly_total_calls.json','utf8');
    //console.log(input_data);
    res.send(input_data);
});

router.get('/top_cities', function (req, res) {    
    // To parse my url further
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    //console.log(query.name);    
    var input_data = fs.readFileSync('public/data_files/hoods_year_data.json','utf8');
    //console.log(input_data);
    var json = top_hood_wrangling(input_data)


    res.json(json);
});

router.get('/crime_incident_categories', function (req, res) {

    fs.readFile('public/data_files/all_months_crim_cat_nums.json','utf8', (err, jsonString) => {
        if (err) {
            console.error(err)
            return
        }
        var obj = JSON.parse(jsonString);

    })
        
    
    var data = {
        'cityName': 'APRIL 18'
    };

    res.json(data);
});


function top_hood_wrangling (input_data) {

    var obj = JSON.parse(input_data)
    // Create items array
    var items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    // Create a new array with only the first 15 items
    console.log(items);
    var sublist = items.slice(0,15);
    //////
    var sum = 0;
    for (x of items){
        sum = sum + x[1];
    }
    console.log(sum)
    /////
    var col1 = arrayColumn(items,1);
    var col2 = arrayColumn(items,1);

    var percents = sublist.map(function(v){
        return [v[0], round_to_precision((v[1]/sum), 0.01)];
    }); 
    console.log(percents)

    // make into a json
    var new_obj = new Object();
    for (index = 0; index < percents.length; index++) { 
        var str = percents[index][0];
        new_obj[str]=percents[index][1];
    } 

    console.log(new_obj);
    //console.log(arrayColumn(percents,0));
    return new_obj;
}

/* test nina GET stuff */
router.get('/ninatest', function (req, res) {
    
    // const test_fil_reading = require('./test.json');
    console.log("ninatest API!");
    //console.log(test_fil_reading)
    var data = {
        'cityName': 'ninatestAPI',
        'population': 237888,
        'income': 135430
    };

    res.json(data);
});

module.exports = router;
