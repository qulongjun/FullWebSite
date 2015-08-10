$(function() {
	$('#header').css('height', $(window).height());
	$('.cssWork').css('height', $(window).height());
	$('.jsWork').css('height', $(window).height());
	$('.fullSiteWork').css('height', $(window).height());
	$('.contactMe').css('height', $(window).height() * 0.7);
	$('.total').css('height', $(window).height() * 0.3);
	$(window).resize(function() {
		$('#header').css('height', $(window).height());
		$('.cssWork').css('height', $(window).height());
		$('.jsWork').css('height', $(window).height());
		$('.fullSiteWork').css('height', $(window).height());
		$('.contactMe').css('height', $(window).height() * 0.7);
		$('.total').css('height', $(window).height() * 0.3);
	});
});