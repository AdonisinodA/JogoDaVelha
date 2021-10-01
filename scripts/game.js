//iniciar variaveis

let board = ["","","","","","","","",""];

let playerTime = 0;
let symbols = ['O','X'];
var gameOver = false;
var winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// BUG NA PARTE DE VERIFICAÇÃO DA POSIÇÃO-----------------------------------------------

// alternar para cada jogador.
function handleMove(position) {
// verificar se o game acabou
    if (gameOver) {
        return;
    }


    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin();

        if (gameOver == false) {

            if (playerTime == 0) {
                playerTime = 1;

            } 
            else {
                playerTime = 0;
            }


        };

    };

    return gameOver;
}




function isWin() {


    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        // console.log(pos1);
        let pos2 = seq[1];
        // console.log(pos2);
        let pos3 = seq[2];
        // console.log(pos3);
        // console.log('--------------');

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {

            return gameOver = true;

        }


    };

    return gameOver = false;
}


