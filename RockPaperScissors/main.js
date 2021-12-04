const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(e => {
    const button = document.createElement('button')
    button.innerHTML = e
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' You WON!'
            break

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' You LOSE!'
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' It\'s a DRAW!'
            break
    }
}
