//////////////////////////////////////////////////////////////////////////////////////////
////////////  Google Maps Script  ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
        $(function(){
                
                var coordinates = $('#map_canvas').attr('data-coordinates').split(',');
                initializeMap(coordinates[0],coordinates[1]);
        });

        function initializeMap(lat,lng) {
                var latlng = new google.maps.LatLng(lat, lng);
                var myOptions = {
                        zoom: 8,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var infoWnd = new google.maps.InfoWindow();
                var address = $('#map_canvas').attr('data-address');

                var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
                //var crosshairLayer = new google.maps.KmlLayer('http://freezoo.alwaysdata.net/justcrosshair2.kml',
                //{preserveViewport: true});

                //crosshairLayer.setMap(map);

                google.maps.event.trigger(map, 'resize');
                map.setZoom( map.getZoom() );

                var marker = new google.maps.Marker({'position': latlng});
                marker.setMap(map);
                marker.setAnimation(google.maps.Animation.DROP);

                google.maps.event.addListener(marker, "click", function() {
                        infoWnd.setContent(address);
                        infoWnd.open(map, marker);
                });
        }

//////////////////////////////////////////////////////////////////////////////////////////
//////////// End Google Maps /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////