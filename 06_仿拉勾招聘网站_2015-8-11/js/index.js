$(function() {
	var nextIndex = 0;
	var change = function() {
		if (nextIndex == 3) {
			nextIndex = 0;
		}
		var height = $('.circlePicUl li').height();
		$('.circlePicList li:eq(' + nextIndex + ')').addClass('change').siblings().removeClass('change');
		$('.circlePicUl ul').stop().animate({
			'top': -nextIndex * height
		}, 400);
		nextIndex++;
	};
	var interval = setInterval(change, 3000);
	$('.menu_box').hover(function() {
		var box = $(this);
		var width = box.width(); //获取menu_box的宽度
		var leftNavHeight = box.parents('.leftNav').height(); //获取父元素leftNav的高度
		var height = box.children('.nav_sub').height() + 4; //获取子元素nav_sub的高度，并加上2个边框
		var thisTop = box.children('.nav_main').offset().top; //获取nav_main距离顶部的高度
		var thisHeight = box.children('.nav_main').height() + 12 + 4; //获取nav_main的高度

		var num = (height - thisHeight) / 2; //计算弹出导航应该向上滑动多少距离
		var finalTop = thisTop - num; //计算最终形成的导航距离顶部的距离
		var finalBottom = finalTop + height; //计算最终形成的导航距离底部的距离
		var totalTop = box.parents('.leftNav').offset().top; //获取leftNav距离顶部的高度
		var totalBottom = totalTop + leftNavHeight; //获取leftNav底部距离顶部的高度
		if (finalTop < totalTop || finalBottom > totalBottom) {
			if (finalTop < totalTop) {
				box.children('.nav_sub').addClass('active').css({
					'left': width - 2,
					'top': 0
				});
			} else {
				box.children('.nav_sub').addClass('active').css({
					'left': width - 2,
					'top': thisHeight - height
				});
			}
		} else {
			box.children('.nav_sub').addClass('active').css({
				'left': width - 2,
				'top': -num
			});
		}
	}, function() {
		var box = $(this);
		$(this).children('.nav_sub').removeClass('active');
	});


	$('#searchType li').click(function() {
		var index = $(this).index();
		if (index == 1) {
			var target = $(this);
			target.prev('li').insertAfter(target);
		}
		if ($(this).text() == '公司') {
			$(this).parents('#searchType').siblings('#searchText').attr('placeholder', '请输入公司名称，如：拉勾');
		}
		if ($(this).text() == '职位')
			$(this).parents('#searchType').siblings('#searchText').attr('placeholder', '请输入职位名称，如：产品经理');
	});

	$('.circlePicList li').hover(function() {
		var index = $(this).index();
		var height = $('.circlePicUl li').height();
		$(this).addClass('change').siblings().removeClass('change');
		$('.circlePicUl ul').stop().animate({
			'top': -index * height
		}, 400);
		clearInterval(interval);
		nextIndex = index;
	}, function() {
		interval = setInterval(change, 3000);
	});

	$('.circlePicUl').hover(function() {
		//		alert(interval);
		clearInterval(interval);
	}, function() {
		interval = setInterval(change, 3000);
	});
	$('.jobNav ul li').click(function() {
		var index = $(this).index();
		$(this).addClass('choose').siblings('li').removeClass('choose');
		if (index == 0) {
			$('.hotJob').show().siblings('.newJob').hide();
		}
		if (index == 1) {
			$('.hotJob').hide().siblings('.newJob').show();
		}
	});

	$(window).scroll(function() {
		var a = $(window).scrollTop();
		if(a==0){
			$('#returnBack').hide();
		}
		else{
			$('#returnBack').show();
			
		}
	});
	$('#returnBack').click(function(){
		$(this).goToTop();
	});
	//	var run = 0;
	//	$('.leftTest').mouseover(function() {
	//		if (run == 0) {
	//			$(this).siblings('.hot_info').css({
	//				'left': '-100%',
	//				'top': '0'
	//			}).animate({
	//				'left': '0',
	//				'opacity': '1'
	//			}, 500);
	//			run = 1;
	//		} else {
	//			$(this).siblings('.hot_info').animate({
	//				'left': '-100%',
	//				'opacity': '0'
	//			}, 500);
	//			run = 0;
	//		}
	//	});
	//	$('.rightTest').mouseover(function() {
	//		if (run == 0) {
	//			$(this).siblings('.hot_info').css({
	//				'left': '100%',
	//				'top': '0'
	//			}).animate({
	//				'left': '0',
	//				'opacity': '1'
	//			}, 500);
	//			run = 1;
	//		} else {
	//			$(this).siblings('.hot_info').animate({
	//				'left': '100%',
	//				'opacity': '0'
	//			}, 500);
	//			run = 0;
	//		}
	//	});
	//	$('.topTest').mouseover(function() {
	//		if (run == 0) {
	//			$(this).siblings('.hot_info').css({
	//				'left': '0',
	//				'top': '-100%'
	//			}).animate({
	//				'top': '0',
	//				'opacity': '1'
	//			}, 500);
	//			run = 1;
	//		} else {
	//			$(this).siblings('.hot_info').animate({
	//				'top': '-100%',
	//				'opacity': '0'
	//			}, 500);
	//			run = 0;
	//		}
	//	});
	//	$('.bottomTest').mouseover(function() {
	//		if (run == 0) {
	//			$(this).siblings('.hot_info').css({
	//				'left': '0',
	//				'top': '100%'
	//			}).animate({
	//				'top': '0',
	//				'opacity': '1'
	//			}, 500);
	//			run = 1;
	//		} else {
	//			$(this).siblings('.hot_info').animate({
	//				'top': '100%',
	//				'opacity': '0'
	//			}, 500);
	//			run = 0;
	//		}
	//	});


});