var width = $("#map_map").width();
var  height = width*(0.8);

var svg = d3.select('#map_map')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var g = svg.append('g');

var scale = 300000,
  latitude = 37.7750,
  longitude = -122.4183;


var albersProjection = d3.geoAlbers()
  .scale(scale)
  .rotate([-longitude, 0])
  .center([0, latitude])
  .translate([width/2, height/2]);

var geoPath = d3.geoPath()
    .projection(albersProjection);


// Define the div for the tooltip
var div = d3.select("#answer").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

g.selectAll('path')
  .data(neighborhoods_json.features)
  .enter()
  .append('path')
  .attr('fill', 'black')
  .attr('d', geoPath)
  .attr('fill-opacity', function(d,i){return 1;})
  .on("mouseover",function(d) {
    console.log(d.properties.nhood, d3.select(d));
    d3.select(this)
      .classed("active",true);
    div.transition()		
                .duration(200)		
                .style("opacity", .9);		
    div	.html(d.properties.nhood + "<br/>")	
        .style("left", 0 + "px")		
        .style("top", 0 + "px");
  })
  .on("mouseout",function(d){
    d3.select(this)
      .classed("active",false);
    div.transition().duration(500)		
                .style("opacity", 0);	
  });


