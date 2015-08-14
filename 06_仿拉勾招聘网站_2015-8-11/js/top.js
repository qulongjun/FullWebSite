$(function() {
	$('.userBtn dl').mouseover(function(){
		
	});
	var notic = 0;
	$('.notic').each(function() {
		var a = $(this).html();
		notic = a ? 0 : 1;
	});
	if (notic) {
		$('#top .userBtn dt').width(154);
		
	} else {
		$('#top .userBtn dt').width(110);
	}
});