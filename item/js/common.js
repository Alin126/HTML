/*导航栏*/
var oLi = $('.main_left_dh li ul li');
/* 左侧导航 */
$(document).ready(function(){
	var oNum = 0;
	$(oLi).each(function(){
		$(this).click(function(){
			$(this).addClass('ts').siblings().removeClass('ts');
			$(this).addClass('ts').parent().parent().siblings().children().children().removeClass('ts');
			//alert($(this).index('.main_left_dh li ul li'));  返回当前点击的 li的索引值
		});
	});
	$(".main_left_dh div.user_account_nav_item").click(function(){
		$(this).next("ul").slideToggle(500).parent().siblings().find('ul').slideUp(500);
		$(this).parent().addClass('current').siblings().removeClass('current');
	});
	doShow(null);
});
/* 左侧导航 */
/* 默认展示 传入参入即可默认展开 */
/* 传入null 默认'账户主页' */
function doShow(num){
	if(num !== null){
		for(var i=0;i<oLi.length;i++){
			if(i == num){
				$(oLi[i]).addClass('ts');
				$(oLi[i]).parent().show();
				$(oLi[i]).parent().parent().addClass('current');
			}
		}
	}else{
		$('.main_left_dh ul li:first').addClass('current');
	}
}
/* 默认展示 */
/*导航栏*/

$(document).ready(function(){
	/*我的账户 用户安全验证*/
	$(".user_info_status span").length > 1 && $(".user_info_status span").tip({
		words_per_line: 1e3
	})
	/*我的账户 用户安全验证*/
	
	/*我的账户 帐户提示*/
	$(".main_right_top span.ask").length > 1 && $(".main_right_top span.ask").tip({
		words_per_line: 1e3
	})
	/*我的账户 帐户提示*/
	
	/*我的账户-借款用户 帐户提示*/
	$(".main_right_top2 span.ask").length > 1 && $(".main_right_top2 span.ask").tip({
		words_per_line: 1e3
	})
	/*我的账户-借款用户 帐户提示*/
});

