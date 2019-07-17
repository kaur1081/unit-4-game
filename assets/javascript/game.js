//created variables for assigning task
var randomNumber = 0 ;
var Wins= 0;
var Loses = 0;
var totalScore = 0;
// assiging number to variables
function getRandomNumber(min,max){
//    randomNumber= getRandomNumber;
    return Math.floor(Math.random() * (120-19 +1) + 19);
}
// console.log(randomNumber);

// on pageupdate we want to see a random number displayed,  all the crystals have a value between 1-12.
var onPageLoad = function(){
totalScore = 0;
randomNumber = getRandomNumber(19,120);
var crystalPink =   Math.floor(Math.random() * (12-1+1) + 1);
var crystalPurple = Math.floor(Math.random() * (12-1+1) + 1);
var crystalBlue =   Math.floor(Math.random() * (12-1+1) + 1);
var crystalWhite =   Math.floor(Math.random() * (12-1+1) + 1);
}
console.log(randomNumber);
