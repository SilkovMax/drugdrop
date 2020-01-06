'use strict'


function directBall() {
	let randC = ballX - Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1);
	if(randC == 0) {
		let sign = 1;
		randC = Math.random();
		if(randC < 0.5) {
			sign = -1;
		}
		randC =(Math.floor(Math.random() * (4-1))+1) * sign;
	}
	a = (ballY - (topCanvas + 1))/ randC;//коэф-т траектории движения
	b = ballY - a * ballX;
	console.log("a = " + a + " b = " + b);
	let A,B,C,x1,x2
	A = Math.pow(a,2) + 1;
	B = 2*a*b-2*a*ballY-2*ballX;
	C = Math.pow(b,2) - 2*b*ballY + Math.pow(ballY,2) + Math.pow(ballX,2) - Math.pow(speedBall,2);
	console.log("A= " + A + ", B = " + B +", C = " + C);
	x1 = Math.floor((-B + Math.sqrt(Math.pow(B,2) - 4*A*C))/(2*A));
	x2 = Math.floor((-B - Math.sqrt(Math.pow(B,2) - 4*A*C))/(2*A));
	console.log("x1 = " + x1 + ", x2 = " + x2);

	if (a<0) {
	if(x1 != ballX){
		ballY = Math.floor(a*x1+b);
		ballX = x1;
		//deltaX = x1;
	}
	else {
		ballY = Math.floor(a*x2+b);
		ballX = x2;
		//deltaX = x2;
	}
	}


	console.log("a= " + a + " b= " + b);
	console.log("ballY= " + ballY + " ballX= " + ballX);



window.onkeydown = function move_left(){


	if(event.keyCode==37 && play){//левая
		divLeft=divLeft - left;
		if (Math.abs(divLeft) > offsetcanvasDiv - 2*borderDist) divLeft = -offsetcanvasDiv + borderDist;
		div.style.left = divLeft + 'px';
	}
	else if(event.keyCode==39 && play){//правая
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv ) divLeft = offsetcanvasDiv - borderDist;
			div.style.left = divLeft + 'px';
		}
	else if(event.keyCode==32) {

		if (!play) {
			if (!pause) {
				pause = true;
				directBall();
			}
			play = true;
			timer = setInterval(moveBall, 66);//setTimeout+
		} else {
			play = false;
			clearInterval(timer);
		}
	}
};

window.onmousemove = function () {
	if (play && event.clientX >= canvas.offsetLeft+ borderDist + div.offsetWidth/2 && event.clientX <= canvas.offsetLeft + canvas.offsetWidth - div.offsetWidth/2 - borderDist)
	{
		divLeft = event.clientX - canvas.offsetLeft - offsetcanvasDiv - div.offsetWidth/2;
		div.style.left = divLeft + 'px';
	}
}
function moveBall() {
		ballX += deltaX;
		ballY = a*ballX + b;



		 if (ballY < topCanvas) {
			//ballY = topCanvas;
			 //if (a > 0) AX  = leftCanvas + 1;
			 //directBall();
			 clearInterval(timer);
		}
		 if (ballX < leftCanvas)  {
			 //ballX = leftCanvas;
			// AY = bottomCanvas - 1;
			 //AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1);
	}
		 if (ballX > rightCanvas - ball.offsetWidth) {
			//ballX = rightCanvas- ball.offsetWidth;
			//AY = bottomCanvas - 1;
			//AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1);
			}
		 if (ballY > bottomCanvas - ball.offsetWidth) {
			//ballY = bottomCanvas - ball.offsetWidth;
			//AY = topCanvas + 1;
			//AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1);
		   }
		 ball.style.left = ballX + 'px';
		 ball.style.top = ballY + 'px';
		 console.log(ballX + " " + ballY + " " + a + " " + b);


}
