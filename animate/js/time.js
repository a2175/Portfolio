/**
 * Created by Administrator on 2017/5/6 0006.
 */
// 当前时间实现代码
/*
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();
*/
var weather = document.querySelector("#weather");
var oClock = document.querySelector("#clock");
var oDate = document.querySelector("#oDate");
var tStyle = true;

var w_array = new Array("일요일","월요일","화요일","수요일","목요일","금요일","토요일");
var we_array = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var m_array = new Array("正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","腊月");
var me_array = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

//var WT;
var vv = 0;
var timeTag = 1;
var color2;



var  cityname = "未获取";
var  feels = "未获取";
var  weatherdata = "未获取";
var  high = "未获取";
var  low = "未获取";
var  weathernow = "未获取";
var  wind = "未获取";
var  windLv = "未获取";


//以后添加
function setTimeColor(){

		if(vv>255){timeTag*=-1;vv=255;}
		if(vv<0){timeTag*=-1;vv=0;}
		color2 = 'hsl('+vv+',90%,50%)';
		vv += timeTag/1;
		
		
		oClock.style.color = color2;
		oDate.style.color = color2;
		oClock.style.textShadow = '0 0 20px ' + color2;
		oDate.style.textShadow = '0 0 20px' + color2;
		//oClock.style.textShadow = '0 0 20px rgb('+c+')';
		//oDate.style.textShadow = '0 0 20px rgb('+c+')';
		//oClock.style.color = 'rgb('+c+')';
		//oDate.style.color = 'rgb('+c+')';
}


function oClockInit(){
	var w = window.innerWidth;
    var h = window.innerHeight;
	oClock.style.width = w+'px';
	oClock.style.lineHeight = h+'px';
	oClock.style.height =  h+'px';
	oClock.style.fontSize = Math.floor(h/300*20) + 'px';
	oDate.style.width = w+'px';
	oDate.style.lineHeight = h+'px';
	oDate.style.height =  h+'px';
	oDate.style.fontSize = Math.floor(h/300*20) + 'px';

}

oClockInit();
//window.onresize = oClockInit;

/*
var show = document.querySelector("#show");
function showi(str){
    show.innerHTML = str;
}
*/


/* 时间 */
function getTime(){
    var t = new Date();
	
    oClock.innerHTML = add0(t.getHours())+" : "+add0(t.getMinutes())+" <span class='sec'>"+add0(t.getSeconds()) + "</span>";

	oDate.innerHTML = "<span class='sec'>" + t.getFullYear() +"년 "+(t.getMonth()+1) + "월 " + t.getDate() + "일 "+ w_array[t.getDay()] + "</span>";
}
function autoTime(){
    getTime();
    setTimeout(autoTime, 1000);
}
function add0(n){
    return n<10 ? '0'+n : ''+n;
}

autoTime();
