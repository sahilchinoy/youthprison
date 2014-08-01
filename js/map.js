var colors = ["white", "#FFE6E6","#FFCCCC","#FFB2B2","#FF9999","#FF8080","#FF6666","#FF4D4D","#FF3333","#FF1919"];
var labels = ["0","1 to 25","26 to 50","51 to 100","101 to 150","151 to 200","201 to 250","251 to 300","301 to 350","351+"];

function scaler(state_value) {
  if(state_value == 0) {
    return colors[0];
  }
  else if(state_value>0 && state_value<26){
    return "#FFE6E6";
  }
  else if(state_value>25 && state_value<51){
    return "#FFCCCC";
  }
  else if(state_value>50 && state_value<101){
    return "#FFB2B2";
  }
  else if(state_value>100 && state_value<151){
    return "#FF9999";
  }
  else if(state_value>150 && state_value<201){
    return "#FF8080";
  }
  else if(state_value>200 && state_value<251){
    return "#FF6666";
  }
  else if(state_value>250 && state_value<301){
    return "#FF4D4D";
  }
  else if(state_value>300 && state_value<351){
    return "#FF3333";
  }
  else{
    return "#FF1919";
  }
}

var percent_colors = ["#E8E8E8","#10A84B","#3FB96F","#6FCA93","#9FDCB7","#FFD8D8","#FFB2B2","#FF8C8C","#FF6565","#FF3F3F", "#FF1919"];

var percent_labels = ["N/A","-100% to -75%","-74% to -50%","-49% to -25%","-24% to 0%","1% to 25%","26% to 50%","51% to 75%","76% to 100%","101% to 125%","126%+"];

function scalePercent(percent) {
  if(percent == 'N/A') {
    return "#E8E8E8";
  }
  else if(percent>-101 && percent<-74){
    return "#10A84B";
  }
  else if(percent>-75 && percent<-49){
    return "#3FB96F";
  }
  else if(percent>-50 && percent<-24){
    return "#6FCA93";
  }
  else if(percent>-25 && percent<1){
    return "#9FDCB7";
  }
  else if(percent>0 && percent<26){
    return "#FFD8D8";
  }
  else if(percent>25 && percent<51){
    return "#FFB2B2";
  }
  else if(percent>50 && percent<76){
    return "#FF8C8C";
  }
  else if(percent>75 && percent<101){
    return "#FF6565";
  }
  else if(percent>100 && percent<126){
    return "#FF3F3F";
  }
  else{
    return "#FF1919";
  }
}

var app = angular.module('main', []);
app.controller("controller", function($scope) {
  var active;
  var legend;

  this.checkActive = function() {
    return active;
  }

  this.checkLegend = function() {
    return legend;
  }

  this.changeColors = function(year) {
    d3.selectAll('path').attr('fill', function(d) {
    var abbr = this.id;
    var state_value = 0;

    $.each(state_data, function(key, data){
      if(data.state == abbr) {
        if(year == "y2009") {
          active = 'y2009';
          legend = 'Y';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.y2009
            }
          })
          state_value = scaler(data.y2009);

        }
        else if(year == "y2010") {
          active = 'y2010';
          legend = 'Y';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.y2010
            }
          })
          state_value = scaler(data.y2010);
        }
        else if(year == "y2011") {
          active = 'y2011';
          legend = 'Y';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.y2011
            }
          })
          state_value = scaler(data.y2011);
        }
        else if(year == "y2012") {
          active = 'y2012';
          legend = 'Y';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.y2012
            }
          })
          state_value = scaler(data.y2012);
        }
        else if(year == "c0910") {
          active = 'c0910';
          legend = 'C';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.c0910 + '%'
            }
          })
          state_value = scalePercent(data.c0910);
        }
        else if(year == "c1011") {
          active = 'c1011';
          legend = 'C';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.c1011 + '%'
            }
          })
          state_value = scalePercent(data.c1011);
        }
        else if(year == "c1112") {
          active = 'c1112';
          legend = 'C';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.c1112 + '%'
            }
          })
          state_value = scalePercent(data.c1112);
        }
        else if(year == "c0912") {
          active = 'c0912';
          legend = 'C';
          $('#' + abbr).qtip({
            style: 'qtip-bootstrap',
            position: {
              my: 'left center',
              at: 'right center'
            },
            content: {
              text: data.state_name + ': ' + data.c0912 + '%'
            }
          })
          state_value = scalePercent(data.c0912);
        }
      }
    })
    return state_value;
    })
    }

    this.changeColors('y2009');

  })


var w = 200;
var h = 600;

var svg = d3.select("#legendY")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var legend = svg.append("g")
  .attr("class", "legend")
  .attr("x", w - 65)
  .attr("y", 50)
  .attr("height", 100)
  .attr("width", 100);

legend.selectAll('g').data(colors)
  .enter()
  .append('g')
  .each(function(d, i) {
    var g = d3.select(this);
    g.append("rect")
      .attr("x", w-135)
      .attr("y", 21+i*40)
      .attr("width", 20)
      .attr("height", 20)
      .attr("stroke","black")
      .attr("stroke-width", 1)
      .style("fill", colors[i]);
    
    g.append("text")
      .attr("x", w-100)
      .attr("y", i * 40 + 36)
      .attr("height",30)
      .attr("width",100)
      .style("fill", "black")
      .text(labels[i]);
  });

var svg2 = d3.select("#legendC")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var legend2 = svg2.append("g")
  .attr("class", "legend")
  .attr("x", w - 65)
  .attr("y", 50)
  .attr("height", 100)
  .attr("width", 100);

legend2.selectAll('g').data(percent_colors)
  .enter()
  .append('g')
  .each(function(d, i) {
    var g = d3.select(this);
    g.append("rect")
      .attr("x", w-135)
      .attr("y", 21+i*40)
      .attr("width", 20)
      .attr("height", 20)
      .attr("stroke","black")
      .attr("stroke-width", 1)
      .style("fill", percent_colors[i]);
    
    g.append("text")
      .attr("x", w-100)
      .attr("y", i * 40 + 36)
      .attr("height",30)
      .attr("width",100)
      .style("fill", "black")
      .text(percent_labels[i]);
  });