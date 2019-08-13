'use strict'

//let canvas = document.getElementById("canvas");

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
					play = true;
					//timer = setInterval(moveBall, 66);
				} else {
					play = false;
					//clearInterval(timer);
				}
			}
};

window.onmousemove = function () {
	
	if (event.clientX >= canvas.offsetLeft + div.offsetWidth/2 && event.clientX <= canvas.offsetLeft + canvas.offsetWidth - div.offsetWidth/2) 
		{
			divLeft = event.clientX - canvas.offsetLeft - offsetcanvasDiv - div.offsetWidth/2 ;		
			div.style.left = divLeft + 'px';
			if (!play) {
				ball.style.left = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2  + 'px';
				nowBallX = div.offsetLeft + div.offsetWidth/2 - ball.offsetWidth/2;
		//	console.log(divLeft);
		//	console.log(canvas.offsetLeft);
		//	console.log(offsetcanvasDiv);
		//	console.log(div.offsetWidth/2);
		//	console.log(event.clientX);
			
			}
		
		}
	}
	
function moveBall() {
	let topCanvas = canvas.offsetTop + borderDist;
	console.log(topCanvas);
	console.log("Y:" + event.clientY +", X:"+event.clientX);
	let leftCanvas = canvas.offsetLeft + borderDist;
	let bottomCanvas = canvas.offsetTop - borderDist + canvas.offsetWidth;
	let rightCanvas	= canvas.offsetLeft - borderDist + canvas.offsetWidth;
	//let canvasCoords = this.getBoundingClientRect();
	let ballCoords = {
		top: event.clientY - topCanvas,
		left: event.clientX - leftCanvas
	};
	console.log(ballCoords.top);
	console.log(ballCoords.left);
	 if (ballCoords.top < topCanvas) ballCoords.top = topCanvas;
	 if (ballCoords.left < leftCanvas) ballCoords.left = leftCanvas;
	 if (ballCoords.left + ball.offsetWidth > rightCanvas) {
        ballCoords.left = rightCanvas- ball.offsetWidth;
        }
	 if (ballCoords.top + ball.offsetWidth > bottomCanvas) {
        ballCoords.top = bottomCanvas - ball.offsetWidth;
       }
	 ball.style.left = ballCoords.left + 'px';
     ball.style.top = ballCoords.top + 'px';
}
	
canvas.addEventListener("click", moveBall);
