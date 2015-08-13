$(function() {
	/*选择地区最后一个li“其他”打开隐藏div*/
	$('#container .leftContent .placeNav li:last-of-type').click(function() {
		var down = $(this).children('a').children('.down')
		if (down.hasClass('active')) {
			down.removeClass('active');
			$('.otherPlaceNav').hide();
		} else {
			down.addClass('active');
			$('.otherPlaceNav').show();
		}
	});
	/*返回顶点滚动条*/
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		if (a == 0) {
			$('#returnBack').hide();
		} else {
			$('#returnBack').show();

		}
	});
	$('#returnBack').click(function() {
		$(this).goToTop();
	});
	/*end返回顶点滚动条*/
});