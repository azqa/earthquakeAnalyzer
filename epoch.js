function processData() {
   var allRows=epochData;
          console.log(allRows);
          var x = [], y1 = [], y2= [], y3 = [];

          for (var i=0; i<allRows.length; i++) {
          row = allRows[i];
          if(row['Country']=="CHINA")
            {
             x.push( row['Year'] );
             y1.push( row['frequency'] );
             y2.push(row['magnitude']);
             y3.push(row['damageIndex']);
            }
           }
         console.log( 'X',x, 'Y',y1, 'Y2',y2, 'Y3', y3 );
         Makeplotly(x, y1, y2, y3);
        }
        function Makeplotly(x, y1, y2, y3)
         {
             
        trace1 ={
        x: x, 
        y: y1,
        line: {width: 3}, 
        marker: {
        line: {width: 2}, 
        size: 7, 
        symbol: 'cirle'
        }, 
        mode: 'lines+markers', 
        name: 'No of eq', 
        type: 'scatter', 
        uid: '9023be', 
        yaxis: 'y1'
        };
       trace2 = {
       x: x, 
       y: y2, 
       line: {
       color: 'rgb(44, 160, 44)', 
       width: 3
       }, 
       marker: {
       line: {width: 2}, 
       size: 7, 
       symbol: 'square'
       }, 
       mode: 'lines+markers', 
       name: 'Avg. magnitude', 
       type: 'scatter', 
       uid: '7155f3', 
       yaxis: 'y2'
       };
       trace3 = {
       x: x, 
       y: y3, 
       line: {
       color: 'rgb(255, 127, 14)', 
       width: 3
       }, 
      marker: {
      line: {width: 2}, 
      size: 7, 
      symbol:'star'
     }, 
     mode: 'lines+markers', 
     name: 'Avg. damage index', 
     type: 'scatter', 
     uid: '784d8d',
     yaxis: 'y3'
    };
         
data = [trace1, trace2, trace3];
layout = {
  autosize: false, 
  bargap: 0.2, 
  bargroupgap: 0, 
  barmode: 'group', 
  boxgap: 0.3, 
  boxgroupgap: 0.3, 
  boxmode: 'overlay', 
  dragmode: 'zoom', 
  font: {
    color: '#444', 
    family: '"Open sans", verdana, arial, sans-serif', 
    size: 12
  }, 
  height: 550, 
  hidesources: true, 
  hovermode: 'x', 
  legend: {
    x: 1.04761904762, 
    y: 0.966666666667, 
    bgcolor: 'rgba(255, 255, 255, 0)', 
    bordercolor: '#444', 
    borderwidth: 0, 
    font: {
      color: '', 
      family: '', 
      size: 0
    }, 
    traceorder: 'normal', 
    xanchor: 'left', 
    yanchor: 'top'
  }, 
  margin: {
    r: 10, 
    t: 100, 
    autoexpand: true, 
    b: 80, 
    l: 80, 
    pad: 0
  }, 
  paper_bgcolor: '#fff', 
  plot_bgcolor: '#fff', 
  separators: '.,', 
  showlegend: true, 
  smith: false, 
  title: '', 
  titlefont: {
    color: '', 
    family: '', 
    size: 0
  }, 
  width: 1300, 
  xaxis: {
    anchor: 'y', 
    autorange: false, 
    autotick: true, 
    domain: [0.08, 0.8], 
    dtick: 2, 
    exponentformat: 'B', 
    gridcolor: '#eee', 
    gridwidth: 1, 
    linecolor: '#444', 
    linewidth: 1, 
    mirror: false, 
    nticks: 0, 
    overlaying: false, 
    position: 0, 
    range: [1000, 2016], 
    rangemode: 'normal', 
    showexponent: 'all', 
    showgrid: false, 
    showline: false, 
    showticklabels: true, 
    tick0: 0, 
    tickangle: 'auto', 
    tickcolor: '#444', 
    tickfont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    ticklen: 5, 
    ticks: '', 
    tickwidth: 1, 
    title: 'Year', 
    titlefont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    type: 'linear', 
    zeroline: false, 
    zerolinecolor: '#444', 
    zerolinewidth: 1
  }, 
  yaxis: {
    anchor: 'x', 
    autorange: false, 
    autotick: true, 
    domain: [0, 1], 
    dtick: 5, 
    exponentformat: 'B', 
    gridcolor: '#eee', 
    gridwidth: 1, 
    linecolor: '#444', 
    linewidth: 1, 
    mirror: false, 
    nticks: 0, 
    overlaying: false, 
    position: 0, 
    range: [1.0, 10.0], 
    rangemode: 'normal', 
    showexponent: 'all', 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    tick0: 0, 
    tickangle: 'auto', 
    tickcolor: '#444', 
    tickfont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    ticklen: 5, 
    ticks: '', 
    tickwidth: 1, 
    title: 'No. of earthquakes', 
    titlefont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    type: 'linear', 
    zeroline: true, 
    zerolinecolor: '#444', 
    zerolinewidth: 1
  }, 
  yaxis2: {
    anchor: 'x', 
    autorange: false, 
    autotick: true, 
    domain: [0, 1], 
    dtick: 5, 
    exponentformat: 'B', 
    gridcolor: '#eee', 
    gridwidth: 1, 
    linecolor: '#444', 
    linewidth: 1, 
    mirror: false, 
    nticks: 0, 
    overlaying: 'y', 
    position: 0, 
    range: [2.0, 12.0], 
    rangemode: 'normal', 
    showexponent: 'all', 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    side: 'right', 
    tick0: 0, 
    tickangle: 'auto', 
    tickcolor: '#444', 
    tickfont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    ticklen: 5, 
    ticks: '', 
    tickwidth: 1, 
    title: 'Avg. Magnitude', 
    titlefont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    type: 'linear', 
    zeroline: true, 
    zerolinecolor: '#444', 
    zerolinewidth: 1
  }, 
  yaxis3: {
    anchor: 'free', 
    autorange: false, 
    autotick: true, 
    domain: [0, 1], 
    dtick: 1, 
    exponentformat: 'B', 
    gridcolor: '#eee', 
    gridwidth: 1, 
    linecolor: '#444', 
    linewidth: 1, 
    mirror: false, 
    nticks: 0, 
    overlaying: 'y', 
    position: 1, 
    range: [1, 1000.46052631579], 
    rangemode: 'normal', 
    showexponent: 'all', 
    showgrid: true, 
    showline: false, 
    showticklabels: true, 
    side: 'right', 
    tick0: 0, 
    tickangle: 'auto', 
    tickcolor: '#444', 
    tickfont: {
      color: '', 
      family: '', 
      size: 0
    }, 
    ticklen: 5, 
    ticks: '', 
    tickwidth: 1, 
    title: 'Avg. damage index', 
    titlefont: {
      color: '', 
      family: '', 
      size: 0,
        
    }, 
    type: 'linear', 
    zeroline: true, 
    zerolinecolor: '#444', 
    zerolinewidth: 1
  }
};
             
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});
        document.querySelector('[data-title=Autoscale]').click(); 
         };
         
       processData();
       
         