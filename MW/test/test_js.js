function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: 16.2783322, lng: 80.4396821
    },
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var Poly = new Array();
  for (var i = 0; i < Lat.length; i++) {
    var pos = new google.maps.LatLng(Lat[i], Lng[i]);
    Poly.push(pos);
  }
  var flowlineNonGeodesic = new google.maps.Polyline({
    path: Poly,
    geodesic: false,
    strokeColor: "#00FF00",
    strokeOpacity: .8,
    strokeWeight: 2,
    map: map
  });
  for (var j = 0; j < Poly.length; j++) {
    if (j % 2 == 0) {
      var poly = Poly.slice(j, j + 2);
      var flowline = new google.maps.Polyline({
        path: poly,
        geodesic: true,
        strokeColor: "#DC143C",
        strokeOpacity: .8,
        strokeWeight: 2,
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
      });
      flowline.setMap(map);
    }
  }
}
google.maps.event.addDomListener(window, "load", initMap);

var Lat = [42.365843, 37.756066, 47.450431, 28.431450, 38.898793, 34.040667];
var Lng = [-71.009625, -122.440175, -122.308806, -81.308094, -77.037227, -118.289537];

var lineSymbol = {
  path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
};