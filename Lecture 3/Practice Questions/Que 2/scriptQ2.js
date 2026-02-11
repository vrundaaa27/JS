let gameNum = 8;

let userNum = prompt("Guess the number between 1 to 10");
while( userNum != gameNum){
    userNum = prompt("Guess the number between 1 to 10" + "\n" + "You entered the wrong number, try again!");
}
console.log("Congratulations! That was a correct guess.");