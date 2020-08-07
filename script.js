//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var lemonScore = 0;
var watermelonScore = 0;
var cherryScore = 0;
var pineappleScore = 0;

var result = document.getElementById("result");

var retake = document.getElementById("restart");
retake.addEventListener("click", restart);



//#TODO: Use the DOM to create variables for the first quiz question.

// variables for answer choice buttons for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");




//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", lemon);
q1a2.addEventListener("click", watermelon);
q1a3.addEventListener("click", cherry);
q1a4.addEventListener("click", pineapple);

q2a1.addEventListener("click", pineapple);
q2a2.addEventListener("click", lemon);
q2a3.addEventListener("click", cherry);
q2a4.addEventListener("click", watermelon);


q3a1.addEventListener("click", lemon);
q3a2.addEventListener("click", cherry);
q3a3.addEventListener("click", pineapple);
q3a4.addEventListener("click", watermelon);

// q4a1.addEventListener("click", lemon);



//#TODO: Define quiz functions here
function lemon(){
  lemonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
  updateResult()
   }
}

function watermelon(){
  watermelonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}

function cherry(){
  cherryScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}

function pineapple(){
  pineappleScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}


function updateResult() {
  if (lemonScore >= 2){
    result.innerHTML = "You are a... LEMON!   You can be sweet or sour, depending on who you are around. When people first meet you, it takes time for you to start being yourself around them. But once people get to know you, you become their favorite person! A refreshing addition to people's lives."; 
  }
  else if (watermelonScore >= 2){
    result.innerHTML = "You are a... WATERMELON!   Most of the time, you are calm and just going with the flow of things. You don't really mind when someone else takes control or when making friends. You will fit in and go well together with anyone!";
  }
  else if (cherryScore >= 2){
    result.innerHTML = "You are a... CHERRY!   The cherry on top~ You are an extrovert always expressing yourself and not being afraid to! People find you sweet and have an unavoidable attraction to you.";
  }
  else if (pineappleScore >= 2){
    result.innerHTML = "You are a... PINEAPPLE!   Often known as the wild one of the group. You are up for adventures and can be spontaneous. Basically, people think of you as a fun person! People always want to take you on trips because you will definitely spice things up.";
  }
  else{
    result.innerHTML = "Didn't quit get that, please retake the quiz.";
  }
}

function restart() {
  retake.innerHTML = "Your personality represents the fruit... ";
  
}