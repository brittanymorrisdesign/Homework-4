// Setting up initial variables
var i = 0;
var seconds = 75;
var score = 0;
var questionNum = 0;
var interval


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
var retakeBtn = document.getElementById("retake-btn");
var highScoresContainer = document.getElementById("highscores-container");
var highScoresBtn = document.getElementById("highscores-btn");
var submitBtn = document.getElementById("submit-btn");
var highScoresContainer = document.getElementById("highscores-container");
var inputText = document.getElementById("input-text");
var questionContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("score-container");
var messageDiv = document.querySelectorAll("message");
var highScoresLink = document.querySelectorAll("highscoreslink");

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
        if (seconds === 0) {
            clearInterval(seconds); // Stops timer at 0
          }
            timerParameters();
        }, 1000);
    }

    
function timerParameters() {
    if (seconds < 10) {
        seconds = "0" + seconds.toString();
    }
    if (seconds <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Expired!";
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
        document.getElementById("message").textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").textContent = "Incorrect!";
        seconds -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").textContent = "Incorrect!";
        seconds -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
    timerParameters()
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
        correctSound.play();
    }
    else {
        document.getElementById("message").textContent = "Incorrect!";
        seconds -= 15;
        incorrectSound.play();
    }
    i++;
    initiateQuestions();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
    }
    else {
        document.getElementById("message").textContent = "Incorrect!";
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
    timerParameters();
    clearInterval(interval); // Stops Timer
};

// Event Listeners
startBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", startTimer);

// Adding names to local storage 

     // Connect submit button to form
     submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        message.innerHTML = ""; // Hides messages

    // Create user object from submission
      var user = {
           Name: inputText.value.trim(),
};
    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("seconds", JSON.stringify(seconds));
  
    // Store info with submit button
submitBtn.addEventListener("click", function () {
    localStorage.setItem("submitBtn", JSON.stringify(user));
    localStorage.setItem("seconds", JSON.stringify(seconds));
})
    }
)

    // Highscores button clicked
highScoresBtn.addEventListener("click", function(event) {
    scoreContainer.setAttribute("style", "display: none;")
    retakeBtn.setAttribute("style", "display: block;")
    document.getElementById("question").textContent = "High Scores";
    submitBtn.remove();
    inputText.remove();
    highScoresBtn.remove();
    highScoresBtn.remove();
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user")); // Changes object back to string
    question.textContent = lastUser.Name + ": " + localStorage.getItem("seconds");
})
