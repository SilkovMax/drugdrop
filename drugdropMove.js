'use strict'

//let canvas = document.getElementById("canvas");

window.onkeydown = function move_left(){
	
	let widthCarret = div.offsetWidth;
	console.log(this);

	if(event.keyCode==37){//левая
		divLeft=divLeft - left;
		if (Math.abs(divLeft) > offsetcanvasDiv - 2*borderDist)
			divLeft = -offsetcanvasDiv + borderDist;		
			div.style.left = divLeft + 'px';
			if (!play && (ballY > (carret.offsetTop - ball.offsetWidth -1)) ) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			}
			//console.log(ballY + " " + carret.offsetTop - ball.offsetWidth);
	}
	else 
		if(event.keyCode==39){//правая
			divLeft=divLeft + left;
			if (Math.abs(divLeft) > offsetcanvasDiv )
			divLeft = offsetcanvasDiv - borderDist;		
			div.style.left = divLeft + 'px';
			if (!play && (ballY > (carret.offsetTop - ball.offsetWidth -1)) ) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			}
			//console.log(divLeft);
		}
		else 
			if(event.keyCode==32) {
				
				if (!play) {
					curBallX = ballX;
					curBallY = ballY;
					AY = topCanvas + 1;
					AX = (rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1;
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
      
	if (event.clientX >= canvas.offsetLeft+ borderDist + div.offsetWidth/2 && event.clientX <= canvas.offsetLeft + canvas.offsetWidth - div.offsetWidth/2 - borderDist) 
		{
			divLeft = event.clientX - canvas.offsetLeft - offsetcanvasDiv - div.offsetWidth/2;		
			div.style.left = divLeft + 'px';
			if (!play && (ballY > (carret.offsetTop - ball.offsetWidth -1)) ) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
				
						
			}
		console.log(ballY + " " + (carret.offsetTop - ball.offsetWidth));
		}
	 
	}
	
function moveBall() {
				
				
		let a = (ballY - AY) / (ballX - AX);
		let b = ballY - a * ballX;
		ballX = (AX - curBallX)/(1/speedBall) + ballX;
		ballY = a * ballX + b;
		console.log(ballX + " " + ballY);
					
		 if (ballY < topCanvas) {
			 ballY = topCanvas;
			 curBallX = ballX;
			 curBallY = ballY;
			 if (a > 0)
				AX  = leftCanvas + 1;
			else 
				AX  = rightCanvas - 1;
			 AY = (bottomCanvas - topCanvas -2)* Math.random() + topCanvas +1; 
		}
		 if (ballX < leftCanvas)  {
			 ballX = leftCanvas;
			 curBallX = ballX;
			 curBallY = ballY;
			 AY  = bottomCanvas - 1;
			 AX = (rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1; 
		}
		 if (ballX > rightCanvas - ball.offsetWidth) {
			ballX = rightCanvas- ball.offsetWidth;
			curBallX = ballX;
			curBallY = ballY;
			AY  = bottomCanvas - 1;
			AX = (rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1; 
			}
		 if (ballY > bottomCanvas - ball.offsetWidth) {
			ballY = bottomCanvas - ball.offsetWidth;
			curBallX = ballX;
			curBallY = ballY;
			AY = topCanvas + 1;
			AX = (rightCanvas - leftCanvas -2)* Math.random() + leftCanvas +1;
		   }
		 ball.style.left = ballX + 'px';
		 ball.style.top = ballY + 'px';
	
}	
	
