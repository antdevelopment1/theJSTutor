// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <0.34){
//     computerChoice = "rock";
// }else if(computerChoice <=0.67){
//     computerChoice = "paper";
// }
// else{
//     computerChoice = "scissors";
// }
// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//     }
//     if(choice1==="rock"){
//         if(choice2==="scissors"){
//             return "rock wins";
//         }
//         else{
//             return "paper wins";
//         }
//     }
//     if(choice1==="paper"){
//         if(choice2==="rock"){
//             return "paper wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
//     if(choice1==="scissors"){
//         if(choice2==="rock"){
//             return "rock wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
// };
// compare(userChoice,computerChoice);

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <0.34){
//     computerChoice = "rock";
// }else if(computerChoice <=0.67){
//     computerChoice = "paper";
// }
// else{
//     computerChoice = "scissors";
// }

// var compare = function(choice1,choice2){
//       "future code will be inserted in here"
// };


// if(choice1===choice2){
//     return "The result is a tie!";
// }

// if(choice1==="rock"){
//     if(choice2==="scissors"){
//         return "rock wins";
//     }
//     else{
//         return "paper wins";
//     }
// }

// if(choice1==="paper"){
//     if(choice2==="rock"){
//         return "paper wins";
//     }
//     else{
//         return "scissors wins";
//     }
// }
// if(choice1==="scissors"){
//     if(choice2==="rock"){
//         return "rock wins";
//     }
//     else{
//         return "scissors wins";
//     }
// }

// const getUserChoice = userInput =>{

//     userInput = userInput.toLowerCase();
  
//     if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors'){
//       return userInput;
//     }
//     else console.log(`${userInput} is not a valid input`);
  
//   }
//   // console.log(getUserChoice('paper')); /*to test what's priting from the above function*/
  
//   // Get computer to make a choice
//   const getComputerChoice = () =>{
//    let value = Math.floor(Math.random() * 3);
//     switch(value){
//       case 0:
//         return 'rock';
//       case 1:
//         return 'paper';
//       default:
//         return 'scissors'
//     }
//   }
//   // console.log(getComputerChoice());
  
//   // Creating a function to determine the winner
//   const determineWinner = (userChoice,computerChoice)=>{
  
//     if (userChoice === computerChoice){
//       console.log('The game is a tie');
//     }
  
//    if (userChoice === 'rock' && computerChoice === 'paper'){
//           return"The computer won!";
//      }
  
//     if (userChoice === 'rock' && computerChoice === 'scissors'){
//           return"The user won!";
//      }
  
//     if (userChoice === 'paper' && computerChoice === 'rock'){
//           return"The user won!";
//      }
//     if (userChoice === 'paper' && computerChoice === 'scissors'){
//           return"The computer won!";
//      }
//     if (userChoice === 'scissors' && computerChoice === 'rock'){
//           return"The computer won!";
//      }
//     if (userChoice === 'scissors' && computerChoice === 'paper'){
//           return"The user won!";
//     }
//   };
  
//   // getUserChoice('rock');
//   console.log(determineWinner('scissors', 'paper'));

function playGame() {

    var getUserInput = 'Rock';
    getUserInput = getUserInput.toLowerCase();


    function computerChoice() {
        // Randomize the computer's choice
        var randomChoice = Math.floor(Math.random() * 3) + 1;
        console.log(randomChoice);
        let zero = 1;
        let one = 2;
        let two = 3;

        // Check if the randomized number equals the set variables above
        if (randomChoice === zero) {
            return 'rock';
        } else if (randomChoice === one) {
            return 'paper';
        } else if (randomChoice ===two) {
            return 'scissors';
        } else {
            return 'Not valid input';
        }
    }

    function determineWinner(userInput, callback) {
        let computerInput = callback();
    
        // Check is user has rock and computer has scissors
        if (userInput === 'rock' && computerInput === 'scissors') {
            console.log('You have won');
        // Check if user has paper and computer has scissors
        } else if (userInput === 'paper' && computerInput === 'scissors') {
            console.log('The computer has won');
        } else if (userInput === 'scissors' && computerInput === 'scissors') {
            console.log('Its a tie');
        } else if (userInput === 'rock' && computerInput === 'paper') {
            console.log('You have a lost');
        } else if (userInput === 'rock' && computerInput === 'rock') {
            console.log('Its a tie');
        } else if (userInput === 'paper' && computerInput === 'roock') {
            console.log('You have won');
        } else if (userInput === 'paper' && computerInput === 'paper') {
            console.log('Its a tie');
        }
        
    }

    determineWinner(getUserInput, computerChoice);

}
console.log(playGame());