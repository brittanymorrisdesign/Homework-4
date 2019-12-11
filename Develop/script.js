// Setting up initial variables
var i = 0;
var seconds = 75;
var score = 0;
var questionNum = 0;

var questionContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("score-container");
var messageDiv = document.querySelectorAll("#message");
var countdown = document.getElementById("countdown");
var startBtn = document.getElementById("start-btn");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var answerButtons = document.getElementById("answer-buttons");
var finalScore = document.getElementById("finalscore");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var questionContainerElement = document.getElementById("question-container");
// Audio variables
var highScoreSound = new Audio("Develop/audio/breaking-bad-intro.mp3");
var correctSound = new Audio("Develop/audio/You're_god_damn_right.wav");
var incorrectSound = new Audio("Develop/audio/Better_Call_Saul.wav");

// Start Timer once button is clicked
function startTimer() {
    countdown.textContent = 75 

    initiateQuestions(questionNum);
    interval = setInterval(function() {
        seconds--;
        timerParameters();
    }, 1000);
  
}
    
function timerParameters() {
    if (seconds < 10) {
        seconds = "0" + seconds.toString();
    }
   
    if (seconds <= 0) {
        clearInterval(interval);
    }
    
    countdown.textContent = seconds;
}

// Starting the Game 
document.getElementById("answer-buttons").hidden = true; // Keeps button questions hidden
// Start the game, hides the button after user clicks
function startGame () {
    questionContainer.setAttribute("style", "display: block;")
    startBtn.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    document.getElementById("start-btn").style.visibility = "hidden";
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
        seconds -= 15;
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
        seconds -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
    timerParameters()
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        document.getElementById("message").innerHTML = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").innerHTML = "Incorrect!";
        seconds -= 15;
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
        seconds -= 15;
    }
    i++;
    initiateQuestions();
})

// Setting up high scores
function highScores() {
    questionContainer.setAttribute("style", "display: none;")
    scoreContainer.setAttribute("style", "display: block;")
    highScoreSound.play();
    message.innerHTML = ""; // Hides messages
    // Hides scores
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    finalScore.textContent = seconds; // Adds final score
    document.getElementById("question").textContent = "You made it! Now let's cook.";
    setTimeout(finalScore, 1000);
    timerParameters();
    clearInterval(interval); // Stops Timer
};

// Event Listeners
startBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", startTimer);

// Adding names and scores to local storage 
// Check browser support
//if (typeof(Storage) !== "undefined") {
    // Store
 //   localStorage.setItem("lastname", JSON.stringify());
  //  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
