let randomNumber = parseInt(Math.random() * 100 +1)

const submit = document.querySelector(`#subt`)
const userInput = document.querySelector(`#guessField`)
const gussSlot = document.querySelector(`.guesses`)
const remaing = document.querySelector(`.lastResult`)
const low = document.querySelector(`.lowOrHi`)
const starover = document.querySelector(`.resultParas`)

const p = document.createElement(`p`)

let periviousGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener(`click`, (event)=>{
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

let validateGuess = (guess)=>{
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    }else if(guess < 1){
        alert(`Please enter a number more then 1`)
    }else if(guess > 100){
        alert(`Please enter a number less then 100`)
    }else{
        periviousGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Rendom number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

let checkGuess = (guess)=>{
    if(guess === randomNumber){
        displayMessage(`You guessed it right Number`)
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`)
    }
}

let displayGuess = (guess)=>{
    userInput.value = ''
    gussSlot.innerHTML += `${guess}, `
    numGuess++;
    remaing.innerHTML = `${10 - numGuess}`
}

let displayMessage = (message)=>{
    low.innerHTML = `<h2>${message}</h2>`
}

let endGame = ()=>{
    userInput.value = ''
    userInput.setAttribute(`disabled`, ``)
    p.classList.add(`button`)
    p.innerHTML = `<h2 id = 'newGame'> Start New Game</h2>`
    starover.appendChild(p)
    playGame = false
    newGame()
}

let newGame = ()=>{
 const newGameButton = document.querySelector(`#newGame`)
 newGameButton.addEventListener(`click`,()=>{
    randomNumber = parseInt(Math.random() * 100 +1)
    periviousGuess = [];
    numGuess = 1;
    gussSlot.innerHTML = '';
    remaing.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute(`disabled`);
    starover.removeChild(p);
    playGame = true
 })
}