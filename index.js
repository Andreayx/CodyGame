var player1 = prompt("Add Player 1");
var player2 = prompt("Add Player 2");
document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Winner is " + player1;
} else if (randomNumber2 > randomNumber1) {
  document.querySelectorAll("h1")[0].innerHTML = "Winner is " + player2;
} else {
  document.querySelectorAll("h1")[0].innerHTML = "Stalemate";
}
