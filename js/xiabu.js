$("#aside h3").click(function(){
	$("body,html").stop().animate({"scrollTop":0},300);
});
$("#aside li").hover(
	function(){
		$(this).children("div").stop().css("display","block").animate({right:"40px"},150);
	},
	function(){
		$(this).children("div").stop().animate({right:"60px"},100,function(){
			$(this).css("display","none");
		});
	}
)
var sum=0;
var str = getCookie("cart");
var obj = str ? JSON.parse(str) : {};//用来存商品ID（attr）和添加的数量（value）
	console.log(obj);

for(var i in obj){ //for in 循环遍历     遍历数组  i 表示索引       遍历对象 i 表示对象属性
	sum+=obj[i]; //obj[i]在这里表示的是存在cookie中的单个商品数量
		
}

$("#aside .di i").html(sum);