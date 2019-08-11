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
let nowBallX = 0;
let nowBallY = 0;

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
		ball.style.top = carret.offsetTop - ball.offsetWidth + 'px';
		ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
		nowBallY = carret.offsetTop - ball.offsetWidth;
		nowBallX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
	}
}

window.onkeydown = function move_left(){
	let widthCarret = div.offsetWidth;
	//console.log(widthCarret);

	if(event.keyCode==37){//левая
		divLeft=divLeft - left;
		if (Math.abs(divLeft) > offsetcanvasDiv - borderDist)
			divLeft = -offsetcanvasDiv + borderDist;		
			div.style.left = divLeft + 'px';
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				nowBallX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			}
			//console.log(ball.style.left);
	}
	else 
		if(event.keyCode==39){//правая
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv )
			divLeft = offsetcanvasDiv - borderDist;		
			div.style.left = divLeft + 'px';
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				nowBallX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			}
			//console.log(divLeft);
		}
		else 
			if(event.keyCode==32) {
				if (!play) {
					timer = setInterval(moveBall, 66);
				} else {
					clearInterval(timer);
				}
			}
};
 function moveBall() {
	 //ball.style.top = carret.offsetTop - ball.offsetWidth - 3 + 'px';
	 
	 
 };
canvas.onclick = function(event) {
	let canvasCoords = this.getBoundingClientRect();
	let ballCoords = {
		top: event.clientY - canvasCoords.top - canvas.clientTop - ball.clientHeight/2,
		left: event.clientX - canvasCoords.left - canvas.clientLeft - ball.clientWidth/2
	};
	 if (ballCoords.top < 0) ballCoords.top = 0;
	 if (ballCoords.left < 0) ballCoords.left = 0;
	 if (ballCoords.left + ball.clientWidth > canvas.clientWidth) {
        ballCoords.left = canvas.clientWidth - ball.clientWidth;
        }
	 if (ballCoords.top + ball.clientHeight > canvas.clientHeight) {
        ballCoords.top = canvas.clientHeight - ball.clientHeight;
       }
	 ball.style.left = ballCoords.left + 'px';
     ball.style.top = ballCoords.top + 'px';
}
window.onmousemove = function () {
	
	if (event.clientX >= canvas.offsetLeft + div.offsetWidth/2 && event.clientX <= canvas.offsetLeft + canvas.offsetWidth - div.offsetWidth/2) 
		{
			divLeft = event.clientX - canvas.offsetLeft - offsetcanvasDiv - div.offsetWidth/2 ;		
			div.style.left = divLeft + 'px';
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				nowBallX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			console.log(divLeft);
			console.log(canvas.offsetLeft);
			console.log(offsetcanvasDiv);
			console.log(div.offsetWidth/2);
			console.log(event.clientX);
			
			}
		
		}
	}
	


document.addEventListener("DOMContentLoaded", createElements);
