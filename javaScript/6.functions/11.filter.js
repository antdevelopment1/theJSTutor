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

// function playGame() {

//     var getUserInput = 'Rock';
//     getUserInput = getUserInput.toLowerCase();


//     function computerChoice() {
//         // Randomize the computer's choice
//         var randomChoice = Math.floor(Math.random() * 3) + 1;
//         console.log(randomChoice);
//         let one = 1;
//         let two = 2;
//         let three = 3;

//         // Check if the randomized number equals the set variables above
//         if (randomChoice === one) {
//             return 'rock';
//         } else if (randomChoice === two) {
//             return 'paper';
//         } else if (randomChoice === three) {
//             return 'scissors';
//         } else {
//             return 'Not valid input';
//         }
//     }

//     function determineWinner(userInput, callback) {
//         // Save the result of the computer choice
//         let computerInput = callback();
    
//         // Check is user has rock and computer has scissors
//         if (userInput === 'rock' && computerInput === 'scissors') {
//             console.log('You have won');
//         // Check if user has paper and computer has scissors
//         } else if (userInput === 'paper' && computerInput === 'scissors') {
//             console.log('The computer has won');
//         } else if (userInput === 'scissors' && computerInput === 'scissors') {
//             console.log('Its a tie');
//         } else if (userInput === 'rock' && computerInput === 'paper') {
//             console.log('You have a lost');
//         } else if (userInput === 'rock' && computerInput === 'rock') {
//             console.log('Its a tie');
//         } else if (userInput === 'paper' && computerInput === 'roock') {
//             console.log('You have won');
//         } else if (userInput === 'paper' && computerInput === 'paper') {
//             console.log('Its a tie');
//         }
        
//     }

//     determineWinner(getUserInput, computerChoice);

// }
// console.log(playGame());

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
const everyChar = story.split('');

const betterWords = storyWords.filter(function(word) {
  return !unnecessaryWords.includes(word); 
}); 
// console.log(betterWords);

let reallyCounter = 0;
let veryCounter = 0; 
let basicallyCounter = 0;
let sentenceCount = 0;

const repeatWords = storyWords.filter(function(word) {
  if (word === 'really') {
    return reallyCounter = reallyCounter + 1; 
  } else if (word === 'very') {
    return veryCounter = veryCounter + 1; 
  } else if (word === 'basically') {
    return basicallyCounter = basicallyCounter + 1; 
  }
}); 

// console.log('really counter: ' + reallyCounter);
// console.log('very counter: ' + veryCounter);
// console.log('basically counter: ' + basicallyCounter);
// console.log('there are ' + sentenceCount + 'in this paragraph');

// for (let word = 0; word < everyChar.length; word++) {
//   if (everyChar[word] === '!' || everyChar[word] === '.') {
//     sentenceCount += 1;
//   }
// }

// let count = 0;
// everyChar.forEach(char => {
//     if (char === '.' || char === '!') {
//         count += 1;
//     }
// })
// let makePlural = everyChar.map(char => {
//     // Return every ! and .
//    if (char === '.' || char === '!') {
//        count += 1;
//    }
// });

// // console.log(secondArr);
// console.log(count);

const everything = () => {
    let count = 0;
    for (let i = 0; i < everyChar.length; i++) {
        console.log(everyChar[i]);
        if (everyChar[i] === '.' || everyChar[i] === '!') {
            count += 1;
        }
    }
    console.log(count);
}

let color = 'green'


module.exports = everything;
module.exports = color;

