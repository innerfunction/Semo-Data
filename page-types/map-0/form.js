exports.init = function( $form ) {
    console.log(' ****_!!! Setting up google map');
    //$.nub.init( $form );
    $.nub.init( document.body );
    console.log('**x**RUN JS MAP');

    $('#map_canvas').ready(initialize)
    
    function initialize() {
        console.log('**x** INITIALIZR JS MAP');

        var opts = {
            zoom: 8,
            center: new google.maps.LatLng(40.396764,-3.713379),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map( document.getElementById('map_canvas'), opts );

        var marker;

        function placeMarker(location) {
            if ( marker ) {
                marker.setPosition(location);
            } else {
                marker = new google.maps.Marker({
                    position: location,
                    map: map
                });
            }
            var coord = location.lat()+","+location.lng()
            document.getElementById('mapURI').value = location.lat() + ', ' + location.lng()
        }

        google.maps.event.addListener(map, 'click', function(event) {
                placeMarker(event.latLng);
        });
    }
    
};
exports.validate = function( page ) {
};
