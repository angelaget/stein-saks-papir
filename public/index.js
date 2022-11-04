// import * as confetti from "./confetti.js"

let selectedByUser = "none";
let selectedByComp = "none";
let winner = "none";
const outputDiv = document.getElementById("output");

function showResults(){
    if(winner != "none"){
    outputDiv.innerHTML = `
    You chose ${selectedByUser}, and computer chose ${selectedByComp}. <br>
    ${winner}  won!
    `;}
}

function userSelect(selected){
    selectedByUser = selected;
    computerSelect();
}

function computerSelect(){
    let randomChoice = Math.floor(Math.random()*3)+1;
    if(randomChoice == 1) selectedByComp = "rock";
    if(randomChoice == 2) selectedByComp = "paper";
    if(randomChoice == 3) selectedByComp = "scissors";
    checkWinning();
}

function checkWinning(){
    if(selectedByUser == "rock" && selectedByComp == "scissors"
        ||selectedByUser == "paper" && selectedByComp == "rock"
        ||selectedByUser == "scissors" && selectedByComp == "paper"){
            winner = "You";
            startConfetti();
            // confetti.startConfetti(){
            //     confetti.frameInterval = 5;
            // };

            //sette en timer på å kjøre "stopConfetti();" etter så og så lang tid
            setTimeout();
        }

    if(selectedByComp == "rock" && selectedByUser == "scissors"
        ||selectedByComp == "paper" && selectedByUser == "rock"
        ||selectedByComp == "scissors" && selectedByUser == "paper"){
            winner = "Computer";
        }

    if(selectedByUser != "none" && selectedByUser == selectedByComp){
        winner = "No one";
    }   

    showResults();

setTimeout(function(){ 
    document.getElementById("my_audio").play(); 
    }, 1000);
}    