var data,layout;
var x = [], y1 = [], y2= [], y3 = [];
function processData(countryName,init) {	
x = [], y1 = [], y2= [], y3 = [];
   var allRows=epochData;
          console.log(allRows);
          

          for (var i=0; i<allRows.length; i++) {
          row = allRows[i];
          if(row['Country']==countryName)
            {
             x.push( row['Year'] );
             y1.push( row['frequency'] );
             y2.push(row['magnitude']);
             y3.push(row['damageIndex']);
            }
           }
         console.log( 'X',x, 'Y',y1, 'Y2',y2, 'Y3', y3 );
         MakePlot(x, y1, y2, y3);
		 if(init){
		 Highcharts.chart('epoch',layout);
		 }
 }
        function MakePlot(x, y1, y2, y3)
         {  
	    layout = {
        chart: {
            zoomType: 'xy'
        },
        title: {
			 text:'',
            style: {
                color: '#404040',
				fontWeight: 'bold'
            }
        },
       
        xAxis: [{
            categories: x,
            crosshair: true,
			labels: {
                format: '{value}',

                style: {
                    color: '#404040',
					fontSize:'11px',
				    fontWeight: 'bold'
                }
			}
        }],
        yAxis: [{ // 1st yAxis
            title: {
				enabled: false,
                text: 'Frequency',
                style: {
                    color: '#4c9696',
					fontSize:'10px'
                }
            },
            labels: {
                format: '{value}',

                style: {
                    color: '#4c9696',
					fontSize:'11px',
				    fontWeight: 'bold'
                }
            },
			crosshair: true

        }, { // 2nd yAxis
            title: {
				enabled: false,
                text: 'Intensity',
                style: {
                    color: '#a94763',
					fontSize:'10px'
					
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#a94763',
					fontSize:'11px',
					fontWeight: 'bold'
                }
            },
            //opposite: true,
			crosshair: true
        },
		{ // 3rd yAxis
            labels: {
				
                format:'{value}',              
                style: {
                    color: '#461072',
					fontSize:'11px',
					fontWeight: 'bold'
                }
            },
            title: {
				enabled: false,
                text: 'Damage',
                style: {
                    color: '#461072',
					fontSize:'11px'
                }
            },
            //opposite: true,
			crosshair: true

        }],
        tooltip: {
            shared: true
        },
        legend: {
             itemStyle: {
                 fontSize:'11px'
              },
            layout: 'horizontal',
            align: 'left',
            x: 170,
            verticalAlign: 'top',
            y: 55,
			borderWidth: 0.5,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#F0F0F0'
        },
        series: [{
            name: 'Frequency',
            type: 'spline',
            yAxis: 0,
            align: 'right',
            data: y1,
			color: '#4c9696',
			marker: {
                enabled: true
            },
            tooltip: {
                //valueSuffix: ' mm'
            }

        }, {
            name: 'Intensity',
            type: 'spline',
            yAxis: 1,
            data: y2,
			color: '#a94763',
            marker: {
                enabled: true
            },
            dashStyle: 'spline',
            tooltip: {
                //valueSuffix: ' mb'
            }

        }, {
            name: 'Damage',
            type: 'spline',
			yAxis: 2,
            data: y3,
			color: '#461072',
			marker: {
                enabled: true
            }
            
        }]
    }
		 };     

function redrawPlot(countryName,init)
{	

processData(countryName,init);
$('#epoch').highcharts().setTitle(null, { text: countryName });
if(!init)
{
    
	$('#epoch').highcharts().xAxis[0].categories = x;
	$('#epoch').highcharts().series[0].setData(y1,false);
    $('#epoch').highcharts().series[1].setData(y2,false);
    $('#epoch').highcharts().series[2].setData(y3,true);

}
}
redrawPlot("PAKISTAN",true);
     
         