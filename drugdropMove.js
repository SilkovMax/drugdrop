'use strict'

//let canvas = document.getElementById("canvas");

window.onkeydown = function move_left(){
	let widthCarret = div.offsetWidth;
	//console.log(widthCarret);

	if(event.keyCode==37){//левая
		divLeft=divLeft - left;
		if (Math.abs(divLeft) > offsetcanvasDiv - 2*borderDist)
			divLeft = -offsetcanvasDiv + borderDist;		
			div.style.left = divLeft + 'px';
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				nowBallX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			}
			console.log(nowBallX);	
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
					play = true;
					timer = setInterval(moveBall(mX, mY), 66);
				} else {
					play = false;
					clearInterval(timer);
				}
			}
};

window.onmousemove = function () {
	mX = event.clientX;
	mY = event.clientY;
	let ballCoords = {
        top: mY - ball.offsetWidth/2,
        left: mX -  ball.offsetWidth/2
      };
	if (event.clientX >= canvas.offsetLeft+ borderDist + div.offsetWidth/2 && event.clientX <= canvas.offsetLeft + canvas.offsetWidth - div.offsetWidth/2 - borderDist) 
		{
			divLeft = event.clientX - canvas.offsetLeft - offsetcanvasDiv - div.offsetWidth/2;		
			div.style.left = divLeft + 'px';
			if (!play) {
				ball.style.left 
				//ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				ballX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
			console.log(divLeft);
			console.log(event.clientX);
		//	console.log(offsetcanvasDiv);
		//	console.log(div.offsetWidth/2);
		//	console.log(event.clientX);
			
			}
		
		}
	 
	}
	
function moveBall(X , Y) {
	
	ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}
	/*return function()
	{
		let topCanvas = canvas.offsetTop + borderDist;
		//console.log(topCanvas);
		//console.log("Y:" + Y +", X:"+X);
		let leftCanvas = canvas.offsetLeft + borderDist;
		let bottomCanvas = canvas.offsetTop - borderDist + canvas.offsetWidth;
		let rightCanvas	= canvas.offsetLeft - borderDist + canvas.offsetWidth;
		//let canvasCoords = this.getBoundingClientRect();
		if (ballX < X) {
			ballX = ballX + (X - ballX)/(Y - ballY);
		}
		else {
			ballX = ballX - (X - ballX)/(Y - ballY);
		}
		if (ballY < Y) {
			ballY = ballY - (Y - ballY)/(X - ballX);
		}
		else {
			ballY = ballY + (Y - ballY)/(X - ballX);
		}
		//console.log(ballCoords.top);
		//console.log(ballCoords.left);
		 if (Y < topCanvas) ballCoords.top = topCanvas;
		 if (X < leftCanvas) ballCoords.left = leftCanvas;
		 if (X > rightCanvas - ball.offsetWidth) {
			ballCoords.left = rightCanvas- ball.offsetWidth;
			}
		 if (Y > bottomCanvas - ball.offsetWidth) {
			ballCoords.top = bottomCanvas - ball.offsetWidth;
		   }
		 ball.style.left = ballX + 'px';
		ball.style.top = ballY + 'px';
	};
}	
	*/
canvas.addEventListener("click", moveBall);
