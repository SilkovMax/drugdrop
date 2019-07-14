'use strict'

let div = undefined;
let deltaX = 0;
let deltaY = 0;

let createElements = function() {
	let div = document.createElement("div");
	let div1 = document.createElement("div");
	if(div && div1) {
		div.classList.add("rect");
		document.documentElement.children[1].appendChild(div);
		div.addEventListener("mouseenter", beReadyToMove);
		div.addEventListener("mouseleave", lossReadynessToMove);
		
		div1.classList.add("rect");
		div1.style.left = 500 + "px";
		document.documentElement.children[1].appendChild(div1);
		div1.addEventListener("mouseenter", beReadyToMove);
		div1.addEventListener("mouseleave", lossReadynessToMove);
	}
}

let beReadyToMove = function() {
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

document.addEventListener("DOMContentLoaded", createElements);
