//for image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //random number for image 1
var randomImagesource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImagesource);

//for image 2
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;  //random number for image 2
var randomImagesource = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesource);

//selecting winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🚩 "
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩 "
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}