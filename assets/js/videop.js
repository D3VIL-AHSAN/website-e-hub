


const init = function(e){
	
	var frame = document.getElementById("frame");
	frame.src = localStorage.getItem('link');
};


document.addEventListener('DOMContentLoaded',function (){
	init();
});