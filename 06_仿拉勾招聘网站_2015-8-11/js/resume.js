$(function() {
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
	/*环形进度条显示，需要导入JS*/
	$('.circleSchedule').radialIndicator({
		barColor: '#019875',
		/*进度条颜色*/
		barBgColor: '#FFFFFF',
		/*进度条背景颜色*/
		barWidth: 10,
		/*进度条宽度*/
		initValue: 0,
		/*初始值*/
		roundCorner: true,
		/*进度条是否显示圆角*/
		percentage: true,
		/*是否显示百分比*/
		fontSize: 20,
		/*字体大小*/
		fontFamily: '微软雅黑',
		/*字体格式*/
		fontColor: '#000000',
		/*字体颜色*/
		fontWeight: '500' /*字体粗细*/
	});
	var radialObj = $('.circleSchedule').data('radialIndicator'); /*获取对象的实例*/
	radialObj.animate(70); /*修改数值即可实现动画效果*/
	/*环形进度条结束*/
	/*点击重命名*/
	$('.rename').click(function() {
		var text = $(this).siblings('h2').text();
		$(this).siblings('#name').attr('value', text);
		$(this).siblings('#name').show().siblings('h2').hide().siblings('.save').show();
		$(this).hide();
	});
	/*点击保存*/
	$('.save').click(function() {
		var Text = document.getElementById('name').value;
		$(this).siblings('h2').html(Text);
		$(this).siblings('#name').hide().siblings('h2').show().siblings('.rename').show();
		$(this).hide();
	});
	/*选择男女li*/
	$('.infoChange li').click(function() {
		var tx = $(this)
		tx.css('border-color', '#91cebe').children('.check').show().siblings('input[name="sex"]').prop('checked', 'checked');
		tx.siblings('li').css('border-color', '#FFFFFF').children('.check').hide();
	});
	/*进入修改基本信息*/
	$('.changePen').click(function() {
		$('.baseInfo:eq(1)').show();
		$('.baseInfo:eq(0)').hide();
	});
	/*取消修改基本信息*/
	$('.cancel').click(function() {
		$('.baseInfo:eq(1)').hide();
		$('.baseInfo:eq(0)').show();
	});
	/*保存修改基本信息*/
	$('.infoSave').click(function() {
		$('.baseInfo:eq(1)').hide();
		$('.baseInfo:eq(0)').show();
	});
	/*点击添加*/
	$('.itemInfo').click(function() {
		$(this).parents('.wishWork').hide().next('.change').show();

	});
	/*期望工作*/
	$('.hopeWorkSave').click(function() {
		$(this).parents('.hopeWorkChange').hide().prev('.hopeWork').show();
	});
	$('.hopeWorkCancel').click(function() {
		$(this).parents('.hopeWorkChange').hide().prev('.hopeWork').show();
	});
	/*工作经验*/
	$('.workExperienceSave').click(function() {
		$(this).parents('.workExperienceChange').hide().prev('.workExperience').show();
	});
	$('.workExperienceCancel').click(function() {
		$(this).parents('.workExperienceChange').hide().prev('.workExperience').show();
	});
	/*项目经验*/
	$('.projectExperienceSave').click(function() {
		$(this).parents('.projectExperienceChange').hide().prev('.projectExperience').show();
	});
	$('.projectExperienceCancel').click(function() {
		$(this).parents('.projectExperienceChange').hide().prev('.projectExperience').show();
	});
	/*教育背景*/
	$('.educationBackgroundSave').click(function() {
		$(this).parents('.educationBackgroundChange').hide().prev('.educationBackground').show();
	});
	$('.educationBackgroundCancel').click(function() {
		$(this).parents('.educationBackgroundChange').hide().prev('.educationBackground').show();
	});
	/*个人描述*/
	$('.selfDesSave').click(function() {
		$(this).parents('.selfDesChange').hide().prev('.selfDes').show();
	});
	$('.selfDesCancel').click(function() {
		$(this).parents('.selfDesChange').hide().prev('.selfDes').show();
	});
	/*作品展示*/
	$('.workDisplaySave').click(function() {
		$(this).parents('.workDisplayChange').hide().prev('.workDisplay').show();
	});
	$('.workDisplayCancel').click(function() {
		$(this).parents('.workDisplayChange').hide().prev('.workDisplay').show();
	});
});