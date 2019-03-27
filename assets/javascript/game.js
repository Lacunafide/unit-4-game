$( document ).ready(function() {
    console.log( "ready!" );
});

var targetScore = 0;
var wins = 0;
var losses = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var totalScore = 0;
var newGame = false;


console.log("javascript is connected");
targetScore = Math.floor(Math.random() * 50) + 10;
crystal1 = Math.floor(Math.random() * 10 + 1);
crystal2 = Math.floor(Math.random() * 10 + 1);
crystal3 = Math.floor(Math.random() * 10 + 1);
crystal4 = Math.floor(Math.random() * 10 + 1);
document.getElementById("targetScore").innerHTML = "Target Score: " + targetScore;
console.log(targetScore);
console.log(crystal1);

$(".button").on("click", function() {
    if (totalScore == targetScore) {
    wins ++;
    newGame = true;
    targetScore = Math.floor(Math.random() * 50) + 10;
    crystal1 = Math.floor(Math.random() * 10 + 1);
    crystal2 = Math.floor(Math.random() * 10 + 1);
    crystal3 = Math.floor(Math.random() * 10 + 1);
    crystal4 = Math.floor(Math.random() * 10 + 1);
    document.getElementById("targetScore").innerHTML = "Target Score: " + targetScore;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    totalScore = 0;
    }
})

$(".button").on("click", function() {
    if (totalScore > targetScore) {
    targetScore = Math.floor(Math.random() * 50) + 10;
    crystal1 = Math.floor(Math.random() * 10 + 1);
    crystal2 = Math.floor(Math.random() * 10 + 1);
    crystal3 = Math.floor(Math.random() * 10 + 1);
    crystal4 = Math.floor(Math.random() * 10 + 1);
    document.getElementById("targetScore").innerHTML = "Target Score: " + targetScore;
    losses ++;
    totalScore = 0;
    newGame = true;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    }
})


$("#crystal1").on("click", function() {
    totalScore += crystal1;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;
})
$("#crystal2").on("click", function() {
    totalScore += crystal2;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;
})
$("#crystal3").on("click", function() {
    totalScore += crystal3;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;
})
$("#crystal4").on("click", function() {
    totalScore += crystal4;
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;
})

