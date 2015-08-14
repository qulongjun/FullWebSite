$(function(){
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