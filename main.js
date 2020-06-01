let currentPlayer = 'X'; 
// X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function checkForWin(winningCombinations, playerSelections){}

const cellElementArray = document.querySelectorAll('.grid-cell');

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    
    const currentCellElement = cellElementArray[elementIndex]
  
    currentCellElement.addEventListener('click', function (event) {
       
        const clickedCellElement = event.target;
       
        console.log("You clicked on cell number: " + clickedCellElement.id)
    });
}

