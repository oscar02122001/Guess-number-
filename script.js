'use strict';
const secretNum = document.querySelector('.number')
const checkNum = document.querySelector('.check')
const guessNum = document.querySelector('.guess')
const checkResult = document.querySelector('.message')
const limitNum = document.querySelector('.between')
const labelScore = document.querySelector('.score')
const labelHighScore = document.querySelector('.highscore')
const body = document.querySelector('body')
const nth = document.querySelector('.nothing')

let allHighScore = []
let highscore = 0

function displayMessage(message) {
    checkResult.textContent = message
}

function randomNum() {
    let getRandom = Math.floor(Math.random() * 20) + 1;
    nth.textContent = getRandom
}
randomNum()
checkNum.addEventListener("click", function () {
    let secretRandom = Number(nth.textContent)

    if (guessNum.value > 20) {
        limitNum.style.color = 'red'
    } else {
        limitNum.style.color = 'white'
    }


    if (!guessNum.value) {
        // checkResult.textContent = '🙄 NO NUMBER'
        displayMessage('🙄 NO NUMBER') // use function 
    } else if (guessNum.value == secretRandom) {
        // checkResult.textContent = ' 🎉 Correct number !'             // use function 
        displayMessage('🎉Correct number!')
        body.style.backgroundColor = "#60b347"
        allHighScore.push(labelScore.textContent)
        secretNum.textContent = secretRandom
        secretNum.style.width = '30rem'


        // second way
        // if (labelScore.textContent > highscore) {
        //     highscore = labelScore.textContent
        //     labelHighScore.textContent = highscore
        // }

        let max = allHighScore[0]
        for (let i = 0; i < allHighScore.length; i++) {
            const curScore = allHighScore[i]

            if (curScore > max) max = curScore
            labelHighScore.textContent = max
            console.log(allHighScore);
        }

    } else if (guessNum.value !== secretRandom) {
        if (labelScore.textContent > 1) {
            // checkResult.textContent = guessNum.value > secretNum ? "✈ Too hight !" : "🚇 Too low !";             // use function 
            displayMessage(guessNum.value > secretRandom ? '✈ Too hight !' : '🚇 Too low !');
            labelScore.textContent = Number(labelScore.textContent) - 1
        } else {
            // checkResult.textContent = "😥 GAME OVER"      
            displayMessage("😥 GAME OVER") // use function 
            labelScore.textContent = 0
        }

    }

    // old varsion
    // else if (guessNum.value > secretRandom) {

    //     if (labelScore.textContent > 1) {
    //         checkResult.textContent = "✈ Too hight !"
    //         labelScore.textContent = Number(labelScore.textContent) - 1
    //     } else {
    //         checkResult.textContent = "😥 GAME OVER"
    //         labelScore.textContent = 0
    //     }

    // } else if (guessNum.value < secretRandom) {
    //     if (labelScore.textContent > 1) {
    //         checkResult.textContent = "🚇 Too low !"
    //         labelScore.textContent = Number(labelScore.textContent) - 1
    //     } else {
    //         checkResult.textContent = "😥 GAME OVER !"
    //         labelScore.textContent = 0

    //     }
    // }
})

const againBtn = document.querySelector('.again')

againBtn.addEventListener('click', function () {
    function restore() {
        randomNum()
        guessNum.value = ''
        body.style.backgroundColor = "#222"
        // checkResult.textContent = 'Start guessing...'                   // use function
        displayMessage('Start guessing...')
        labelScore.textContent = 20
        secretNum.style.width = '15rem'
        limitNum.style.color = 'white'
        secretNum.textContent = '?'
    }
    restore()

})