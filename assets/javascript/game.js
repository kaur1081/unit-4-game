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
    document.getElementById('totalNumber').innerHTML = 'Total Score=' +totalScore;
    randomNumber   =   10;//getRandomNumber(19,120);
    document.getElementById('random').innerHTML = randomNumber;
    console.log(randomNumber);
    crystalPink    =   10;//getRandomNumber(1,12);
    crystalPurple  =   5;//getRandomNumber(1,12);
    crystalBlue    =   getRandomNumber(1,12);
    crystalWhite   =   getRandomNumber(1,12);
   
}


// updateTotalScore/wins/losses
function updateTotalScore(userSelection) {
    console.log('UPDATE TOTAL SCORE (userSelection, totalScore)', userSelection, totalScore)
    totalScore += userSelection;
    document.getElementById('totalNumber').innerHTML = 'Total Score = ' + totalScore;
    console.log('totalScore', totalScore)
    if (randomNumber === totalScore){
        
        wins++;
        document.getElementById('wins').innerHTML = 'Wins= ' + wins;
        
        confirm("you win! with score:" + totalScore);
        onPageLoad();
    } else if(totalScore > randomNumber) {
        losses++
        document.getElementById('losses').innerHTML = 'Losses= ' + losses;
        onPageLoad();
    }
    
}

var crystals;
var playNewGame;
  function runGame() {

      initGame();
      const crystalKeys = Object.keys(crystals);
      registerClickHandler(crystalKeys);
      updateScoreboard(targetNumber, totalScore, win, lose);


      var playNewGame;
      if (playGame){
  

  function initGame() {
      targetNumber = getRandomNumber(19,120);
      totatScore = 0;
      wins = 0;
      losses = 0;
      crystals = {
        pink: getRandomNumber(1,12),
        purple: getRandomNumber(1,12),
        blue: getRandomNumber(1,12),
        white: getRandomNumber(1,12),
    };
  }

  function registerClickHandlers(crystalKeyArr) {
    crystalKeyArr.forEach(function(id) {
        $('#' + id)
            .attr('data-value', crystals[id])
            .on("click", clickCrystal);
    });
  }
}

  function clickCrystal() {
    totalScore += $(this).attr('data-value');
    if (totalScore === targetNumber) {
        wins++;
        initGame();
    } else if (totalScore > targetNumber) {
        losses++;
        initGame();
    }
    updateScoreboard(targetNumber, totalScore, win, lose);


  }

  function updateScoreboard() {
    
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



