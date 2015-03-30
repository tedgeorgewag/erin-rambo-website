//Animate gallery scroller left or right with less / more nav buttons
$(document).ready(function() {
	//Make array of images
	var galImgArray = $('.gal-img').toArray();
	var i = 0;

	$('#scroll-right').click(function() {
		//Use width of currently viewed image, scrollbar position and room for margin
		$('#gallery').animate({
			scrollLeft: $(galImgArray[i]).width() + $('#gallery').scrollLeft() + 15
		}, 750);
		//Iterate to next image
		if (i < $(galImgArray).length) {
			i++;
		};
	});

	$('#scroll-left').click(function() {
		//Iterate to previous image
		if (i > 0) {
			i--;
		};
		//Use width of currently viewed image, scrollbar position and room for margin
		$('#gallery').animate({
			scrollLeft: $('#gallery').scrollLeft() - $(galImgArray[i]).width() - 15
		}, 750);
	});
});


