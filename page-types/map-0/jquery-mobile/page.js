//////////////////////////////////////////////////////////////////////////////////////////
////////////  Google Maps Script  ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
        // $(function(){
                
        //         var coordinates = $('#map_canvas').attr('data-coordinates').split(',');
        //         initializeMap(coordinates[0],coordinates[1]);
        // });

        // function initializeMap(lat,lng) {
        //         var latlng = new google.maps.LatLng(lat, lng);
        //         var myOptions = {
        //                 zoom: 8,
        //                 center: latlng,
        //                 mapTypeId: google.maps.MapTypeId.ROADMAP
        //         };

        //         var infoWnd = new google.maps.InfoWindow();
        //         var address = $('#map_canvas').attr('data-address');

        //         var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
        //         //var crosshairLayer = new google.maps.KmlLayer('http://freezoo.alwaysdata.net/justcrosshair2.kml',
        //         //{preserveViewport: true});

        //         //crosshairLayer.setMap(map);

        //         google.maps.event.trigger(map, 'resize');
        //         map.setZoom( map.getZoom() );

        //         var marker = new google.maps.Marker({'position': latlng});
        //         marker.setMap(map);
        //         marker.setAnimation(google.maps.Animation.DROP);

        //         google.maps.event.addListener(marker, "click", function() {
        //                 infoWnd.setContent(address);
        //                 infoWnd.open(map, marker);
        //         });
        // }

//////////////////////////////////////////////////////////////////////////////////////////
//////////// End Google Maps /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
var map;

function createQuakeEventMarker(quakeEventLatlng) {
    return new google.maps.Marker({position: quakeEventLatlng, map: map});
}

function setupMap(lat, lng, mapZoom, showOverviewControl) {
    var mapLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
        zoom: mapZoom,
        center: mapLatlng,
        overviewMapControl: showOverviewControl,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP

        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function initialize() {
        var infoWnd = new google.maps.InfoWindow();
        var coordinates = $('#map_canvas').attr('data-coordinates').split(',');
        var address = $('#map_canvas').attr('data-address');
        setupMap(coordinates[0],coordinates[1], 16, true);
        var quakeEventLatlng = new google.maps.LatLng(coordinates[0],coordinates[1]);
        var marker = createQuakeEventMarker(quakeEventLatlng);
        marker.setAnimation(google.maps.Animation.DROP);

        google.maps.event.addListener(marker, "click", function() {
                infoWnd.setContent(address);
                infoWnd.open(map, marker);
       });
}

$( 'div' ).live( 'pagehide',function(event, ui){
        //console.log(ui.nextPage);
        //console.log(ui.nextPage.find('.map_canvas'));
        var mapExists = ui.nextPage.find('.map_canvas');

        //console.log(mapExists.length);

        if(mapExists.length>0){
                if (map === undefined) {
                        initialize();
                }
        } else {
                map = undefined;
        
        }
});

// // Initialize the map when the jQuery Mobile pageshow event is triggered
// // id Selector depends on the name of the data-role="page". This is a problem, nut for now it's working
// $('#page-2').live("pageshow", function() {
//         if (map == null) {
//                 initialize();
//         }
// });
// $('#page-2').live("pagehide", function() {
//         map = null;
// });
