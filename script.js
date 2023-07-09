const gameBoard = document.getElementById('gameboard');
const infoDisplay = document.getElementById('info');

let boardCell = [
    "", "", "",  "", "", "",  "", "", "", 
]

boardCell.forEach((cell , index)=> {
    const createCell = document.createElement('div');
    createCell.classList.add('cell');
    createCell.id = index;
    gameBoard.append(createCell);
})