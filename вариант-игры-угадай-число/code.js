var inputUser = document.querySelector(".inputUser");
var submitUser = document.querySelector(".inputSubmit");
var numGuesses = 1;
var randomNumber = Math.floor(Math.random() * 100 + 1);
//  Math.floor(Math.random() * 100 + 1);
var guesses = document.querySelector(".guesses");
var resultGame = document.querySelector(".resultGame");
var resetButton;
var help = document.querySelector(".help");
var wrong = document.querySelector('.wrong');

// функция добавления надписи о пападании или промахе
function addWrong() {
    wrong.textContent = "Вы промахнулись";
    wrong.style.backgroundColor = "red";
}
//функция для записи введенногочисла в попытки
submitUser.addEventListener("click", startGame);

function startGame() {
    var userGuess = Number(inputUser.value);
    numGuesses++;
    guesses.textContent += " " + userGuess;
    if (userGuess > randomNumber & numGuesses != 10) {
        help.textContent = "Ваше число слишком большое;";
        addWrong();


    } else if (userGuess < randomNumber & numGuesses != 10) {
        help.textContent = "Ваше число слишком маленькое";
        addWrong();
    }

    if (userGuess == randomNumber) {
        resultGame.textContent = "Вы победили!!!";
        inputUser.disabled = true;
        submitUser.disabled = true;
        resultGame.style.backgroundColor = "green";
        wrong.textContent = "";
        addButton();

    }
    if (numGuesses == 10) {
        resultGame.textContent = "Вы проиграли колличество попыток исчерпано!!!";
        inputUser.disabled = true;
        submitUser.disabled = true;
        resultGame.style.backgroundColor = "red";

        addButton();
    }
    inputUser.value = "";
    inputUser.focus();
    // добавляет кнопку сброса при нажатии которой игра запустится снова функция сброса resetGame()
    function addButton() {
        resetButton = document.createElement('button');
        resetButton.textContent = "Играть заново";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame);
    }

    function resetGame() {
        inputUser.disabled = false;
        submitUser.disabled = false;
        resultGame.textContent = "";
        help.textContent = "";
        numGuesses = 1;
        var resetParam = document.querySelectorAll(".result p");
        for (var i = 0; i < resetParam.length; i++) {
            resetParam[i].textContent = "";
        }
        guesses.textContent = "Введенные попытки угадать число:";
        resetButton.parentNode.removeChild(resetButton);
    }
}