const gameBoard = document.getElementById('gameboard');
const infoDisplay = document.getElementById('info');
infoDisplay.textContent="Circle goes first!";

let go = "circle";

let boardCell = [
    "", "", "",  "", "", "",  "", "", "", 
]


function createBoard(){
    boardCell.forEach((cell , index)=> {
        const createCell = document.createElement('div');
        createCell.classList.add('cell');
        createCell.id = index;
        createCell.addEventListener('click' , addGo);
        gameBoard.append(createCell);
    })
}
createBoard();

function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);

    if(go === "circle"){
        go = "cross"
    }else{
        go = "circle"
    }
    infoDisplay.textContent="It is now "+go+"'s turn";
    e.target.removeEventListener('click', addGo);
    checkScores();
}

function checkScores(){
    const allCells = document.querySelectorAll('.cell');
    const winningCombos=[
        [0,1,2], [3,4,5],[6,7,8],
        [0,3,6], [1,4,7],[2,5,8],
        [2,4,6],[0,4,8]
    ]
    winningCombos.forEach(array =>{
        const circleWins= array.every(cell =>
            allCells[cell].firstChild?.classList.contains('circle'))

        if (circleWins){
            infoDisplay.textContent = "Circle Wins!"
            allCells.forEach(cell => cell.removeEventListener('click' , addGo));
        }    
    })
    winningCombos.forEach(array =>{
        const crossWins= array.every(cell =>
            allCells[cell].firstChild?.classList.contains('cross'))

        if (crossWins){
            infoDisplay.textContent = "cross Wins!"
            allCells.forEach(cell => cell.removeEventListener('click' , addGo));
        }    
    })
}

function restartGame(){
   window.location.reload();
    
}