/*提示公共方法*/
!function($){
	
	 // 用户名触摸显示下拉列表
    $(".have_login").hover(function(){
    		$(".have_login").addClass('cur');
    		$(".have_login").removeClass('cur2');
    		setTimeout(function(){$(".have_login_show ").stop(true,true).removeClass('hidden');},300);
    },function(){
    		$(".have_login").addClass('cur2');
    		$(".have_login").removeClass('cur');
    		$(".have_login_show ").stop(true,true).addClass('hidden');
    });
    var _options = {
        words_per_line: "150px",
        color: "#e6e6e6",
        tip_top: 0
    };
    $.fn.extend({
        tip: function (options) {
            return getOptions(options),
            insertCssForTip(),
            replaceTitle(this),
            _attachEvent(this),
            this
        }
    });
		var split_str = function (string, words_per_line) {
			if ("undefined" == typeof string || 0 == string.length) return "";
			words_per_line = parseInt(words_per_line);
			for (var output_string = string.substring(0, 1), i = 1; i < string.length; i++) 0 == i % words_per_line && (output_string += "<br/>"),
			output_string += string.substring(i, i + 1);
			return output_string
		},
        title_show_hoverFlag = !1,
        titleMouseOver = function (obj) {
            if ("undefined" == typeof $(obj).attr("_title") || "" == $(obj).attr("_title")) return !1;
            var title_show = document.getElementById("title_show");
            null == title_show && (title_show = document.createElement("div"), $(title_show).attr("id", "title_show"), $("body").append(title_show), $(title_show).css({
                position: "absolute",
                border: "solid 1px " + _options.color,
                background: "#FFFFFF",
                lineHeight: "18px",
                fontSize: "12px",
                padding: "10px",
                left: "-9999px",
                "z-index": "10000"
            })),
            innerHtml = "";
            var words_per_line = _options.words_per_line;
            /^\d+px$/.test(words_per_line) ? ($(title_show).css("width", words_per_line), innerHtml = $(obj).attr("_title")) : (words_per_line = parseInt(words_per_line), innerHtml = split_str($(obj).attr("_title"))),
            $(title_show).html(innerHtml);
            var title_sanjiao = document.getElementById("title_sanjiao");
            null == title_sanjiao && (title_sanjiao = document.createElement("div"), $(title_sanjiao).attr("id", "title_sanjiao"), $("#title_show").append(title_sanjiao), $(title_sanjiao).css({
                position: "absolute",
                height: "10px",
                width: "14px",
                "z-index": "10001"
            })),
            $("#title_show").css("display", "block");
			/* 计算 div的位置 */
            var title_show_width = $("#title_show").width(),
                title_show_height = $("#title_show").height(),
                top_down = 10,
                offset = $(obj).offset(),
                ele_height = $(obj).height(),
                ele_width = $(obj).width(),
                padding_height = 20;
            title_show.style.left = offset.left + (ele_width - title_show_width - 20) / (_options["trangle-position"] || 2) + "px",
            "up" == _options.direction || offset.top - $(window).scrollTop() + ele_height + top_down + title_show_height + 25 >= $(window).height() ? (title_show.style.top = offset.top - top_down - title_show_height - padding_height + _options.tip_top + "px", $(title_sanjiao).html('<span class="sanjiao sanjiao_fff3">◆</span><span class="sanjiao sanjiao_ddd4">◆</span>'), title_sanjiao.style.top = title_show_height + padding_height - 9 + "px") : (title_show.style.top = offset.top + ele_height + top_down - _options.tip_top + "px", $(title_sanjiao).html('<span class="sanjiao sanjiao_ddd1">◆</span><span class="sanjiao sanjiao_fff2">◆</span>'), title_sanjiao.style.top = "-10px"),
            $(title_sanjiao).find("span[class^='sanjiao sanjiao_ddd']").css("color", _options.color),
            title_sanjiao.style.left = (title_show_width + 20 - 14) / 2 + "px"
        },
			/* 计算 div的位置 */
        hover_flag = !1,
        titleMouseOut = function () {
            var title_show = document.getElementById("title_show");
            return null == title_show ? !1 : (hover_flag || (title_show.style.display = "none"), void 0)
        },
        _attachEvent = function (objs) {
            if ("object" != typeof objs) return !1;
            var current_over;
            for (i = 0; i < objs.length; i++) $(objs[i]).hover(function () {
                titleMouseOver(this),
                current_over = this,
                hover_flag = !0
            }, function () {
                var that = this;
                current_over = this,
                hover_flag = !1,
                setTimeout(function () {
                    title_show_hoverFlag || titleMouseOut(that)
                }, 60)
            });
            $("body").delegate("#title_show", "mouseenter", function () {
                title_show_hoverFlag = !0
            }),
            $("body").delegate("#title_show", "mouseleave", function () {
                title_show_hoverFlag = !1,
                titleMouseOut(current_over)
            })
        },
		/*替换title内容  并删除title*/
        replaceTitle = function (objs) {
            for (i = 0; i < objs.length; i++) $(objs[i]).attr("_title", $(objs[i]).attr("title")),
            $(objs[i]).removeAttr("title")
        },
        addStyleString = function (css) {
            var style = document.createElement("style");
            style.type = "text/css";
            try {
                style.appendChild(document.createTextNode(css))
            } catch (ex) {
                style.styleSheet.cssText = css
            }
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(style)
        },
		/* 添加三角箭头 */
        insertCssForTip = function () {
            addStyleString(".sanjiao {font-size: 14px;font-family: 宋体, sans-serif;height: 8px;}.sanjiao_ddd1 { position: absolute;left: 0px;top: 0px;z-index: 1;}.sanjiao_fff2 {color: #fff;position: absolute;left: 0px;top: 2px;z-index: 2;}.sanjiao_fff3 {color: #fff;position: absolute;left: 0px;top: 0px;z-index: 2;}.sanjiao_ddd4 {position: absolute;left: 0px;top: 2px;z-index: 1;}")
        },
		/* 添加三角箭头 */
        getOptions = function (options) {
            $.extend(_options, options);
            var words_per_line = _options.words_per_line;
            "undefined" == typeof words_per_line && (words_per_line = "150px"),
            _options.words_per_line = words_per_line
        }
}(jQuery);
