const hint = document.getElementById("hint");
const noOfGuessesRef = document.getElementById("no-of-guesses");
const guessedNumRef = document.getElementById("guessed-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const gameInput = document.getElementById("guess");

let answer, noOfGuesses, guessedNumsArr;

const play = () => {
    const userGuess = GuessImput.value;
    if (userGuess < 1 || userGuess > 100 || isNaN (userGuess)) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    guessedNumsArr.push(userGuess);
    noOfGuesses += 1;
    if (userGuess != answer) {
        if (userGuess < answer) {
            hint.innerHTML = "Too low. Try again!";
        } else {
            hint.innerHTML = "Too high. Try again";
        }
        noOfGuesses.innerHTML = `<span>No. of Guesses: </span> ${noOfGuesses}`;
        guessedNumRef.innerHTML = `<span>Guessed Numbers are: </span>${guessedNumsArr.join(",")}`;

        hint.classList.remove("error");
        setTimeout(() => {
            hint.classList.add("error");
        }, 10);
    } else {
        hint.innerHTML = `Congratulation!<br>The number was<span>${answer}</span>.<br>You guessed the number in<span>${noOfGuesses}</span>Tries.`;
    hint.classList.add("sucess"); 
    game.style.display = "none";
    restartButton.style.display = "block";
}
};

const init = () => {
    console.log("Game Started");
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    noOfGuesses = 0;
    guessedNumsArr = [];
    noOfGuessesRef.innerHTML = "No. of Guesses: 0";
    guessedNumRef.innerHTML = "Guessed Numbers are: None";
    guessInput.value = "";
    hint.classList.remove("success", "error");
};

guessInput.addEventListener("keydown", (event) => {
    if(event.keycode === 13){
        event.preventDefault();
        play();
    }
});

restartButton.addEventListener("click", () => {
    game.style.display = "grid";
    restartButton.style.display = "None";
    hint.innerHTML = "";
    hint.classList.remove("success");
    innerWidth();
})
checkButton.addEventListener("click", play);
window.addEventListener("load", init);

    

