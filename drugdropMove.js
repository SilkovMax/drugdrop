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
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
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
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			}
			//console.log(divLeft);
		}
		else 
			if(event.keyCode==32) {
				if (!play) {
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
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
						
			}
		
		}
	 
	}
	
function moveBall() {
		
		let topCanvas = canvas.offsetTop + borderDist;
		let leftCanvas = canvas.offsetLeft + borderDist;
		let bottomCanvas = canvas.offsetTop - borderDist + canvas.offsetWidth;
		let rightCanvas	= canvas.offsetLeft - borderDist + canvas.offsetWidth;
		console.log(mX + " " + mY);
				
		let a = (ballY - mY) / (ballX - mX);
		let b = ballY - a * ballX;
		ballX = (mX - ballX)/(1/speedBall) + ballX;
		ballY = a * ballX + b;
		console.log(ballX + " " + ballY);
					
		 if (mY < topCanvas) ballY = topCanvas;
		 if (mX < leftCanvas) ballX = leftCanvas;
		 if (mX > rightCanvas - ball.offsetWidth) {
			ballX = rightCanvas- ball.offsetWidth;
			}
		 if (mY > bottomCanvas - ball.offsetWidth) {
			ballY = bottomCanvas - ball.offsetWidth;
		   }
		 ball.style.left = ballX + 'px';
		 ball.style.top = ballY + 'px';
	
}	
	
