$(function() {
	var a = $(window).height();
	var cloud = function() {
		$('#wrapper').css('height', a);/*获取浏览器高度并设置wrapper高度*/
		$('.cloudLeft').animate({/*云层移动*/
			'left': '-15px'
		}, 2000).animate({
			'left': '14'
		}, 2000).siblings('.cloudRight').animate({
			'left': '14px'
		}, 2000).animate({
			'left': '-15'
		}, 2000);
	};

	setInterval(cloud, 0);
});