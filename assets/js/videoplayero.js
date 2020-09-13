
var frame = document.getElementById("frame");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");



btn1.addEventListener("click",link1)
btn2.addEventListener("click",link2)
btn3.addEventListener("click",link3)
btn4.addEventListener("click",link4)
btn5.addEventListener("click",link5)
btn6.addEventListener("click",link6)
btn7.addEventListener("click",link7)
btn8.addEventListener("click",link8)
btn9.addEventListener("click",link9)
btn10.addEventListener("click",link10)



var ink1 = "";




function link1(){
  ink1 = "https://www.youtube.com/embed/_uQrJ0TkZlc" 	
  localStorage.setItem('link',ink1)
  btn1.src="videos.html";
}
function link2(){
  ink1 = "https://www.youtube.com/embed/WGJJIrtnfpk" 	
  localStorage.setItem('link',ink1)
  btn2.src="videos.html";
}
function link3(){
  ink1 = "https://www.youtube.com/embed/LHBE6Q9XlzI" 	
  localStorage.setItem('link',ink1)
  btn3.src="videos.html";
}
function link4(){
  ink1 = "https://www.youtube.com/embed/sBws8MSXN7A"	
  localStorage.setItem('link',ink1)
  btn4.src="videos.html";
}
function link5(){
  ink1 = "https://www.youtube.com/embed/hdI2bqOjy3c" 	
  localStorage.setItem('link',ink1)
  btn5.src="videos.html";
}
function link6(){
  ink1 = "https://www.youtube.com/embed/UB1O30fR-EE" 	
  localStorage.setItem('link',ink1)
  btn6.src="videos.html";
}
function link7(){
  ink1 = "https://www.youtube.com/embed/_73sZ-BUZXI" 	
  localStorage.setItem('link',ink1)
  btn7.src="videos.html";
}
function link8(){
  ink1 = "https://www.youtube.com/embed/Ib8UBwu3yGA" 	
  localStorage.setItem('link',ink1)
  btn8.src="videos.html";
}
function link9(){
  ink1 = "https://www.youtube.com/embed/ehDRTdRGd1w" 	
  localStorage.setItem('link',ink1)
  btn9.href="videos.html";
}
function link10(){
  ink1 = "https://www.youtube.com/embed/ztHopE5Wnpc" 	
  localStorage.setItem('link',ink1)
  btn10.src="videos.html";
}

