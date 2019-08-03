'use strict'

let div;
let canvas;
let deltaX = 0;
let deltaY = 0;
let left = 5;
//let div1_left = 0;
//let dist = 0;
let curleft = 0;
let divLeft = 0;
let offsetcanvasDiv = 0;



let createElements = function() {
	canvas = document.createElement("div");
	div = document.createElement("div");
	if(div && canvas) {
		canvas.classList.add("canvas");
		canvas.setAttribute("id", "canvas")
		document.getElementsByClassName("cont")[0].appendChild(canvas);
		div.classList.add("rect");
		div.setAttribute("id", "carret");
		canvas.appendChild(div);
		offsetcanvasDiv = div.offsetLeft - canvas.offsetLeft;
		console.log(offsetcanvasDiv);
		
	}
}

window.onkeydown = function move_left(){
	//let leftOfSideCanvas=canvas.offsetLeft;
	//let leftOfSideCarret=div.offsetLeft;
	//let distFromLeftSide=leftOfSideCarret-leftOfSideCanvas;
	
	
	//console.log(leftOfSideCanvas);
	//console.log(leftOfSideCarret);
	let widthCarret = div.offsetWidth;
	console.log(widthCarret);

	if(event.keyCode==37){//левая
		divLeft=divLeft - left;
		if (Math.abs(divLeft) > offsetcanvasDiv - 3)
			divLeft = -offsetcanvasDiv + 3;		
			div.style.left = divLeft + 'px';
			console.log(divLeft);
	}
	else 
		if(event.keyCode==39){//правая
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv )
			divLeft = offsetcanvasDiv - 3;		
			div.style.left = divLeft + 'px';
			console.log(divLeft);
			
			
		}
};
/*
window.onmousemove = function () {
	if (event.clientX >= canvas.getBoundingClientRect().left && event.clientX <= canvas.getBoundingClientRect().right-(carret.getBoundingClientRect().right - carret.getBoundingClientRect().left)) {
		div.style.left =  event.clientX + 'vh';
	}
	curleft = div.getBoundingClientRect().left;
	left = 0;
}
*/
document.addEventListener("DOMContentLoaded", createElements);
