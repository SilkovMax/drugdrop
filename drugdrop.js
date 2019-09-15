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
let curBallX = 0;
let curBallY = 0;
let borderDist = 3;
let play = false;
let timer;
let mX =0;
let mY =0;
let speedBall = 0.1;
let AY = 0, AX = 0;
let topCanvas = 0; 
let leftCanvas = 0;
let bottomCanvas = 0;
let rightCanvas	= 0;

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
		topCanvas = canvas.offsetTop + borderDist;
		leftCanvas = canvas.offsetLeft + borderDist;
		bottomCanvas = canvas.offsetTop - borderDist + canvas.offsetWidth;
		rightCanvas	= canvas.offsetLeft - borderDist + canvas.offsetWidth;
	}
}

let a = 2;
let b = 3;
let c = 0;
function multiply(a,b){
  c = a * b;
  return
};

console.log(c);

createElements();
//document.addEventListener("DOMContentLoaded", createElements);
