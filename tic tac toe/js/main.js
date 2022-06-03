console.log('TIC TAC TOE')

/*
let count = 0
var count = 0
const count = 0
*/

const a1 = document.querySelector('#a1')
const b1 = document.querySelector('#b1')
const c1 = document.querySelector('#c1')
const a2 = document.querySelector('#a2')
const b2 = document.querySelector('#b2')
const c2 = document.querySelector('#c2')
const a3 = document.querySelector('#a3')
const b3 = document.querySelector('#b3')
const c3 = document.querySelector('#c3')

/*
a1.addEventListener('click', function () {
    console.log('click on A1')
})*/

let current_player = 0
let winner = false
const elements = ['X', 'O']

const validationLine = (el1, el2, el3) => {
    let valid = false

    if (el1.innerHTML == elements[current_player] && el2.innerHTML == elements[current_player] && el3.innerHTML == elements[current_player]) {
        valid = true
    }

    return valid
}

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        // console.log(e)
        if (!winner) {
            if (e.target.innerHTML == '') {
                // Put the element of the player in the cell
                e.target.innerHTML = elements[current_player]

                // Check if there is a winner or let the second player plays
                if (validationLine(a1, a2, a3) ) {
                    winner = true
                }

                // show the message if we have a winner
                if (winner) {
                    let msg = document.querySelector('#msg')
                    msg.innerHTML = 'The winner is Player ' + (current_player+1) + "<br /><a href=''>Rejouer</a>"
                    msg.style.display = "block"
                    let score = parseInt(document.querySelector('#player'+(current_player+1)+ " .score").innerHTML)
                    score++
                    document.querySelector('#player'+(current_player+1)+ " .score").innerHTML = score 
                }

                // Switch of players
                if (current_player == 0) {
                    current_player = 1
                } else {
                    current_player = 0
                }
            } else {
                // When there is a cliock on a cell already used
                alert('Someone already play here !')
            }
        }
    })
})