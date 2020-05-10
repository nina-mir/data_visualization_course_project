var keys , keys_per_month_per_hood;
var hood_dict;
let stuff, zeit;
function bubble_size_maker(month, category){
    zeit = month;
    stuff = category;
    // Compute the total number of incident calls for each of the 41 neighborhoods
    if (!(month || category)){
        zeit = null; stuff = null;
    } else {
        zeit = month;
        stuff = category;
    } 

    console.log(zeit, stuff);
    hood_dict = {};
    if (zeit == null) {
        keys = Object.keys(total_hoods_json);
    } else {
        keys = [];
        keys.push(zeit);
        console.log(keys);
    }
        // For each month
        keys.forEach(function(x) {
            keys_per_month = Object.keys(total_hoods_json[x]);
            // For each hood in that month
            keys_per_month.forEach(function(y) { 
                if (!hood_dict[y]) {hood_dict[y] = 0;} 
                if (!stuff) {
                    keys_per_month_per_hood = Object.keys(total_hoods_json[x][y]); 
                } else {
                    keys_per_month_per_hood = stuff;
                }
                // For each incident category in that hood in that month
                keys_per_month_per_hood.forEach(function(z) {
                    if (total_hoods_json[x][y][z]) {
                        hood_dict[y] = hood_dict[y] + total_hoods_json[x][y][z];
                    }
                }); 
            });        
        });
    return hood_dict;
    
}

// function bubble_size_maker(month, category){
//     // Compute the total number of incident calls for each of the 41 neighborhoods
//     if (!(month || category)){
//         console.log('LOZZZZZZZZZZZZZZZZZZZZZZZ')
//         return count_all(null, null);
//     } else {
//         console.log('LOOPPPPPPPPPPPPPPPPPPPPPP', month,category)
//         return count_all(month, category);
//     } 
// }


// function count_all(m, c) {
//     console.log(m, c);
//     hood_dict = {};
//     if (m == null) {
//         keys = Object.keys(total_hoods_json);
//     } else {
//         keys = m;
       
//         console.log(keys);
//     }
//     // For each month
//     keys.forEach(function(x) {
//         keys_per_month = Object.keys(total_hoods_json[x]);
//         // For each hood in that month
//         keys_per_month.forEach(function(y) { 
//             if (!hood_dict[y]) {hood_dict[y] = 0;} 
//             if (!c) {
//                 keys_per_month_per_hood = Object.keys(total_hoods_json[x][y]); 
//             } else {
//                 keys_per_month_per_hood = c;
//             }
//             // For each incident category in that hood in that month
//             keys_per_month_per_hood.forEach(function(z) {
//                 if (total_hoods_json[x][y][z]) {
//                     hood_dict[y] = hood_dict[y] + total_hoods_json[x][y][z];
//                 }
//             }); 
//         });        
//     });
//     //console.log(hood_dict);
//     return hood_dict;
// }