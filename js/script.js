'use strict'

const ticTacToe = {
    iterator: 0,
    gameCell: document.querySelectorAll('.tic-tac-toe-item'),

    startGame() {
        document.querySelector('.tic-tac-toe-container').addEventListener('mouseup', this.inputSymbol.bind(this));
        document.querySelector('#ticTacToeStartBtn').addEventListener('mouseup', this.startNewGame.bind(this));
    },

    inputSymbol({target}) {
        if (target.className === 'tic-tac-toe-item' && !target.innerHTML) {
            if (this.iterator % 2 === 0) target.innerHTML = 'x';
            if (this.iterator % 2 !== 0) target.innerHTML = 'o';
            this.iterator++;
        }

        if (this.winningCombination()) {
            document.querySelector('.tic-tac-toe-win').style.display = 'block'

            for (let item of this.gameCell) {
                item.style['pointer-events'] = 'none'
            }
        }
    },
    winningCombination() {
        if (document.querySelector('#ticTacToeItem1').innerHTML 
            && document.querySelector('#ticTacToeItem1').innerHTML === document.querySelector('#ticTacToeItem2').innerHTML 
            && document.querySelector('#ticTacToeItem1').innerHTML === document.querySelector('#ticTacToeItem3').innerHTML
            ||
            document.querySelector('#ticTacToeItem1').innerHTML 
            && document.querySelector('#ticTacToeItem1').innerHTML === document.querySelector('#ticTacToeItem4').innerHTML 
            && document.querySelector('#ticTacToeItem1').innerHTML === document.querySelector('#ticTacToeItem7').innerHTML
            ||
            document.querySelector('#ticTacToeItem4').innerHTML 
            && document.querySelector('#ticTacToeItem4').innerHTML === document.querySelector('#ticTacToeItem5').innerHTML 
            && document.querySelector('#ticTacToeItem4').innerHTML === document.querySelector('#ticTacToeItem6').innerHTML
            ||
            document.querySelector('#ticTacToeItem2').innerHTML 
            && document.querySelector('#ticTacToeItem2').innerHTML === document.querySelector('#ticTacToeItem5').innerHTML 
            && document.querySelector('#ticTacToeItem2').innerHTML === document.querySelector('#ticTacToeItem8').innerHTML
            ||
            document.querySelector('#ticTacToeItem3').innerHTML 
            && document.querySelector('#ticTacToeItem3').innerHTML === document.querySelector('#ticTacToeItem6').innerHTML 
            && document.querySelector('#ticTacToeItem3').innerHTML === document.querySelector('#ticTacToeItem9').innerHTML
            ||
            document.querySelector('#ticTacToeItem7').innerHTML 
            && document.querySelector('#ticTacToeItem7').innerHTML === document.querySelector('#ticTacToeItem8').innerHTML 
            && document.querySelector('#ticTacToeItem7').innerHTML === document.querySelector('#ticTacToeItem9').innerHTML
            ||
            document.querySelector('#ticTacToeItem1').innerHTML 
            && document.querySelector('#ticTacToeItem1').innerHTML === document.querySelector('#ticTacToeItem5').innerHTML 
            && document.querySelector('#ticTacToeItem1').innerHTML === document.querySelector('#ticTacToeItem9').innerHTML
            ||
            document.querySelector('#ticTacToeItem3').innerHTML 
            && document.querySelector('#ticTacToeItem3').innerHTML === document.querySelector('#ticTacToeItem5').innerHTML 
            && document.querySelector('#ticTacToeItem3').innerHTML === document.querySelector('#ticTacToeItem7').innerHTML) return true
    },
    startNewGame() {
        document.querySelector('#ticTacToeItem1').innerHTML = '';
        document.querySelector('#ticTacToeItem2').innerHTML = '';
        document.querySelector('#ticTacToeItem3').innerHTML = '';
        document.querySelector('#ticTacToeItem4').innerHTML = '';
        document.querySelector('#ticTacToeItem5').innerHTML = '';
        document.querySelector('#ticTacToeItem6').innerHTML = '';
        document.querySelector('#ticTacToeItem7').innerHTML = '';
        document.querySelector('#ticTacToeItem8').innerHTML = '';
        document.querySelector('#ticTacToeItem9').innerHTML = '';
        document.querySelector('.tic-tac-toe-win').style.display = 'none';

        for (let item of this.gameCell) {
            item.style['pointer-events'] = 'auto'
        }
    }
}

ticTacToe.startGame()