/* Breaking Bad: Trivia Challenge */

// Buttons
var startBtn = document.createElement("button");
var startOverBtn = document.createElement("button");
var answerBtn0 = document.createElement("button");
var answerBtn1  = document.createElement("button");
var answerBtn2  = document.createElement("button");
var startBtn = document.createElement("button");
// Divs
var question = document.createElement("div");
var timer = document.createElement("div");
var results = document.createElement("div");
// Audio
var startAudio = document.createElement("audio");
var correctAudio = document.createElement("audio");
var incorrectAudio = document.createElement("audio");
startAudio.setAttribute("src", "./Develop/audio/breaking-bad-intro.mp3");
startAudio.setAttribute("src", "./Develop/audio/xxxxx");
incorrectAudio.setAttribute("src", "./Develop/audio/Better_Call_Saul.wav");

// Game object variables

index : 0;
correct: 0;
incorrect: 0;
timer : 0;

// Create a function, generate HTML, 

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
    
