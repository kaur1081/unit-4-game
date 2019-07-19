//created variables for assigning task
var randomNumber  = 0;
var wins          = 0;
var losses        = 0;
var totalScore    = 0;
var crystalPink   = 0;
var crystalPurple = 0;
var crystalBlue   = 0;
var crystalWhite  = 0;

// assiging number to variables

function getRandomNumber(min,max){
   return  Math.floor(Math.random() * (120-19 +1) + 19);
}

// on pageupdate we want to see a random number displayed,  all the crystals have a value between 1-12.
function onPageLoad(){

    totalScore     =   0;
    randomNumber   =   getRandomNumber(19,120);
    document.getElementById('random').innerHTML = randomNumber;
    console.log(randomNumber);
    crystalPink    =   Math.floor(Math.random() * (12-1+1) + 1);
    crystalPurple  =   Math.floor(Math.random() * (12-1+1) + 1);
    crystalBlue    =   Math.floor(Math.random() * (12-1+1) + 1);
    crystalWhite   =   Math.floor(Math.random() * (12-1+1) + 1);
   
}
// updateTotalScore/wins/losses
function updateTotalScore(userSelection) {

    totalScore += userSelection;
    document.getElementById('totalNumber').innerHTML = 'Total Score=' +totalScore;
    
    if (randomNumber < totalScore){
        wins++
       
        document.getElementById('Wins').innerHTML = 'Wins= ' + wins;
       
        alert("you win!")
    } else {
        Losses++
      
        document.getElementById('Losses').innerHTML = 'losses= ' + losses;
        }
    }

// when game start  onclick functions ||comparison  with wins/loses/ your Score-update||
// add value to the stone and update score

function handlePinkImageClickEvent(){
    console.log("crystalPink = " + crystalPink);
    updateTotalScore(crystalPink);
}
document.getElementById("pink").addEventListener("click", handlePinkImageClickEvent);


function handlePurpleImageClickEvent(){
    console.log("crystalPurple=" +crystalPurple);
    updateTotalScore(crystalPurple);
}
document.getElementById("purple").addEventListener("click", handlePurpleImageClickEvent);


function handleBlueImageClickEvent(){
    console.log("crystalBlue=" + crystalBlue);
    updateTotalScore(crystalBlue);
}
document.getElementById("blue").addEventListener("click", handleBlueImageClickEvent);

 
function handleWhiteImageClickEvent(){
    console.log("crystalWhite=" +crystalWhite);
    updateTotalScore(crystalWhite);
}    
document.getElementById("white").addEventListener("click",handleWhiteImageClickEvent);



// reset to onpageload
onPageLoad();




