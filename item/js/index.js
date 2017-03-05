
$(function(){
	// 焦点图轮播
	var jssor_1_options = {
              $AutoPlay: true,
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingX: 10,
                $SpacingY: 1
              }
            };

	var jssor_2_options = {
	  $AutoPlay: true,
	  $SlideWidth: 202,
	  $SlideHeight: 74,
	  $AutoPlaySteps: 1,
	  $SlideSpacing: 18,
	  $Cols: 5
	};
                  
	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
	var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);
	
	// icon滑上动态效果
    $(".htb_left  .l2 .s1").hover(function() {
         setTimeout(function(){$(".htb_left  .l2 .s1").siblings(".d1").removeClass('hidden');},300);
    }, function() {});
    $(".htb_left .l2").hover(function() {
    }, function() {
        $(".htb_left .l2 .s1").siblings(".d1").addClass('hidden');
    });
    $(".htb_left .l3 .s1").hover(function() {
         setTimeout(function(){$(".htb_left .l3 .s1").siblings(".d1").removeClass('hidden');},300);
    }, function() {});
    $(".htb_left .l3").hover(function() {
    }, function() {
        $(".htb_left .l3 .s1").siblings(".d1").addClass('hidden');
    });
     $(".htb_right .l1").hover(function() {
         setTimeout(function(){$(".htb_right .l1 .d1").removeClass('hidden');},300);
    }, function() {});
    $(".htb_right .l1").hover(function() {
    }, function() {
        $(".htb_right .l1 .d1").addClass('hidden');
    });

    $(".footer_left .d1").hover(function() {
         setTimeout(function(){$(".footer_left .d3").removeClass('hidden');},300);
    }, function() {});
    $(".footer_left .d1").hover(function() {
    }, function() {
        $(".footer_left .d3").addClass('hidden');
    });
    $(".footer_left .d2").hover(function() {
         setTimeout(function(){$(".footer_left .d4").removeClass('hidden');},300);
    }, function() {});
    $(".footer_left .d2").hover(function() {
    }, function() {
        $(".footer_left .d4").addClass('hidden');
    });

   
    //数字方法
    numSplit($("#js_num1"));
    numSplit($("#js_num2"));


    // 文字跑马灯
    $("#marquee").marquee({yScroll: "bottom"}); 


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

})

//动态添加焦点图方法
function addBanners(data){
    for (var i = 0; i < data.length; i++) {
        var Slider = document.getElementById('js_slides');
        var SliderLi = document.createElement("li");
        SliderLi.setAttribute("style", "background-image:url("+data[i].ImgUrl+");");
        var SliderLiA= document.createElement("a");
        SliderLiA.setAttribute("href",data[i].ahref);
        SliderLiA.setAttribute("target","_blank");
        SliderLi.appendChild(SliderLiA);
        Slider.appendChild(SliderLi);
    };
}

// 三位数一个逗号
function numSplit(str){
	var data = str.text();
	var newStr = "";
	var count = 0;

	if (data.indexOf(".") == -1) {
		for (var i = data.length-1; i>= 0; i--) {
			if (count % 3 == 0 && count != 0) {
				newStr = data.charAt(i) + "," +newStr;
			} else{
				newStr = data.charAt(i) + newStr;
			};
			count++;
		};
		 data = newStr + ".00";
	} else{
		for (var i = data.indexOf(".") - 1; i >= 0 ;i--) {
			if (count % 3 == 0 && count != 0) {
				newStr = data.charAt(i) + "," +newStr;
			} else{
				newStr = data.charAt(i) + newStr;
			};
			count++;
		};
		data = newStr + (data + "00").substr((data + "00").indexOf("."),3);
	};
	str.text(data);
}
	function highcharts_tubiao(k,arr){
		var Otype = [];
		
		if(arr[0] == 100){
			Otype = [{color:'#eee',name: '完成',y: arr[0]},{color:'#eee',name: '剩余',y: arr[1]}];
		}else{
			Otype = [{color:'#FC655A',name: '完成',y: arr[0]},{color:'#eee',name: '剩余',y: arr[1]}];
		}
		$('#container_'+k).highcharts({
			chart: {
				renderTo: 'container',
				type: 'pie',
				backgroundColor:'#fff',
				width:110
			},
			title: {
				text: ''
			},
			exporting:{
				enabled: false
			},
			tooltip: {
				valueSuffix: '%',
				enabled:false
			},
			plotOptions: {
				pie: {
					allowPointSelect: false,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: false,
					shadow: false
				}
			},
			credits:{
				 enabled:false // 禁用版权信息
			},
			series: [
			{
				name: '额度',
				data: Otype,
				size : '120%',
				innerSize: '190%'
			}]
		})
	}

	$(document).ready(function(){
			highcharts_tubiao(1,[20,80]);
	});