document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here! 
var board = {cells:[]} 


// Global variable
var size = 3;

//board
function createBoard()  {
  board = {cells: []}

  for (var r = 0; r < size; r++)  {
    for (var c = 0; c < size; c++)  {
      board.cells.push  ({
        row: r,
        col: c,
        hidden: true,
        isMine: Math.floor(Math.random()*2),
        isMarked: false 
      })
    }
  }
}  

function startGame () {
  // Don't remove this function call: it makes the game work!
  createBoard()
  for (var i = 0; i < board.cells.length; i++)  {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
  }

  lib.initBoard()

  for (let i = 0; i < board.cells.length; i++){
    document.addEventListener("click", checkForWin)
    document.addEventListener("contextmenu", checkForWin)
    document.getElementById("reset").addEventListener("click", reset)
    document.getElementById("beginner").addEventListener("click", beginner)
    document.getElementById("intermediate").addEventListener("click", intermediate)
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  for (var i =0; i < board.cells.length; i++) {
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false) {
      return;
    } 
    else if (board.cells[i].hidden == true && board.cells[i].isMine == false) {
      return;
    } 
  }


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  
  var mineCount = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      mineCount ++;    
    } else  {
    return mineCount;
    }
  }
}



function reset() {
  board = {cells: []}
  document.getElementsByClassName('board')[0].innerHTML = '';
  startGame();
}


function beginner() {
  size = 3;
  board = {cells: []}
  document.getElementsByClassName('board')[0].innerHTML = '';
  startGame();
}


function intermediate() {
  size = 6;
  board = {cells: []}
  document.getElementsByClassName('board')[0].innerHTML = '';
  startGame();
}