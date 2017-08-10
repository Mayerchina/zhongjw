function main(){
	var oshuliang=document.getElementById("num");	
	$(".jia").click(function(){
		oshuliang.value=parseInt(oshuliang.value)+1;		
	});
	$(".jian").click(function(){
		oshuliang.value= parseInt(oshuliang.value)>1? oshuliang.value-1:1;		
	});




	$(".zhong").hover(
	function(){
		$(".jing").css("display","block");		
	},
	function(){
		$(".jing").css("display","none");		
	}
	);		
	$(".zhong").mousemove(function(eve){
			var e=eve||event;
			var x1=e.pageX-$(".zhong").offset().left-$(".jing").width()/2;
			var y1=e.pageY-$(".zhong").offset().top-$(".jing").height()/2;
			if(x1<0){
				x1=0;
			}
			if(y1<0){
				y1=0;
			}
			if(x1>$(".zhong").width()-$(".jing").width()){
				x1=$(".zhong").width()-$(".jing").width()
			}
			if(y1>$(".zhong").height()-$(".jing").height()){
				y1=$(".zhong").height()-$(".jing").height()
			}
			$(".jing").css({left:x1,top:y1});
			var ox=$(".jing").position().left*$(".imgb img").width()/$(".zhong").width();
			var oy=$(".jing").position().top*$(".imgb img").height()/$(".zhong").height();
			$(".imgb img").css({left:-ox,top:-oy});
			$(".da").css("display","block");
			return false;			
	});
	$(".zhong").mouseout(function(eve){
		$(".da").css("display","none");
	});
	$(".min").children().children().click(function(){
		var imgSrc=$(this).attr("src");
		$(".zhong").find("img").attr({"src":imgSrc});
		$(".da").children().find("img").attr({"src":imgSrc});
	});
}