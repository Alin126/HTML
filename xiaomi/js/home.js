$("#J_miniCartTrigger").mouseenter(function(e) {
	$("#J_miniCartTrigger").addClass('topbar_cart_active');
	$(".cart_menu").css('display','block');
	$(".loading").text("购物车中还没有商品，赶紧选购吧！");
});

$("#J_miniCartTrigger").mouseleave(function(e){
	$("#J_miniCartTrigger").removeClass('topbar_cart_active');
	$("#J_miniCartTrigger").addClass('topbar_cart');
	$(".cart_menu").css('display','none');
});

$(".category_item").mouseenter(function(e){
	$(this).addClass('category_item_active');
	$(this).children('div .children').css('display','block');
});

$(".category_item").mouseleave(function(e){
	$(this).removeClass('category_item_active');
	$(this).addClass('category_item');
	$(this).children('div .children').css('display','none');
});

$(".nav_item").mouseenter(function(e){
	$(this).addClass('nav_item_active');
	var text = $(this).children('.item_children').children('.container').html();
	if (text != undefined)
	{
		//alert(text);
		$('#J_navMenu').children('.container').html(text);
		$('#J_navMenu').css('display','block')
	}
});
$(".nav_item").mouseleave(function(e){
	$(this).removeClass('nav_item_active');
	$(this).addClass('nav_item');
	$('#J_navMenu').css('display','none');
});

$("#search").focus(function(){
	//$("#J_keywordList").css('display','block');
	$(".search-hot-words").css("display","none");
	$("#J_keywordList").removeClass('hide');
});

