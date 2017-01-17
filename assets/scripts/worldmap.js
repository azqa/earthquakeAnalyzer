var map;
      function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        script.src = 'assets/data/damage.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }//initMap


        var labels=[]; 
        var x=[];
        var color=[];
        var pinColors=[];
         // Loop through the results array and place a marker for each  
         var allR=colordata;
      window.eqfeed_callback = function(results) {
        var colr=[];
        for (var i = 0; i < results.features.length; i++) {
          var latLng = new google.maps.LatLng(results.features[i].LATITUDE, results.features[i].LONGITUDE);
          labels[i]= {
			  'country' : results.features[i].COUNTRY,
			  'tsunami' : results.features[i].FLAG_TSUNAMI
		  };
      for (var j=0; j<allR.length; j++){
      if(results.features[i].FLAG_TSUNAMI=='Tsu')
      {
         if(results.features[i].COUNTRY == allR[j].Country)
          {
            if(allR[j].colr=="dark")
            pinColors[i]="0000A0"; 
            else if(allR[j].colr=="light")
              pinColors[i]="6666FF";
            else
              pinColors[i]="0000FF";
          }        
      }//if
      else{

        if(results.features[i].COUNTRY == allR[j].Country)
          {
            
            if(allR[j].colr=="dark")
            pinColors[i]="A00000"; 
            else if(allR[j].colr=="light")
              pinColors[i]="FF6666";
            else
              pinColors[i]="FF0000";

          } 
       }//else
     }//inside for
          var tmp={
            'lat':results.features[i].LATITUDE,
            'lng': results.features[i].LONGITUDE
          };
          x.push(tmp);
         
        }//for
       
      /* var colourname=[];
      
      for (var i=0; i<allR.length; i++) {
        if((all[i].val > 60 ) && (all[i].val < 90850))
          colourname[i]="light"+colr[i];
        else if ((all[i].val > 90850 ) && (all[i].val < 181630))
          colourname[i] = colr[i];
        else
          colourname[i] = "dark"+colr[i];
      }//for

      
*/
      var markers = x.map(function(location, i) {
        var mark = new google.maps.Marker({
            position: location,
			index: i,
            color: 'blue', 
            icon: new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColors[i],
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
