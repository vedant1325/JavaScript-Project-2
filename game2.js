let userScore = 0;
let compScore = 0;
let  msg=document.querySelector('#msg');
let hidemsg=document.getElementById('hide');
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#Computer-score');


const choices = document.querySelectorAll('.choice');


const getCompChoice = () => {
    let option = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawDraw=()=>{
    console.log("Draw game");
    msg.innerText="Tie , Play Again";
    msg.style.background='black';


}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        console.log("You Win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!Your,${userChoice} beats ${compChoice}`;
        msg.style.background='green';

    }
    else{
        console.log("You loose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Loose ,${compChoice} beats ${userChoice}`;
        msg.style.background='red';
    }
}


const playGame = (userChoice) => {
    console.log('User choice is', userChoice);
 
   
   
    
    //Generate Computer Choice
    let compChoice = getCompChoice();
    console.log("Computer choice is", compChoice);
    


    if(userChoice===compChoice){
        drawDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="stone"){
            userWin=compChoice==="paper"? false:true;

        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false:true;
        }
        else{
            userWin=compChoice==="stone"? false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');

        playGame(userChoice);

    })
})