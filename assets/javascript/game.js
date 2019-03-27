var targetNumber = 0;
var wins = 0;
var losses = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var totalScore = 0;
var newGame = true;
console.log("javascript is connected");

// generates target number
if (newGame) {
    targetNumber = Math.floor(Math.random() * 50) + 10;
    totalScore = 0;
    crystal1 = Math.floor(Math.random() * 10 + 1);
    crystal2 = Math.floor(Math.random() * 10 + 1);
    crystal3 = Math.floor(Math.random() * 10 + 1);
    crystal4 = Math.floor(Math.random() * 10 + 1);
    newGame = false;
    console.log(targetNumber);
}

if (totalScore === targetScore) {
    wins ++;
    newGame = true;
}

if (totalScore > targetScore) {
    losses ++;
    newGame = true;
}

$("#crystal1").on("click", function() {
    totalScore + crystal1;
    console.log(totalScore);
})
$("#crystal2").on("click", function() {
    totalScore + crystal2;
})
$("#crystal3").on("click", function() {
    totalScore + crystal3;
})
$("#crystal4").on("click", function() {
    totalScore + crystal4;
})

document.getElementById("#wins").innerHTML = wins;
document.getElementById("#losses").innerHTML = losses;
document.getElementById("#targetScore").innerHTML = targetScore;
document.getElementById("#totalScore").innerHTML = totalScore;

