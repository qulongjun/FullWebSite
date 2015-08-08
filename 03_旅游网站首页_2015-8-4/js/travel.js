$(function() {
	var index = 0;
	var interval;
	$('#selectIndex li').mouseover(function() {
		index = $(this).index()
		$(this).addClass('on').siblings().removeClass('on');
		$('.headerImgList li:eq(' + index + ')').fadeIn().show().siblings().fadeOut().hide();
		clearInterval(interval);
	}).mouseout(function() {
		interval = setInterval(turn, 2000);
	});
	$('.headerImgList li').mouseover(function() {
		clearInterval(interval);
	}).mouseout(function() {
		interval = setInterval(turn, 2000);
	});

	interval = setInterval(turn, 2000);

	function turn() {
		if (index == 3) {
			index = 0;
		}
		$('#selectIndex li:eq(' + index + ')').addClass('on').siblings().removeClass('on');
		$('.headerImgList li:eq(' + index + ')').fadeIn().show().siblings().fadeOut().hide();
		index++;
	}
});