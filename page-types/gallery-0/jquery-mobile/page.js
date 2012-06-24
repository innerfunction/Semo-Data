////Onecolumn view//////
// (function(window, PhotoSwipe){
		
//			document.addEventListener('DOMContentLoaded', function(){
			
//				var
//					options = {},
//					instance = PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), options );
			
//			}, false);
//		}(window, window.Code.PhotoSwipe));
//// End Onecolumn view//////////
(function(window, $, PhotoSwipe){
			
			$(document).ready(function(){
				
				//$('div.gallery-page')
				//You must put in below id selector the page id in test
				//It's a problem, but for now it's working
				$('#page-5')
					.live('pageshow', function(e){
						
						var 
							currentPage = $(e.target),
							options = {},
							photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options,  currentPage.attr('id'));
							
						return true;
						
					})
					
					.live('pagehide', function(e){
						
						var 
							currentPage = $(e.target),
							photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));

						if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
							PhotoSwipe.detatch(photoSwipeInstance);
						}
						
						return true;
						
					});
				
			});
		
		}(window, window.jQuery, window.Code.PhotoSwipe));
