$(function() {
	var y = $(window).height();
	var top = $('#bottom').offset().top;
	if (top < y) {
		$('#bottom').addClass('fix');
	} else {
		$('#bottom').removeClass('fix');
	}

})