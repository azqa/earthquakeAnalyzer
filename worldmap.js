var map;
      function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        script.src = 'damage.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }//initMap


        var labels=[]; 
        var x=[];
        var color=[];
        var pinColors=[];
         // Loop through the results array and place a marker for each  
      window.eqfeed_callback = function(results) {
        
        for (var i = 0; i < results.features.length; i++) {
          var latLng = new google.maps.LatLng(results.features[i].LATITUDE, results.features[i].LONGITUDE);
          labels[i]= {
			  'country' : results.features[i].COUNTRY,
			  'tsunami' : results.features[i].FLAG_TSUNAMI
		  };

          var tmp={
            'lat':results.features[i].LATITUDE,
            'lng': results.features[i].LONGITUDE
          };
          x.push(tmp);
         
        }//for
        var allRows=epochData;
        console.log(allRows);
        
        var damagedata=[];


        for(var i=0; i<allRows.length; i++)
        {
           row = allRows[i];
          var cntry = row.Country;
          if(damagedata.indexOf(cntry) == -1){
            console.log(cntry);
            damagedata.push({cntry : "0"});
          }//if
        }
        console.log(damagedata);



       for(var i=0; i<allRows.length; i++)
        {
          row = allRows[i];
          var cntry = row.Country;
          //(cntry in damagedata)
          //damagedata.indexOf(cntry) == -1
          if(damagedata.indexOf(cntry) == -1){
             console.log("in there");


   /* if( damagedata.hasOwnProperty( el ) ) {
     var accumulatedsum = parseFloat( damagedata[el] );
    }
  */
            var accumulatedsum=damagedata[cntry];
            console.log("accsum is "+damagedata[cntry]);
            var newvalue= row.damageIndex/row.magnitude;
            console.log("newvalue is "+ newvalue);
            //console.log(accumulatedsum+newvalue);
            damagedata[cntry]= accumulatedsum+newvalue; }//if
          else
          { console.log("in here");
             var cntry = row.Country;
              damagedata.push({cntry : "0"});
          }//else
        }//for


          


console.log(allRows[0].damageIndex);
 console.log(damagedata);
// console.log();
 console.log(damagedata["CHINA"]);

     // console.log(x);
var icon2 = "imageB.jpg";

      var markers = x.map(function(location, i) {
        var mark = new google.maps.Marker({
            position: location,
			index: i,
            color: 'blue', 
            icon: new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColors[i],
              new google.maps.Size(21, 34),
              new google.maps.Point(0,0),
              new google.maps.Point(10, 34))

          });
		  var label = labels[mark.index].country;
       var contentString = "<span> <b>Place:</b> " + label+ 
	   "<br/> <b>Tsunami? </b> " + (labels[mark.index].tsunami=='Tsu'?'Yes':'No') + 
	   "<br/> <b>Frequency: </b>"+ composite[label].frequency + 
	   "<br/> <b>Avg. Magnitude: </b>" + composite[label].magnitude + 
	   "<br/> <b>Avg. Damage:</b> $" +  composite[label].damage + " M</span>";

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

		mark.addListener('click', function() {

        redrawPlot(label,false);
          });
       mark.addListener('mouseout', function() {

        if (infowindow) {
         infowindow.close();
          }
          });
        mark.addListener('mouseover', function() {
        infowindow.open(map, mark);
        });

return mark;
        });
        
         
      var markerCluster = new MarkerClusterer(map, markers,
           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
