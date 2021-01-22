var law='Click to jump and save the girl from angry man! :) ,So... if you are ready press "ok"';
alert(law);
const yellgroan=new Audio('yellgroan.mp3');
const girl=new Audio('girl.mp3');
const Scream=new Audio('Scream.mp3');

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },800);
    girl.play();
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score:  ("+Math.floor(counter/100)+')         If you wanna play again,press "ok"'+Scream.play());
        counter=0;
        block.style.animation = "block 3.5s infinite linear";

    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        yellgroan.play();

    }         

}, 10);
