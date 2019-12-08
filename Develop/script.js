// Inititate Variables
var startButton = document.getElementById("start-btn");
var score = 0;
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var answerButtons = document.getElementById("answer-buttons");


// Timer
var seconds = 75, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
})();

// Starting the Game //

startBtn.addEventListener("click", startGame)
// Start the game, hides the button after user clicks
function startGame () {
startButton.classList.add("hide");
document.getElementById("start-btn").style.visibility = "hidden";
// Hides message when button is clicked
var messageDiv = document.getElementById("message");
if (messageDiv.style.display === "none") {
    messageDiv.style.display = "block";
} else {
    messageDiv.style.display = "none";
}
return renderQuestion()
}