$("#search").blur(function(){
	$(".search-hot-words").css("display","block");
	 $("#J_keywordList").addClass('hide');
});
var t = t1 = t2 = n = 0,count;
$(document).ready(function(){
	count = $("#J_homeSlider .slide a").length;
	
	t = setInterval("showAuto()", 3000);
	setTimeout("next()",3000);
	//setTimeout("pre()",3000);
	//t1 = setInterval("next()", 3000);
	//t2 = setInterval("pre()", 3000);
	//$(".ui_wrapper").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 400);});
})
$(".ui_controls .ui_pager .ui_pager_item .ui_pager_link").click(function(){
		var pos = $(this).text() - 1;
		n = pos;
		if(pos >= count) return;
		//$(this).removeClass('active');
		$(".ui_controls .ui_pager .ui_pager_item .ui_pager_link").removeClass('active');
		$(this).addClass('active');
		$("#J_homeSlider").children().each(function(){
			$(this).css('display','none');
			//$("this").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		});
		//alert($("#J_homeSlider").children("div"));
		$("#J_homeSlider").children().eq(pos).css('display','block');
		//clearInterval(t);
		//$("#J_homeSlider").children().eq(pos).css('background','255,255,255,0.4');
	});

function showAuto()
{
	n = n >=(count - 1) ? 0 : ++n;
	$(".ui_controls .ui_pager .ui_pager_item .ui_pager_link").eq(n).trigger('click');
}

$(".ui_controls_direction .ui_prev").click(function(){
	clearInterval(t);
	n = n-1;
	if (n < 1) {
		n = count-1	;
	};
	if (n > count-1) {
		n = 1;
	};
	$("#J_homeSlider").children().each(function(){
			$(this).css('display','none');
		});
	$("#J_homeSlider").children().eq(n).css('display','block');
});

$(".ui_controls_direction .ui_next").click(function(){
	clearInterval(t);
	n = n+1;
	if (n < 1) {
		n = count-1	;
	};
	if (n > count-1) {
		n = 1;
	};
	$("#J_homeSlider").children().each(function(){
			$(this).css('display','none');
		});
	$("#J_homeSlider").children().eq(n).css('display','block');
});

$('#J_homeStar .xm_controls .control_next').click(function(){
	$('#J_homeStar .control_pre').removeClass('control_disabled');
	$('#J_homeStar .control_next').addClass('control_disabled');
	$('#J_homeStar .xm_carousel_wrapper .J_carouselList').css('margin-left','-1240px');
});

$('#J_homeStar .xm_controls .control_pre').click(function(){
	$('.control_next').removeClass('control_disabled');
	$('.control_pre').addClass('control_disabled');
	$('.xm_carousel_wrapper .J_carouselList').css('margin-left','0');
});

function next(){
	$('#J_homeStar .control_pre').removeClass('control_disabled');
	$('#J_homeStar .control_next').addClass('control_disabled');
	$('#J_homeStar .xm_carousel_wrapper .J_carouselList').css('margin-left','-1240px');
}

/*function pre(){
	$('.control_next').removeClass('control_disabled');
	$('.control_pre').addClass('control_disabled');
	$('.xm_carousel_wrapper .J_carouselList').css('margin-left','0');
}*/

$('.brick_item').mouseenter(function(e){
	$(this).addClass('brick_item_active');

});

$('.brick_item').mouseleave(function(e){
	$(this).removeClass('brick_item_active');
});

$('#match .J_brickTabSwitch>li').each(function(index){
	$(this).mouseenter(function(e){
		$('#match .J_brickNav .J_brickTabSwitch .tab_active').removeClass('tab_active');
		$('#match .J_brickTabSwitch>li:eq('+index+')').addClass('tab_active');
		$('#match .span16 .tab_container .tab_content').css('display','none');
		$('#match .span16 .tab_container .tab_content').addClass('hide');
		$('#match .tab_container>ul:eq('+index+')').removeClass('hide');
		$('#match .tab_container>ul:eq('+index+')').css('display','block');
	});
});

$('#accessories .J_brickTabSwitch>li').each(function(index){
	$(this).mouseenter(function(e){
		$('#accessories .J_brickNav .J_brickTabSwitch .tab_active').removeClass('tab_active');
		$('#accessories .J_brickTabSwitch>li:eq('+index+')').addClass('tab_active');
		$('#accessories .span16 .tab_container .tab_content').css('display','none');
		$('#accessories .span16 .tab_container .tab_content').addClass('hide');
		$('#accessories .tab_container>ul:eq('+index+')').removeClass('hide');
		$('#accessories .tab_container>ul:eq('+index+')').css('display','block');
	});
});

$('#around .J_brickTabSwitch>li').each(function(index){
	$(this).mouseenter(function(e){
		$('#around .J_brickNav .J_brickTabSwitch .tab_active').removeClass('tab_active');
		$('#around .J_brickTabSwitch>li:eq('+index+')').addClass('tab_active');
		$('#around .span16 .tab_container .tab_content').css('display','none');
		$('#around .span16 .tab_container .tab_content').addClass('hide');
		$('#around .tab_container>ul:eq('+index+')').removeClass('hide');
		$('#around .tab_container>ul:eq('+index+')').css('display','block');
	});
});

var count1 = 0 , space = -1240;
$('#recommend .xm_controls .control_next').click(function(){
	$('#recommend .xm_controls .control_prev').removeClass('control_disabled');	
	count1++;
	//alert(count1);
	space = -1240 *count1;
	if(count1 == 3){
		$('#recommend .xm_controls .control_next').addClass('control_disabled');
	}
	
	$('#recommend_bd .xm_carousel_wrapper .xm_carousel_col_5_list').css('margin-left',space+'px');

});

//var count2 = 3;
$('#recommend .xm_controls .control_prev').click(function(){
	$('#recommend .xm_controls .control_next').removeClass('control_disabled');	
	count1--;
	//alert(count1);
	space = -1240*count1;
	if(count1 == 0){
		$('#recommend .xm_controls .control_prev').addClass('control_disabled');
	}
	$('#recommend_bd .xm_carousel_wrapper .xm_carousel_col_5_list').css('margin-left',space+'px');
});


$(".content_item_book .xm_pagers_wrapper .xm_pagers .pager").click(function(){
	$('.content_item_book .xm_pagers_wrapper .xm_pagers .pager').removeClass('pager_active');
	$(this).addClass('pager_active');
	var value = $(this).text() - 1;
	var marginleft = -value*(296) + 'px';
	$('.content_item_book .xm_carousel_wrapper .item_list').css('margin-left',marginleft.toString());

});

$(".content_item_theme .xm_pagers_wrapper .xm_pagers .pager").click(function(){
	$('.content_item_theme .xm_pagers_wrapper .xm_pagers .pager').removeClass('pager_active');
	$(this).addClass('pager_active');
	var value = $(this).text() - 1;
	var marginleft = -value*(296) + 'px';
	$('.content_item_theme .xm_carousel_wrapper .item_list').css('margin-left',marginleft.toString());

});

$(".content_item_game .xm_pagers_wrapper .xm_pagers .pager").click(function(){
	$('.content_item_game .xm_pagers_wrapper .xm_pagers .pager').removeClass('pager_active');
	$(this).addClass('pager_active');
	var value = $(this).text() - 1;
	var marginleft = -value*(296) + 'px';
	$('.content_item_game .xm_carousel_wrapper .item_list').css('margin-left',marginleft.toString());

});

$(".content_item_app .xm_pagers_wrapper .xm_pagers .pager").click(function(){
	$('.content_item_app .xm_pagers_wrapper .xm_pagers .pager').removeClass('pager_active');
	$(this).addClass('pager_active');
	var value = $(this).text() - 1;
	var marginleft = -value*(296) + 'px';
	$('.content_item_app .xm_carousel_wrapper .item_list').css('margin-left',marginleft.toString());

});
