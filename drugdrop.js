'use strict'

let div;
let canvas;
let ball;
let deltaX = 0;
let deltaY = 0;
let left = 5;
let curleft = 0;
let divLeft = 0;
let offsetcanvasDiv = 0;
let ballX = 0;
let ballY = 0;
let borderDist = 3;
let play = false;
let timer;
let mX =0;
let mY =0;
let speedBall = 0.1;

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
		//console.log(offsetcanvasDiv);
		ball.style.top = carret.offsetTop - ball.offsetWidth + 'px';
		ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
		ballY = carret.offsetTop - ball.offsetWidth;
		ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;	
	}
}

createElements();
//document.addEventListener("DOMContentLoaded", createElements);
