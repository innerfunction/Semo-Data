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
				
				$( 'div' ).live( 'pagehide',function(event, ui){
					//console.log(ui.nextPage);
					//console.log(ui.nextPage.find('.gallery'));
					var galleryExists = ui.nextPage.find('.gallery');
					
					//console.log(galleryExists.length);
					//photoSwipeInstance = null;

					if(galleryExists.length>0){
						var
							currentPage = ui.nextPage,
							options = {},
							photoSwipeInstance = $("ul.gallery a", currentPage).photoSwipe(options,  currentPage.attr('id'));
							return true;
					}
				});

				$( 'div' ).live( 'pageshow',function(event, ui){
					//console.log(ui.prevPage);
					//console.log(ui.prevPage.find('.gallery'));
					var galleryExists = ui.prevPage.find('.gallery');
					
					//console.log(galleryExists.length);
					

					if(galleryExists.length>0){
						var
							currentPage =  ui.prevPage,
							photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));
						if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
							PhotoSwipe.detatch(photoSwipeInstance);
						}
						return true;
					}
				});

			});
		
		}(window, window.jQuery, window.Code.PhotoSwipe));
