/*模板自定义函数*/
function proxy(dom,lei,type){
	if(dom){
		dom.hover(function(){
			$(this).addClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').show()
				}
				else{
					$(this).addClass(lei+'er')
				}
			}
		}
		,function(){
			$(this).removeClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').hide()
				}
				else{
					$(this).removeClass(lei+'er');
				}
			}
		})
	}
}
function navnow(dom,part2,part3,none){
	var li=dom.find(".navnow dt[id*='part2_']");
	var dl=li.next("dd.sub");
	if(none)dl.hide();
	if(part2.next("dd.sub").length>0)part2.next("dd.sub").show();
	if(part3.length>0)part3.parent('dd.sub').show();
	li.bind('click',function(){
		var fdl=$(this).next("dd.sub");
		if(fdl.length>0){
			fdl.is(':hidden')?fdl.show():fdl.hide();
			fdl.is(':hidden')?$(this).removeClass('launched'):$(this).addClass('launched');
			fdl.is(':hidden')?$(this).addClass('launchedshow'):$(this).removeClass('launchedshow');
		}
	})
}
function partnav(c2,c3,jsok){
	var part2=$('#part2_'+c2);
	var part3=$('#part3_'+c3);
	if(part2)part2.addClass('on');
	if(part3){
		part3.addClass('on');
		part3.parent('dd').prev('dt').addClass('on');
	}
	if(jsok!=0)navnow($('#sidebar'),part2,part3);
}
/*自定义函数结束*/
//以下为执行代码
var module=Number($("#metuimodule").data('module'));//获取当前模块
$("#web_logo,nav ul li a").bind("focus",function(){if(this.blur)this.blur();});//IE
proxy($("nav ul li[class!='line']"),'hover');//鼠标经过导航
if(module==10001){//首页
	$('.dl-jqrun').each(function(){
		var dt = $(this).find('dt');
		var dd = $(this).find('dd');
		var wt = $(this).width()-dt.width();
			dd.width(wt);
	});
}else{//内页
   $("#sidebar dt,#sidebar h4").hover(
       function () {
          $(this).addClass("dthover");
        },
       function () {
          $(this).removeClass("dthover");
       }
    );
	var csnow=$("#sidebar").attr('data-csnow'),class3=$("#sidebar").attr('data-class3'),jsok=$("#sidebar").attr('data-jsok');
	partnav(csnow,class3,jsok);//侧栏导航点击展开隐藏
	//$('#ny_navx a:last').addClass('now_navx');
}