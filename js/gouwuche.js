$.get("shuju/zhuye1.json",function(data){
	var sum1=0;
	var sum=0;
	var str = getCookie("cart");
	var obj = str ? JSON.parse(str) : {};//用来存商品ID（attr）和添加的数量（value）
		console.log(obj);
	
	for(var i in obj){ //for in 循环遍历     遍历数组  i 表示索引       遍历对象 i 表示对象属性
		sum+=obj[i]; //obj[i]在这里表示的是存在cookie中的单个商品数量
			
	}
	$("#top .tr .te2 b").html(sum);
		
	
	console.log(data);
	var strCookie = getCookie("cart");
	if(!strCookie){
		//如果无cookie,执行语句
	}else{
		var objCookie = JSON.parse(strCookie);
		var html = [];
		var html1=[];
		var html2=[];
		var htmls={};
		for(var attr in objCookie){
			html2.push(data.zlist1[attr]);
			html1.push(objCookie[attr]);
			html.push(attr);
		}
		console.log(html);
		console.log(html1);
		console.log(html2);
	}
	if(!htmls.lis){htmls.lis=html2;}
	var html3=template("xunhuans",htmls);
	$("#xunhuan").append(html3);
	
	
	var osl=document.getElementsByClassName("num1");
	for(let i in html1){
		console.log(i);
		osl[i].value=html1[i];
		osl[i].name=html[i];		
	}
	for(let j=0;j<html1.length;j++){
		var str = getCookie("cart");
		var obj	= JSON.parse(str) ;
		
		$(".jia").eq(j).click(function(){
			osl[j].value=parseInt(osl[j].value)+1;
			obj[osl[j].name]=parseInt(osl[j].value);
			var objToStr = JSON.stringify(obj);
			setCookie("cart",objToStr,7);
			foo();
		});
		$(".jian").eq(j).click(function(){
			osl[j].value= parseInt(osl[j].value)>1? osl[j].value-1:1;	
			obj[osl[j].name]=parseInt(osl[j].value);
			var objToStr = JSON.stringify(obj);
			setCookie("cart",objToStr,7);
			foo();
		});
		
		$(".em1").eq(j).click(function(){
			remove1(osl[j].name);
			foo();
		});	
		osl[j].oninput=function(){
			if(osl[j].value<2){osl[j].value=1;}
			obj[osl[j].name]=parseInt(osl[j].value);
			var objToStr = JSON.stringify(obj);
			setCookie("cart",objToStr,7);
			foo();
			
		}
	}
	function foo(){
		sum1=0;
		sum2=0;
		for(let j=0;j<html1.length;j++){
			if($(".xuan1").eq(j).is(":checked")){
				var rmb = parseFloat($(".jiage").eq(j).text().substring(1));
				sum1+=parseInt(osl[j].value)*rmb;
				sum2+=parseInt(osl[j].value);
			}
			
		}
		$(".db em").html(sum2);
		$(".db span").html(sum1.toFixed(2));
	}
	foo();
	$("input").click(function(){foo()});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//保存COOKIE
	function set1(proId,nums){
		var str=getCookie("cart");
		var obj = str ? JSON.parse(str):{};
		//同种商品加数量，不同商品添属性
		if(obj[proId]==undefined){
			obj[proId]  = 1;
		}else{
			obj[proId] = nums;
		}
		var objToStr = JSON.stringify(obj);//转换成json形式存cookie；					
		setCookie("cart",objToStr,7);
		location.reload();		
	}
	
	//移除cookie
	function remove1(proId){
		var cartArr=JSON.parse(getCookie("cart"));
		delete cartArr[proId];//对象删除某个属性和对应的值
		console.log(cartArr,cartArr[proId],cartArr)
		setCookie("cart",JSON.stringify(cartArr),7);	
		location.reload();
	}
	
	
	
	
});