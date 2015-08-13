$(function() {
	var nextIndex = 0; /*图片轮询index定位*/
	var change = function() { /*计算下一个index的值*/
		if (nextIndex == 3) {
			nextIndex = 0;
		}
		var height = $('.circlePicUl li').height(); /*获取轮询的li的高度*/
		$('.circlePicList li:eq(' + nextIndex + ')').addClass('change').siblings().removeClass('change');
		$('.circlePicUl ul').stop().animate({
			'top': -nextIndex * height /*将ul位移*/
		}, 400);
		nextIndex++; /*自增index*/
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
			if (finalTop < totalTop) { /*如果顶部超过了原导航的高度就顶部对齐*/
				box.children('.nav_sub').addClass('active').css({
					'left': width - 2,
					'top': 0
				});
			} else { /*如果底部超过了原导航的高度，则底部对齐*/
				box.children('.nav_sub').addClass('active').css({
					'left': width - 2,
					'top': thisHeight - height
				});
			}
		} else { /*否则，中间对齐*/
			box.children('.nav_sub').addClass('active').css({
				'left': width - 2,
				'top': -num
			});
		}
	}, function() {
		var box = $(this);
		$(this).children('.nav_sub').removeClass('active'); /*移除选中Class样式*/
	});


	$('#searchType li').click(function() { /*搜索框搜索条件切换*/
		var index = $(this).index(); /*获得当前点击元素的index*/
		if (index == 1) { /*若为第二个，则将它移入第一个之前*/
			var target = $(this);
			target.prev('li').insertAfter(target);
		}
		/*修改提示文字*/
		if ($(this).text() == '公司') {
			$(this).parents('#searchType').siblings('#searchText').attr('placeholder', '请输入公司名称，如：拉勾');
		}
		if ($(this).text() == '职位')
			$(this).parents('#searchType').siblings('#searchText').attr('placeholder', '请输入职位名称，如：产品经理');
	});
	/*轮播图，当鼠标移入时候，停止自动轮播，鼠标移出则继续*/
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
	/*轮播图，当鼠标移入时候，停止自动轮播，鼠标移出则继续*/
	$('.circlePicUl').hover(function() {
		//		alert(interval);
		clearInterval(interval);
	}, function() {
		interval = setInterval(change, 3000);
	});
	/*职位选择导航切换*/
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
	/*根据距离页面顶端的高度判断是否显示返回顶部火箭*/
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		if (a == 0) {
			$('#returnBack').hide();
		} else {
			$('#returnBack').show();

		}
	});
	/*返回顶部，要导入gotoTop插件*/
	$('#returnBack').click(function() {
		$(this).goToTop();
	});
});