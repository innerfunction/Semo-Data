//By Chris Coyier & tweaked by Mathias Bynens

$(function() {

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("center");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)
            
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized
    // (You'll probably want to debounce this)
    $(window).resize(function() {

        var newWidth = $fluidEl.width();
        
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth /(16/9));

        });

    // Kick off one resize to fix all videos on page load
    }).resize();

});

$(document).ready(function(){
	$( 'div' ).live( 'pagehide',function(event, ui){
        //console.log(ui.nextPage);
        //console.log(ui.nextPage.find('.gallery'));
        var youTubeExists = ui.nextPage.find('.video');
        
        //console.log(galleryExists.length);
        //photoSwipeInstance = null;

        if(youTubeExists.length>0){
            console.log('youtube');
            var $video = $("iframe[src^='http://www.youtube.com']");
            var widthParent = $video.parent().parent().width();
            console.log(widthParent);
            $video
                .width(widthParent)
                .height(widthParent /(16/9));
        }
    });

});
