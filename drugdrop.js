'use strict'

let div;
let canvas;
let deltaX = 0;
let deltaY = 0;
let left = 0;
//let div1_left = 0;
//let dist = 0;
let curleft = 0;

let createElements = function() {
	canvas = document.createElement("div");
	div = document.createElement("div");
	if(div && canvas) {
		canvas.classList.add("canvas");
		canvas.setAttribute("id", "canvas")
		document.documentElement.children[1].appendChild(canvas);
		div.classList.add("rect");
		div.setAttribute("id", "carret");
		canvas.appendChild(div);
		div.style.left = (canvas.getBoundingClientRect().right - canvas.getBoundingClientRect().left)/2 - (div.getBoundingClientRect().right - div.getBoundingClientRect().left)/2 + 'px';

		div.style.top = canvas.getBoundingClientRect().bottom - canvas.getBoundingClientRect().top - (div.getBoundingClientRect().bottom - div.getBoundingClientRect().top) + 'px';

		/*div.addEventListener("mouseenter", beReadyToMove);
		div.addEventListener("mouseleave", lossReadynessToMove);*/

		//div1.classList.add("rect");
	//	div1.style.left = 500 + "px";
		//document.documentElement.children[1].appendChild(div1);
		/*div1.addEventListener("mouseenter", beReadyToMove);
		div1.addEventListener("mouseleave", lossReadynessToMove);*/
		//div1_left = document.getElementsByTagName("div")[1].getBoundingClientRect().left;

	//	dist = (document.getElementsByTagName("div")[0].getBoundingClientRect().right - document.getElementsByTagName("div")[0].getBoundingClientRect().left)/2;
	}
}

window.onkeydown = function move_left(){
	if(event.keyCode==37){
		left-=10;
		div.style.left = curleft + left + 'px';
		//document.getElementsByTagName("div")[1].style.left = curleft + div1_left + 'px';
		//document.getElementsByTagName("div")[1].style.left = document.getElementsByTagName("div")[1].getBoundingClientRect().left - step + 'px';
	}
		else if(event.keyCode==39){
			left+=10;
			div.style.left = curleft + left + 'px';
			//document.getElementsByTagName("div")[1].style.left = curleft + div1_left + 'px';
			//document.getElementsByTagName("div")[1].style.left = document.getElementsByTagName("div")[1].getBoundingClientRect().left + step + 'px';
		}
};

window.onmousemove = function () {
	if (event.clientX >= canvas.getBoundingClientRect().left && event.clientX <= canvas.getBoundingClientRect().right-(carret.getBoundingClientRect().right - carret.getBoundingClientRect().left)) {
		div.style.left =  event.clientX + 'px';
	}
	//document.getElementsByTagName("div")[1].style.left = div1_left + event.clientX - dist + 'px';
	curleft = div.getBoundingClientRect().left;
	left = 0;
}

/*let beReadyToMove = function() {
	this.addEventListener("mousedown", moveRect);
	this.addEventListener("mouseup", moveRect);
	console.log("a rect is ready focus")
}
let lossReadynessToMove = function() {
	this.removeEventListener("mousedown", moveRect);
	this.removeEventListener("mouseup", moveRect);
	console.log("a rect lost focus")
}

let moveRect = function (evt) {
	if (evt.button == 0) {
		if (evt.type === "mousedown") {
			this.addEventListener("mousemove", moveRectToThePointer);
			let box = this.getBoundingClientRect();
			deltaX = evt.clientX - box.left;
			deltaY = evt.clientY - box.top;
			console.log("The rect is moving (" + deltaX + "," + deltaY + ")");
		}   else if (evt.type === "mouseup") {
			this.removeEventListener("mousemove", moveRectToThePointer);
			console.log("The rect is still")
		}
	}   else {
		console.log("Not is left button is pressed");
	}
}

let moveRectToThePointer = function(evt) {
	this.style.left = evt.clientX - deltaX + "px";
	this.style.top = evt.clientY - deltaY + "px";
}
*/
document.addEventListener("DOMContentLoaded", createElements);
