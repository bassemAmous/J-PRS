



let humanScore = localStorage.humanScore || 0;
let computerScore = localStorage.computerScore  || 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;



/**
 * trigger Rock event.
 */
function playRock() {
  play("rock");
}
/**
 * trigger Paper button event.
 */
function playPaper() {
  play("paper");
}
/**
 * trigger Scissor event.
 */
function playScissors() {
  play("scissors");
}


/**
 * Represents a .
 * @param {string} humanPlay it's the weapon that the player chose .
 * it's the main function to start a score calculation and compare what the player chosen and the joker choice
 */
function play(humanPlay) {
  const  status = document.getElementById('status');
  const computerPlay = getComputerPlay(status);
  displayGameEvent(status,humanPlay, computerPlay);
  scoreCalculation(humanPlay,computerPlay,status);
  scoreScreen(humanScore, computerScore);
}

/**
 * @param {string} humanPlay it's the weapon that the player chose .
 * @param {string} Status is the message of what the player and the joker played.
 * @param {string} computerPlay the choice of the player.
 * it's about changing the status message
 */
function displayGameEvent(status, humanPlay, computerPlay) {
  status.innerHTML = "<p>You played <strong>" + humanPlay +
    "</strong>. The Joker played <strong>" + computerPlay + "</strong>.</p>";
}

/**
 * @param {string} humanPlay it's the weapon that the player chose .
 * @param {string} Status is the message result for the winner.
 * @param {string} computerPlay the choice of the player.
 * it's the function that displays the result of the game (lost won...)
 */
function scoreCalculation(humanPlay,computerPlay,status) {
  const lost = "<p>You lost! Never give up try again :S</p>";
  const won = "<p>Congratulation you won :D</p>";
  const tied = "<p>Tied :3</p>";

  if(humanPlay == 'rock') {

    if(computerPlay == 'rock') {
      status.innerHTML += tied;
    } else if (computerPlay == 'paper') {
      status.innerHTML += lost;
      computerScore++;
    } else if (computerPlay == 'scissors') {
      status.innerHTML += won;
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      status.innerHTML += won;
      humanScore++;
    } else if (computerPlay == 'paper') {
      status.innerHTML += tied;
    } else if (computerPlay == 'scissors') {
      status.innerHTML += lost;
      computerScore++;
    }
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      status.innerHTML += lost;
      computerScore++;
    } else if (computerPlay == 'paper') {
      status.innerHTML += won;
      humanScore++;
    } else if (computerPlay == 'scissors') {
      status.innerHTML += tied;
    }

  }

}


/**
 * Store the score onb the storage( to move to storage folder)
 */
function saveBD(){
  localStorage.computerScore = computerScore;
  localStorage.humanScore = humanScore;
}

/**
 * Restart the score onb the storage( to move to storage folder)
 */
function restartBD(){
  humanScore =  0;
  computerScore = 0;
  localStorage.computerScore = computerScore;
  localStorage.humanScore = humanScore;
  scoreScreen(humanScore,computerScore);
}


/**
 * @param {string} humanScore Player's score.
 * @param {string} computerScore Joker's score.
 * Change the score on the score board
 */
function scoreScreen(humanScore, computerScore) {
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

/**
 * @param {string} humanScore Player's score.
 * @param {string} computerScore Joker's score.
 * Randomise magic for the choice of the Joker's weapon
 */
function getComputerPlay() {
  const plays = ['rock', 'paper', 'scissors'];
  const play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

scoreScreen(humanScore, computerScore);




