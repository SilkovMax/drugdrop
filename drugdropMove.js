'use strict'

//let canvas = document.getElementById("canvas");

window.onkeydown = function move_left(){
	
	let widthCarret = div.offsetWidth;
	console.log(this);

	if(event.keyCode==37 && play){//левая
		divLeft=divLeft - left;
		if (Math.abs(divLeft) > offsetcanvasDiv - 2*borderDist)
			divLeft = -offsetcanvasDiv + borderDist;		
			div.style.left = divLeft + 'px';
			if (!play && (ballY > (carret.offsetTop - ball.offsetWidth -1)) ) {
				ballX = Math.floor(div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2);
				ball.style.left = ballX + 'px';
			}
			//console.log(ballY + " " + carret.offsetTop - ball.offsetWidth);
	}
	else 
		if(event.keyCode==39 && play){//правая
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv )
			divLeft = offsetcanvasDiv - borderDist;		
			div.style.left = divLeft + 'px';
			if (!play && (ballY > (carret.offsetTop - ball.offsetWidth -1)) ) {
				ballX = Math.floor(div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2);
				ball.style.left = ballX + 'px';
			}
			//console.log(divLeft);
		}
		else 
			if(event.keyCode==32) {
				
				if (!play) {
					if (!pause) {
					pause = true;
					curBallX = ballX;
					curBallY = ballY;
					AY = topCanvas + 1;
					AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1);
					
					}
					play = true;
					timer = setInterval(moveBall, 66);
				} else {
					play = false;
					clearInterval(timer);
				}
			}
};

window.onmousemove = function () {
	mX = event.clientX;
	mY = event.clientY;
      
	if (play && event.clientX >= canvas.offsetLeft+ borderDist + div.offsetWidth/2 && event.clientX <= canvas.offsetLeft + canvas.offsetWidth - div.offsetWidth/2 - borderDist) 
		{
			divLeft = event.clientX - canvas.offsetLeft - offsetcanvasDiv - div.offsetWidth/2;		
			div.style.left = divLeft + 'px';
			if (!play && (ballY > (carret.offsetTop - ball.offsetWidth -1)) ) {
				
				ballX = Math.floor(div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2);
				ball.style.left = ballX + 'px';
				
						
			}
		console.log(ballY + " " + (carret.offsetTop - ball.offsetWidth));
		}
	 
	}
	
function moveBall() {
				
		let randC = ballX - AX;
			if(randC == 0) {
				let sign = 1;
				randC = Math.random();
				if(randC < 0.5) {
					sign = -1;
				}
										
				randC =(Math.floor(Math.random() * (4-1))+1) * sign;
				
			}
		let randA = ballY - AY;
		if(randA == 0) {
				let sign = 1;
				randA = Math.random();
				if(randA < 0.5) {
					sign = -1;
				}
										
				randA =(Math.floor(Math.random() * (4-1))+1) * sign;
				
			}
		
		let a = randA / randC;
		let b = ballY - a * ballX;
		//console.log(randA + " " + randC);
		ballX = Math.floor((AX - curBallX)/(1/speedBall) + ballX);
		ballY = Math.floor(a * ballX + b)
		
					
		 if (ballY < topCanvas) {
			 ballY = topCanvas;
			 curBallX = ballX;
			 curBallY = ballY;
			 if (a > 0)
				AX  = leftCanvas + 1;
			else 
				AX  = rightCanvas - 1;
			 AY = Math.floor((bottomCanvas - topCanvas -2)* Math.random() + topCanvas +1); 
		}
		 if (ballX < leftCanvas)  {
			 ballX = leftCanvas;
			 curBallX = ballX;
			 curBallY = ballY;
			 AY  = bottomCanvas - 1;
			 AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1); 
			 console.log(AX);
		}
		 if (ballX > rightCanvas - ball.offsetWidth) {
			ballX = rightCanvas- ball.offsetWidth;
			curBallX = ballX;
			curBallY = ballY;
			AY  = bottomCanvas - 1;
			AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1); 
			console.log(AX);
			}
		 if (ballY > bottomCanvas - ball.offsetWidth) {
			ballY = bottomCanvas - ball.offsetWidth;
			curBallX = ballX;
			curBallY = ballY;
			AY = topCanvas + 1;
			AX = Math.floor((rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1);
			console.log(AX);
		   }
		 ball.style.left = ballX + 'px';
		 ball.style.top = ballY + 'px';
		 console.log(ballX + " " + ballY + " " + AX + " " + AY + " " + a + " " + b);

	
}	
	
