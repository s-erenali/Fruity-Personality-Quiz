var questionCount = 0;
var lemonScore = 0;
var watermelonScore = 0;
var cherryScore = 0;
var pineappleScore = 0;

// variables for 2 pointed paired scores
var lemoncherry = lemonScore + cherryScore;
var lemonwatermelon = lemonScore + watermelonScore;
var lemonpineapple = lemonScore + pineappleScore;
var pineapplecherry = pineappleScore +cherryScore;
var pineapplewatermelon = pineappleScore + watermelonScore;
var watermeloncherry = watermelonScore + cherryScore;


var result = document.getElementById("result");




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

// variables for answer choice buttons for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");



// event listeners for answers of question 1
q1a1.addEventListener("click", lemon);
q1a2.addEventListener("click", watermelon);
q1a3.addEventListener("click", cherry);
q1a4.addEventListener("click", pineapple);

// event listeners for answers of question 2
q2a1.addEventListener("click", pineapple);
q2a2.addEventListener("click", lemon);
q2a3.addEventListener("click", cherry);
q2a4.addEventListener("click", watermelon);

// event listeners for answers of question 3
q3a1.addEventListener("click", lemon);
q3a2.addEventListener("click", cherry);
q3a3.addEventListener("click", pineapple);
q3a4.addEventListener("click", watermelon);

// event listeners for answers of question 4
q4a1.addEventListener("click", lemon);
q4a2.addEventListener("click", pineapple);
q4a3.addEventListener("click", cherry);
q4a4.addEventListener("click", watermelon);


// functions for each fruit
function lemon(){
  lemonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 4){
  updateResult()
   }
}

function watermelon(){
  watermelonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 4){
    updateResult()
  }
}

function cherry(){
  cherryScore += 1;
  questionCount += 1;
  
  if (questionCount >= 4){
    updateResult()
  }
}

function pineapple(){
  pineappleScore += 1;
  questionCount += 1;
  
  if (questionCount >= 4){
    updateResult()
  }
}


// functions for scoring system and outputs
function updateResult() {
 
  if (lemonScore == watermelonScore && lemonwatermelon > pineapplecherry){
    result.innerHTML = "You are a... mix of LEMON and WATERMELON!   You can be sweet or sour, depending on who you are around. When people first meet you, it takes time for you to start being yourself around them. But once people get to know you, you become their favorite person! A refreshing addition to people's lives. But at other times, you are calm and just going with the flow of things. You don't really mind when someone else takes control or when making friends. You will fit in and go well together with anyone!";
  }
  else if (lemonScore == cherryScore && lemoncherry > pineapplewatermelon){
        result.innerHTML = "You are a... mix of LEMON and CHERRY!   You can be sweet or sour, depending on who you are around. When people first meet you, it takes time for you to start being yourself around them. But once people get to know you, you become their favorite person! A refreshing addition to people's lives. But at other times, you are the cherry on top~ You are an extrovert always expressing yourself and not being afraid to! People find you sweet and have an unavoidable attraction to you.";
  }
  else if (lemonScore == pineappleScore && lemonpineapple > watermeloncherry){
        result.innerHTML = "You are a... mix of LEMON and PINEAPPLE!   You can be sweet or sour, depending on who you are around. When people first meet you, it takes time for you to start being yourself around them. But once people get to know you, you become their favorite person! A refreshing addition to people's lives. But at other times, you are often known as the wild one of the group. You are up for adventures and can be spontaneous. Basically, people think of you as a fun person! People always want to take you on trips because you will definitely spice things up.";
  }
  else if (watermelonScore == cherryScore && watermeloncherry > lemonpineapple){
        result.innerHTML = "You are a... mix of WATERMELON and CHERRY!   You are calm and just going with the flow of things. You don't really mind when someone else takes control or when making friends. You will fit in and go well together with anyone! But at other times, you are an extrovert always expressing yourself and not being afraid to! People find you sweet and have an unavoidable attraction to you.";

  }
  else if (watermelonScore == pineappleScore && pineapplewatermelon > lemoncherry){
        result.innerHTML = "You are a... mix of WATERMELON and PINEAPPLE!   You are calm and just going with the flow of things. You don't really mind when someone else takes control or when making friends. You will fit in and go well together with anyone! But at other times, you are known as the wild one of the group. You are up for adventures and can be spontaneous. Basically, people think of you as a fun person! People always want to take you on trips because you will definitely spice things up.";

  }
  else if (cherryScore == pineappleScore && pineapplecherry > lemonwatermelon){
        result.innerHTML = "You are a... mix of CHERRY and PINEAPPLE!   The cherry on top~ You are an extrovert always expressing yourself and not being afraid to! People find you sweet and have an unavoidable attraction to you. But also! you are known as the wild one of the group. You are up for adventures and can be spontaneous. Basically, people think of you as a fun person! People always want to take you on trips because you will definitely spice things up.";
  }
  else if (lemonScore >= 3){
    result.innerHTML = "You are a... LEMON!   You can be sweet or sour, depending on who you are around. When people first meet you, it takes time for you to start being yourself around them. But once people get to know you, you become their favorite person! A refreshing addition to people's lives."; 
  }
  else if (watermelonScore >= 3){
    result.innerHTML = "You are a... WATERMELON!   Most of the time, you are calm and just going with the flow of things. You don't really mind when someone else takes control or when making friends. You will fit in and go well together with anyone!";
  }
  else if (cherryScore >= 3){
    result.innerHTML = "You are a... CHERRY!   The cherry on top~ You are an extrovert always expressing yourself and not being afraid to! People find you sweet and have an unavoidable attraction to you.";
  }
  else if (pineappleScore >= 3){
    result.innerHTML = "You are a... PINEAPPLE!   Often known as the wild one of the group. You are up for adventures and can be spontaneous. Basically, people think of you as a fun person! People always want to take you on trips because you will definitely spice things up.";
  }
  else if (lemonScore == 2){
        result.innerHTML = "You are a... LEMON!   You can be sweet or sour, depending on who you are around. When people first meet you, it takes time for you to start being yourself around them. But once people get to know you, you become their favorite person! A refreshing addition to people's lives."; 

  }
  else if (watermelonScore == 2){
        result.innerHTML = "You are a... WATERMELON!   Most of the time, you are calm and just going with the flow of things. You don't really mind when someone else takes control or when making friends. You will fit in and go well together with anyone!";

  }
  else if (cherryScore == 2){
        result.innerHTML = "You are a... CHERRY!   The cherry on top~ You are an extrovert always expressing yourself and not being afraid to! People find you sweet and have an unavoidable attraction to you.";

  }
  else if (pineappleScore == 2){
        result.innerHTML = "You are a... PINEAPPLE!   Often known as the wild one of the group. You are up for adventures and can be spontaneous. Basically, people think of you as a fun person! People always want to take you on trips because you will definitely spice things up.";

  }
  else{
    result.innerHTML = "Didn't quit get that, please retake the quiz.";
  }
}

// restart button
var retake = document.getElementById("restartbtn");
retake.addEventListener("click", restart);

// resetting variables after restart button
function restart() {
  result.innerHTML = "Your personality represents the fruit... ";
  lemonScore = 0;
  watermelonScore = 0;
  cherryScore = 0;
  pineappleScore = 0;
  questionCount = 0;
}