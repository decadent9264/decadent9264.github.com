/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-09 08:15:07
 * @version $Id$
 */
// 找到父元素，添加监听器...
document.getElementById("p1").onclick=function(){
	document.getElementById("p1").style.color="red";
}
document.getElementById("p2").onclick=function(){
	let today = new Date();
	let x=document.getElementById("date");
	x.innerHTML=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
}
document.getElementById("p3").onclick=function(){
	document.getElementById("p3").classList.add("fn-active");
}
document.getElementById("p4").onclick=function(){
	let parent =document.getElementById("u1");
	let child =document.getElementById("p8");
	parent.removeChild(child);
}
document.getElementById("p5").onclick=function(){
	window.open("https://www.taobao.com/")
}
document.getElementById("p6").onclick=function(){
	let para=document.createElement("li");
    let node=document.createTextNode("p9");
    para.appendChild(node);
    let element=document.getElementById("u1");
    element.appendChild(para);
}

var ul = document.getElementById("u1");
var li = ul.getElementsByTagName("li");
ul.onclick = function(e){
var e = e || window.event, target = e.target || e.srcElement;
for(var s in li){
if(target == li[s]){
s = parseInt(s)+1;
alert(s);
break;
}
}
}

document.getElementById("p8").onclick=function(){
	let m= document.getElementById("1");
	m.style.width=screen.width;
}