'use strict'

let div;
let canvas;
let ball;
let left = 15; //скорость каретки
let divLeft = 0;
let offsetcanvasDiv = 0;
let ballX = 0;//положение шарика по оси Х
let ballY = 0;
let borderDist = 3;
let play = false;
let pause = false;
let timer;
let speedBall = 10;//скорость шарика, чем меньше, тем медленее
let topCanvas = 0; 
let leftCanvas = 0;
let bottomCanvas = 0;
let rightCanvas	= 0;
let a;//направление
let b;
let AX = 0;
let AY = 0;

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
		ball.style.top = carret.offsetTop - ball.offsetWidth + 'px';
		ball.style.left = Math.floor(div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2 ) + 'px';
		ballY = carret.offsetTop - ball.offsetWidth;
		ballX = Math.floor(div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2);	
		topCanvas = canvas.offsetTop + borderDist;
		leftCanvas = canvas.offsetLeft + borderDist;
		bottomCanvas = canvas.offsetTop - borderDist + canvas.offsetWidth;
		rightCanvas	= canvas.offsetLeft - borderDist + canvas.offsetWidth;
	}
}


document.addEventListener("DOMContentLoaded", createElements);
