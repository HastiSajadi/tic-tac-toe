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
        createCell.addEventListener('click' , addGo());
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
    
}