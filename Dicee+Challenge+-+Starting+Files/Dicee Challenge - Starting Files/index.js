var randomNumber1= Math.ceil(Math.random()*6);


var randomDiceImageSource1= "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImageSource1);


var randomNumber2= Math.ceil(Math.random()*6);


var randomDiceImageSource2= "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won!!!"

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won!!1"

}
else{
    document.querySelector("h1").innerHTML="Draw!!!"
}