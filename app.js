let compChoices = ["Rock","Paper","Scissors"];
let choices = document.querySelectorAll(".img");
let msg = document.querySelector("#innerEnd");
let uScore = document.querySelector("#user");
let cScore = document.querySelector("#comp");

let userChoice;

userScore = 0;
compScore = 0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
        userChoice = choice.id;
        // console.log("User choice :"+userChoice+"\n");
        // console.log("Comp choice :"+compChoice+"\n");
        checkWinner(userChoice,compChoice);
    });
});

const checkWinner =(user ,comp)=>{
    let winner;
    
    if(user === "Rock" && comp === "Scissors" || user === "Paper" && comp === "Rock" || user === "Scissors" && comp === "Paper"){
  winner = "user";
    }else if(user === comp){
        winner = "draw";
    }else{
        winner = "comp";
    }
    showWinner(winner,user,comp);
}

const showWinner = (winner,user,comp)=>{
 if(winner === "user"){
    userScore++;
    uScore.innerText = userScore;
 msg.innerText = "You Win!!, Your "+user+" beats "+comp;
 msg.style.backgroundColor="green";
 
 }else if(winner == "comp"){
    compScore++;
    cScore.innerText = compScore;
    msg.innerText = "You loss, "+comp+" beats your "+user
    msg.style.backgroundColor="red";
 }else{
    msg.innerText = "Match draw!!! , Play again";
    msg.style.backgroundColor="#081b31"
 }
}

reSet.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    uScore.innerText = "0";
    cScore.innerText = "0";
    msg.innerText = "Pick your move";
    msg.style.backgroundColor="#081b31"
})