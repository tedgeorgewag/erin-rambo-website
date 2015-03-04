//Use the gallery nav a's to move left / right through portfolio
$(document).ready(function() {
	$('#scroll-right').click(function() {
		$('#gallery').animate({
			scrollLeft: $('.gal-img').width() + $('#gallery').scrollLeft()
		}, 750); 
	});
	
	$('#scroll-left').click(function() {
		$('#gallery').animate({
			scrollLeft: $('#gallery').scrollLeft() - $('.gal-img').width()
		}, 750);
	});
});






