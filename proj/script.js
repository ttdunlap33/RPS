var options = ["R", "P", "S"];
var wins = 0;
var ties = 0;
var losses = 0;

var playGame = function () {
    var userChoice = window.prompt("Enter R, P, or S:");
    if (!userChoice) {
        return;
    }
    userChoice = userChoice.toUpperCase
 

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

window.alert("The computer chose " + computerChoice)

if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R")
){
    wins++;
    window.alert("You Win!");

}else {
    losses++;
    window.alert("You Lose!");
}
alert(`wins: ${wins}, losses: ${losses}, ties: ${ties}`)


}
playGame()