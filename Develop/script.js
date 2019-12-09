// Setting up initial variables
var i = 0;
var countdown = 75;
let score = 0;
let qCount = 0;
let answers = document.querySelectorAll("question-container");

var startBtn = document.getElementById("start-btn");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var messageDiv = document.querySelector("#message");
var answerButtons = document.getElementById("answer-buttons");

var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var questionContainerElement = document.getElementById("question-container");

var highScoreSound = new Audio("Develop/audio/breaking-bad-intro.mp3");
var correctSound = new Audio("Develop/audio/You're_god_damn_right.wav");
var incorrectSound = new Audio("Develop/audio/Better_Call_Saul.wav");


// Timer
var seconds = 75, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
})();


// Starting the Game 

startBtn.addEventListener("click", startGame)
document.getElementById("answer-buttons").hidden = true; // Keeps button questions hidden
// Start the game, hides the button after user clicks
function startGame () {
startBtn.classList.add("hide");
questionContainerElement.classList.remove("hide");
document.getElementById("start-btn").style.visibility = "hidden";
questionElement.innerHTML = ""; // Hides message when button is clicked
initiateQuestions();
};



// Setting up initial questions

function initiateQuestions() {
	document.getElementById("answer-buttons").hidden = false; // Reveals button questions
	answerOne.hidden = false;
	answerTwo.hidden = false;
	answerThree.hidden = false;
	answerOne.hidden = false;
   
	if (i === questions.length) {
            highScores();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

// Setting up questions

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        document.getElementById("message").innerHTML = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").innerHTML = "Incorrect!";
        countdown -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        document.getElementById("message").innerHTML = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").innerHTML = "Incorrect!";
        countdown -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        document.getElementById("message").innerHTML = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").innerHTML = "Incorrect!";
        countdown -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
})


document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        document.getElementById("message").innerHTML = "Correct!";
        score++;
    }
    else {
        document.getElementById("message").innerHTML = "Incorrect!";
        countdown -= 15;
    }
    i++;
    initiateQuestions();
})

// Setting up high scores

function highScores() {
    questionElement.innerHTML = ""; // Hides questions 
    message.innerHTML = ""; // Hides messages
    highScoreSound.play();
    // Hides scores
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    document.getElementById("question").textContent = "You made it!";
}