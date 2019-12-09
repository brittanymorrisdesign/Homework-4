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
var answerButtons = document.getElementById("answer-buttons");

var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var questionContainerElement = document.getElementById("question-container");


// Timer
var seconds = 75, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
})();

// Starting the Game //

startBtn.addEventListener("click", startGame)
document.getElementById("answer-buttons").hidden = true; // Keeps button questions hidden
// Start the game, hides the button after user clicks
function startGame () {
startBtn.classList.add("hide");
questionContainerElement.classList.remove("hide");
document.getElementById("start-btn").style.visibility = "hidden";
questionElement.innerHTML = ""; // Hides message when button is clicked

	setNextQuestion();
};

function setNextQuestion() {
	document.getElementById("answer-buttons").hidden = false; // Reveals button questions
	answerOne.hidden = false;
	answerTwo.hidden = false;
	answerThree.hidden = false;
	answerOne.hidden = false;
   
	if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

function showQuestion(question) {
	questionElement.innerText = question.question
}
