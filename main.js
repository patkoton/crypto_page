document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;	

          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
              mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
  })
}); 



// GrApH
window.onload = function () {

  var dataPoints = [];
  
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title: {
      text: "",

    },
    subtitles: [{
      text: ""
    }],
    axisX: {
      interval: 1,
      valueFormatString: "MMM",
      title: "Month",
      titleFontSize: 20,
      titleFontWeight: "bold",
      labelFontSize: 15
    },
    axisY: {
      prefix: "$",
      interval: 15,
      title: "Price",
      titleFontSize: 20,
      titleFontWeight: "bold",
      labelFontSize: 15
    },
    toolTip: {
      content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
    },
    options: { 
      layout: { 
        margin: { 
          top: 50 
        } 
      } 
    }, 
    data: [{
      type: "candlestick",
      yValueFormatString: "$##0.00",
      dataPoints: dataPoints
    }],
  });
  
  $.get("https://canvasjs.com/data/gallery/javascript/netflix-stock-price.csv", getDataPointsFromCSV);
  
  function getDataPointsFromCSV(csv) {
    var csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);
    for (var i = 0; i < csvLines.length; i++) {
      if (csvLines[i].length > 0) {
        points = csvLines[i].split(",");
        dataPoints.push({
          x: new Date(
            parseInt(points[0].split("-")[0]),
            parseInt(points[0].split("-")[1]),
            parseInt(points[0].split("-")[2])
          ),
          y: [
            parseFloat(points[1]),
            parseFloat(points[2]),
            parseFloat(points[3]),
            parseFloat(points[4])
          ]
        });
      }
    }
    chart.render();
  }
  
  }




// RadialBar Angle
  var options1 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [85, 60, 67, 50],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#333',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          total: {
            show: false,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['Income', 'Income', 'Income', 'Income']
  };
  
  new ApexCharts(document.querySelector("#chart1"), options1).render();

  
  // Line Chart
  var options = {
    chart: {
      height: 350,
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
    },
    series: [{
      name: 'series 1',
      data: [60,60,55,60,105,60,70,91,140]
    }, {
      name: 'series 2',
      data: [50,40,35,50,140,70,60,81,105]
    }],
    xaxis: {
      categories: ["Week 01","Week 02","Week 03","Week 04","Week 05","Week 06","Week 07", "Week 08","Week 09"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  
  
  