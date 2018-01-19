var numSquares = 0;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var stripe = document.querySelector("#stripe");



init();

resetButton.addEventListener("click", function(){
	reset();
});


function init(){
	setupModeBtns();
	setupSquares();
	reset();	
}

function setupModeBtns(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else if(this.textContent === "Hard"){
			numSquares = 6;
		} else {
			numSquares = 9;
		}
		reset(); 
	});
  }
}

function setupSquares(){
	 for(var i = 0; i <squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Great job!";
			resetButton.textContent = "Another Round?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
  } 
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i = 0;i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#232323";
}

 function changeColors(color){
 	for(var i = 0;i < squares.length; i++){
 		squares[i].style.backgroundColor = color;
 	 }
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateRandomColors(num){
 	var arr = []
 	for(var i = 0; i < num; i++){
 		arr.push(randomColor());
 	}
 	return arr;
 }

function randomColor(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	// pick a green from 0 - 255
	// pick a blue from 0 - 255
	// spaces after the commas with RGB
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function stripeColor(){
	stripe.style.backgroundColor = randomColor();
}

setInterval(stripeColor,2000);

