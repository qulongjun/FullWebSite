$(function() {
	var a = $(window).height();
	var cloud = function() {
		$('#wrapper').css('height', a);
		$('.cloudLeft').animate({
			'left': '-15px'
		}, 2000).animate({
			'left': '14'
		}, 2000).siblings('.cloudRight').animate({
			'left': '14px'
		}, 2000).animate({
			'left': '-15'
		}, 2000);
	};

	setInterval(cloud,0);
});