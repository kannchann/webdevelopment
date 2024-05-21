var playerOne = Math.floor((Math.random() *6)+ 1);
var playerTwo = Math.floor((Math.random() *6)+ 1);

var imageOne = "images/dice" + playerOne + ".png";

document.querySelector(".img1").setAttribute("src", imageOne)
document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwo + ".png" )


if(playerOne>playerTwo){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(playerOne<playerTwo){
    document.querySelector("h1").innerHTML = "Player 2 wins";

}



