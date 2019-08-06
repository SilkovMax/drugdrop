'use strict'

let div;
let canvas;
let ball;
let deltaX = 0;
let deltaY = 0;
let left = 5;
//let div1_left = 0;
//let dist = 0;
let curleft = 0;
let divLeft = 0;
let offsetcanvasDiv = 0;
let ballX = 0;
let ballY = 0;
let borderDist = 3;



let createElements = function() {
	canvas = document.createElement("div");
	div = document.createElement("div");
	ball = document.createElement("div");
	if(div && canvas && ball) {
		canvas.classList.add("canvas");
		canvas.setAttribute("id", "canvas")
		document.getElementsByClassName("cont")[0].appendChild(canvas);
		div.classList.add("rect");
		div.setAttribute("id", "carret");
		canvas.appendChild(div);
		ball.classList.add("ball");
		ball.setAttribute("id", "ball");
		canvas.appendChild(ball);
		
		
		offsetcanvasDiv = div.offsetLeft - canvas.offsetLeft;
		console.log(offsetcanvasDiv);
		ball.style.top = (-ball.offsetWidth - 2*borderDist + canvas.offsetTop + canvas.offsetWidth -(div.getBoundingClientRect().top - div.getBoundingClientRect().bottom)) + 'px';
		ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
		
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
		if (Math.abs(divLeft) > offsetcanvasDiv - borderDist)
			divLeft = -offsetcanvasDiv + borderDist;		
			div.style.left = divLeft + 'px';
			console.log(divLeft);
	}
	else 
		if(event.keyCode==39){//правая
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv )
			divLeft = offsetcanvasDiv - borderDist;		
			div.style.left = divLeft + 'px';
			console.log(divLeft);
			
			
		}
};

window.onmousemove = function () {
	if (event.clientX >= canvas.offsetLeft && event.clientX <= canvas.offsetLeft + canvas.offsetWidth ) 
		{
			
		if ( event.clientX < deltaX ) {
			divLeft=divLeft - left;
			if (Math.abs(divLeft) > offsetcanvasDiv - borderDist)
			divLeft = -offsetcanvasDiv + borderDist;		
			div.style.left = divLeft + 'px';
		}
		else {
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv )
			divLeft = offsetcanvasDiv - borderDist;		
			div.style.left = divLeft + 'px';
		}
	deltaX = event.clientX;
	}
	
	
}

document.addEventListener("DOMContentLoaded", createElements);
