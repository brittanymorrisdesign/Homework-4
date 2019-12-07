// Breaking Bad: Trivia Challenge 
var startOverBtn = document.getElementbyId("startover-button");
var answerBtn0 = document.getElementbyId("button0");
var answerBtn1  = document.getElementbyId("button1");
var answerBtn2  = document.getElementbyId("button2");
var answerBtn3  = document.getElementbyId("button3");
// Divs
var question = document.getElementbyId("question");
var timer = document.getElementbyId("timer");
var results = document.getElementbyId("results");
// Audio
var correctAudio = document.getElementbyId("correct-audio");
var incorrectAudio = document.getElementbyId("incorrect-audio");
incorrectAudio.setAttribute("src", "./Develop/audio/Better_Call_Saul.wav");

// Game object variables
index : 0;
correct: 0;
incorrect: 0;
timer : 0;
// Buttons

var startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startGame)

// Start the game, hides the button after user clicks
function startGame () {
startBtn.classList.add("hide")
questionContainer.classList.remove("hide")
setNextQuestion()
}

function setNextQuestion(){

}


function selectAnswer(){


}


// Closes start button

// Timer
var seconds = 20, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
})();

// Chosen anwswer

var rightCount = 0;
var wrongCount = 0;
    
// Intro Sound
function playSound() {
    var startAudio = document.getElementById("start-audio");
    startAudio.setAttribute("src", "./Develop/audio/breaking-bad-intro.mp3");
    sound.play();
}