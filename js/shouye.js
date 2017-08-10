//main1 部分
var om1tl=document.getElementsByClassName("m-tl")[0];
var om1tlli=om1tl.getElementsByTagName("li");
for(let i=0;i<om1tlli.length;i++){
	$(".m-tl li").eq(i).mouseover(function(){		
		$(this).addClass("m-tll").siblings().removeClass("m-tll");
		$(".m-b ul").eq(i).addClass("m-bl").siblings().removeClass("m-bl");
		$(".m-bl li").hover(function(){
			$(this).stop().animate({left:"-10px"},200);
		},function(){
			$(this).stop().animate({left:"0px"},200);
		});
	});
}
$(".m-bl li").hover(function(){
			$(this).stop().animate({left:"-10px"},200);
	},function(){
			$(this).stop().animate({left:"0px"},200);
});

//轮播一块
 $(".rr img").hover(function(){
			$(this).stop().animate({left:"-5px",opacity:"1"},300);
	},function(){
			$(this).stop().animate({left:"0px",opacity:"0.9"},300);
});
var obgt=document.getElementsByClassName('bgt')[0];
var obgtli=obgt.getElementsByTagName('li');
var i=0;
var timer=setInterval(function(){
	$("#banner .lunbo span").eq(i).stop().addClass("quan").siblings().stop().removeClass("quan");
	$("#banner .bgt li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);	
	i= i<5? i+1:0;	
},2000);
$("#banner .bgt li").hover(
	function(){clearInterval(timer);},
	function(){
		clearInterval(timer); 
		timer=setInterval(function(){
			$("#banner .lunbo span").eq(i).stop().addClass("quan").siblings().stop().removeClass("quan");
			$("#banner .bgt li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);	
			i= i<5? i+1:0;	
		},2000)}
);
$("#banner .lunbo span").mouseover(function(){
	clearInterval(timer); 
	i=$(this).index();
	$("#banner .lunbo span").eq(i).stop().addClass("quan").siblings().stop().removeClass("quan");
	$("#banner .bgt li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});

//aside
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

$.get("shuju/zhuye.json",function(data){
	var html=template("lists",data);
	//console.log(html);
	$("#list").append(html);

});
$/*.get("shuju/zhuye1.json",function(data){
	var html1=template("lists",data);
		console.log(html1);
	$("#list").append(html1);
});
*/
