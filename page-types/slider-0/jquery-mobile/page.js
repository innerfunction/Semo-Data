$(function () {

	// Slideshow 1:  basic, automatically switches
	$("#slider").responsiveSlides({
		maxwidth: 800,
		speed: 800
	});
	
	//Slideshow 2: slide with pages
	$("#slider2").responsiveSlides({
		auto: false,
		pager: true,
		speed: 300,
		maxwidth: 540
	});
	
	//Slideshow 3: slide with arrows and caption text
	$("#slider3").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "callbacks"
	});
		
	// Slideshow 4: vertically centered on both sides and bottoms buttons pagination
	$("#slider4").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 500,
		namespace: "centered-btns"
	});
	
	// Slideshow 5: transparent arrows over the left and right side
	$("#slider5").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		speed: 500,
		namespace: "transparent-btns"
	});
	
	// Slideshow 6: 100% height with vertically centered arrows
	$("#slider6").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "large-btns"
	});
	

});