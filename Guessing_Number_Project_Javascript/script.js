window.addEventListener("DOMContentLoaded", (event) => {

    let randomNumber = parseInt(Math.random() * 100 + 1);

    const submitButton = document.querySelector('#subt');
    const userInput = document.querySelector('#guessField');
    const userGuess = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const showLowOrHi = document.querySelector('.lowOrhi');
    const startOverDiv = document.querySelector('.resultParas');
    const p = document.createElement('p');

    let prevGuess = [];
    let numGuess = 1;

    let playGame = true;
    
    if (playGame)
    {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        })
    }

    function validateGuess(guess)
    {
        if (isNaN(guess)) {
            alert('please enter a valid number');
             userInput.value = '';
        } else if (guess < 1)
        {
            alert('please enter a greater then 1 numnber');
             userInput.value = '';
        } else if (guess > 100)
        {
            alert('please enter a number smaller then 100')
             userInput.value = '';
        }
        else {
            prevGuess.push(guess);
            if (numGuess == 11)
            {
                displayGuess(guess);
                displayMessage(`Gave Over.Random number was ${randomNumber}`);
                endGame();
            }
            else {
                displayGuess(guess);
                checkGuess(guess);
            }
        }
    }

    function checkGuess(guess) {
        if (guess == randomNumber) {
            displayMessage(`Yeah! You won the game`);
        } else if (guess > randomNumber) {
            displayMessage(`your numbe is too high`);
        } else if (guess < randomNumber)
        {
            displayMessage(`Your number is too low`);
            }

    }
    
    //cleaning method
    function displayGuess(guess)
    {
        userInput.value = '';
        userGuess.innerHTML += `${guess}, `;
        numGuess++;
        lastResult.innerHTML = `${11-numGuess+1}`
    }
    
    function displayMessage(message)
    {
        showLowOrHi.innerHTML = `<h2>${message}</h2>`
    }
    function endGame()
    {
        userInput.value = ''
        userInput.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = `<h2 id="newGame"> Start new game </h2>`;
        startOverDiv.appendChild(p);
        playGame = false;
        newGame();

    }
    function newGame()
    {
        const newGameButton = document.querySelector('#newGame');

        newGameButton.addEventListener('click', ()=>{
            randomNumber = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            numGuess = 1;
            userGuess.innerHTML = '';
            lastResult.innerHTML = `${10 - numGuess+1}`;
            userInput.removeAttribute('disabled')
            startOverDiv.removeChild('p');
            playGame = true;
        })
    }

})