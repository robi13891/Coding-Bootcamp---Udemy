// Player 1
var randomNumber1 = Math.floor( Math.random() * 6);

if(randomNumber1 == 1) {
    document.querySelector("img.img1").srcset = "images/dice1.png";
} else if (randomNumber1 == 2) {
    document.querySelector("img.img1").srcset = "images/dice2.png";
} else if (randomNumber1 == 3) {
    document.querySelector("img.img1").srcset = "images/dice3.png";
} else if (randomNumber1 == 4) {
    document.querySelector("img.img1").srcset = "images/dice4.png";
} else if (randomNumber1 == 5) {
    document.querySelector("img.img1").srcset = "images/dice5.png";
} else if (randomNumber1 == 6) {
    document.querySelector("img.img1").srcset = "images/dice6.png";
}

// Player 2
var randomNumber2 = Math.floor( Math.random() * 6);

if(randomNumber2 == 1) {
    document.querySelector("img.img2").srcset = "images/dice1.png";
} else if (randomNumber2 == 2) {
    document.querySelector("img.img2").srcset = "images/dice2.png";
} else if (randomNumber2 == 3) {
    document.querySelector("img.img2").srcset = "images/dice3.png";
} else if (randomNumber2 == 4) {
    document.querySelector("img.img2").srcset = "images/dice4.png";
} else if (randomNumber2 == 5) {
    document.querySelector("img.img2").srcset = "images/dice5.png";
} else if (randomNumber1 == 6) {
    document.querySelector("img.img2").srcset = "images/dice6.png";
}

// Display result

if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}