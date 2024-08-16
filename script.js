
function getComputerChoice(){
return Math.floor(Math.random()*3);
}

function getHumanChoice(){
return prompt("What will you pick Rock,Paper or Scissors??");
}
function playGame(){
    function playRound(){
        while (humanScore<5 || computerScore<5){
            computer=getComputerChoice();
            human=getHumanChoice();
            if(toLower.human()==rock){
                if(computer==0){
                    alert("Tie");
                }
                else if(computer==1){
                    alert("Computer Wins");
                    computerScore++;
                }
                else if(computer==2){
                    alert("You Win!!");
                    humanScore++;
                }
            }
            else if(toLower.human=="scissors"){
                if(computer==0){
                    alert("Computer Wins");
                    computerScore++;
                }
                else if(computer==1){
                    alert("You Win!!");
                    humanScore++;
                    }
                else if(computer==2){
                    alert("Tie");
                }
                }
            else if(toLower.human=="paper"){
                if(computer==0){
                    alert("You Win!!");
                    humanScore++;
                }
                else if(computer==1){
                    alert("Tie");
                }
                else if(computer==2){
                    alert("Computer wins");
                    computerScore++;
                }
            }
            }
            if (humanScore>computerScore){
                return alert("You win!!, your score was "+humanScore);
            }
            else if(computerScore>humanScore){
                return alert("You lost, your score was "+humanScore)
            }

            
            }
        }



//const a=0;//Rock
//const b=1; //Paper
//const c=2; //Scissor
let humanScore=0;
let computerScore=0;

playGame();


