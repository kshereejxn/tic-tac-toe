let currentPlayer = 'X'; 
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

    if (currentPlayer =="X"){
        clickedCellElement.innerHTML = "X"
        playerXSelections.push(clickedCellElement.id)

        if (checkForWin(winningCombinations, playerXSelections) == true){
            alert("X's Have Won")
            console.log("X's Have Won")
        }
        currentPlayer = "O"
    }
    else{
        clickedCellElement.innerHTML = "O"
        playerOSelections.push(clickedCellElement.id)
        if (checkForWin(winningCombinations, playerOSelections) == true){
            alert("O's Have Won")
            console.log ("O's Have Won")
        }
        currentPlayer = "X"
    }
       
        console.log("You clicked on cell number: " + clickedCellElement.id)
    });
}
