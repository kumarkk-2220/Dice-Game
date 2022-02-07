document.querySelector("h1").innerHTML = "Keep Refreshing to reveal the winner";
let images = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];
let randomDice1 = Math.ceil(Math.random() * 6);
console.log(randomDice1);
let randomDice2 = Math.ceil(Math.random() * 6);
console.log(randomDice2);

for (let i = 1; i <= 6; i++) {
  if (randomDice1 === i) {
    document
      .querySelector(".dice .img1")
      .setAttribute(`src`, `${images[i - 1]}`);
  }
}

for (let j = 1; j <= 6; j++) {
  if (randomDice2 === j) {
    document
      .querySelector(".dice .img2")
      .setAttribute(`src`, `${images[j - 1]}`);
  }
}

if (randomDice1 === randomDice2) {
  document.querySelector(".status").innerHTML = "Draw!";
} else if (randomDice1 > randomDice2) {
  document.querySelector(".status").innerHTML = "Player1 Wins!";
} else {
  document.querySelector(".status").innerHTML = "Player2 Wins!";
}
