/*我的账户*/
function doNext(_this){
	$(_this).parent().parent().parent().hide().next().show();
}

/*邀请码 选项卡*/
$(".little_dh li").each(function(){
	$(this).click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('div .hongbao_my').eq($(this).index()).show().siblings('div .hongbao_my').hide();
	});
});
function do_showdetail(_this){
	if($(_this).html() == '查看详情'){
		$(_this).html('收起详情');
		$(_this).parent().parent().next('dd').slideToggle(500);
	}else{
		$(_this).html('查看详情');
		$(_this).parent().parent().next('dd').slideUp(500);
	}
}

/*选项卡 投资记录*/
$(".touzi_detailt_dh ul li").each(function(){
	$(this).click(function(){
		$(this).addClass('ts').siblings().removeClass('ts');
		$(".touzi_detailt_nr div").eq($(this).index()).show().siblings().hide();
	});
});
/*公共方法*/
function domouse_show(_mouseover,_show){
	var timer;
	$(_mouseover).mouseover(function(){
		clearInterval(timer);
		$(_show).show();
	});
	$(_mouseover).mouseout(function(){
		timer = setTimeout(function(){
			$(_show).hide();
		},500);
	});
	$(_show).mouseover(function(){
		clearInterval(timer);
	});
	$(_show).mouseout(function(){
		timer = setTimeout(function(){
			$(_show).hide();
		},500);
	});
}
/*弹框关闭按钮*/
$('.tk_close').click(function(){
	$(this).parent().hide();
	$(".tk_bg").hide();
})
/*关闭*/
function do_hide(_this){
	$(_this).parent().parent().hide();
	$(".bg_tk").hide();
	window.document.body.style.overflow='scroll';
}
/*关闭*/
function doShow_rebate(){
	$(".rebate_con").show();
	$(".bg_tk").show();
	window.document.body.style.overflow='hidden';
}

$('#result').children().each(function(){
	$(this).click(function(){
		if($(this).html() == '同意'){
			$(this).parent().html('<img src="images/safe.png"><span>已同意</span>');
		}else{
			$(this).parent().html('<img src="images/error.png"><span>已拒绝</span>');
		}
	});
});

$(".borrow_record_con_right_left a.borrow_contract").each(function(){
	$(this).click(function(){
		$(this).hide();
		$(this).parent().html('<span class="already_sign">已签署</span>');
	});
});
$(".hongbao_status ul li").each(function(){
	$(this).click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
});