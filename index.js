function reset() {
    number = Math.floor(Math.random() * 21);
    attemps = 5;
    result.innerText = "";
    attemps.innerText = `Tentativas Restantes: ${attemps}`;
    document.getElementById('guessInput').value = ""
    result.style.color = "black"

}

let number = Math.floor(Math.random() * 21);
let result = document.getElementById('resultMessage');
const sendGuess = document.getElementById('submitGuess');
let attemps = 5;
let restartGame = document.getElementById('restartGame')

    sendGuess.addEventListener("click", () => {
        const guess = parseInt(document.getElementById('guessInput').value);
        let attemptsR = document.getElementById('attemptsRemaining');
        
        if (attemps > 0){
            if (guess === number) {
                result.innerText = "Parabéns. Você acertou!";
                result.style.color = "green"
            } else if (guess > number){
                result.innerText = "O Número Digitado é Maior. Tente um Número Menor!";      
            }
            else {
                result.innerText = "O Número Digitado é Menor. Tente um Número Maior!";
            }

        attemps--;
        attemptsR.innerText = attemps;

        if (attemps === 0 && guess != number) {
            result.innerText = `Você perdeu.O Número era ${number}!`
            result.style.color = "red"
        }
        }

        restartGame.addEventListener("click", () => {
            reset()
        });
    });

    

console.log(number);