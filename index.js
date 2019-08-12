var playerOne = prompt("What is your name Player 1?");
var playerTwo = prompt("What is your name Player 2?");

document.querySelectorAll(".container p")[0].textContent = playerOne;
document.querySelectorAll(".container p")[1].textContent = playerTwo;

document.querySelectorAll(".btn")[0].addEventListener("click", play);

function play() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var myLeftDice = "images/dice" + randomNumber1 + ".png";

var myRightDice = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", myLeftDice);

document.querySelector(".img2").setAttribute("src", myRightDice);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🏆" + playerOne + " Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector ("h1").textContent = playerTwo + " Wins!🏆";
}
else {
  document.querySelector("h1").textContent = "Draw!⛔";
}
}
