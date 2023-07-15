const EMPTY_CELL = '';

//
// Cell Manipulation
//
function getCellElement(row, col) {
    let id = 'cell_' + row + '_' + col;
    return document.getElementById(id)
}

function getCellValue(row, col) {
    let cell = getCellElement(row, col)
    return cell.innerText;
}


function getCellValueByCell(cell) {
    return cell.innerText;
}

function setCell(row, col, text) {
    let cell = getCellElement(row, col)
    cell.innerText = text;
}

function setCellByCell(cell, text) {
    cell.innerText = text;
}

//
// Setting the Status
//
function setStatus(text) {
    let statusButton = document.getElementById('status');
    statusButton.innerText = text;
}

// checkRows
//
// Checks for winner on each row.
// Returns: 'X' or 'O' or EMPTY_CELL if no row winners
//
function checkRows() {
    for (let i=0; i < 3; i++) {
        if (getCellValue(i,0) == getCellValue(i,1) &&
            getCellValue(i,1) == getCellValue(i,2) &&
            getCellValue(i,0) != EMPTY_CELL){
                let cells = [];
                cells[0]  =  getCellElement(i, 0);
                cells[1]  =  getCellElement(i, 1);
                cells[2]  =  getCellElement(i, 2);
                colorCellsBackground(cells, 'rgb(247, 253, 213)')
            return getCellValue(i,0);
        }
    }

    return EMPTY_CELL;
}

// checkColumns
//
// Checks for winner on each column
// Returns: 'X' or 'O' or EMPTY_CELL if no column winners
//

function checkColumns() {
    for (let j=0; j < 3; j++) {
        if (getCellValue(0,j) == getCellValue(1,j) &&
            getCellValue(1,j) == getCellValue(2,j) &&
            getCellValue(0,j) != EMPTY_CELL){
                let cells = [];
                cells[0]  =  getCellElement(0, j);
                cells[1]  =  getCellElement(1, j);
                cells[2]  =  getCellElement(2, j);
                colorCellsBackground(cells, 'rgb(247, 253, 213)')
                return getCellValue(0,j);
        }
    }

    return EMPTY_CELL;
}

// checkForwardDiagonal
//
// Checks for winner on forward diagonal / where 2,0 is first cell to check
// Returns: 'X' or 'O' or EMPTY_CELL if no forward diagonal winners
//
function checkForwardDiagonal() {
    if (getCellValue(0,2) == getCellValue(1,1) &&
        getCellValue(1,1) == getCellValue(2,0) &&
        getCellValue(0,2) != EMPTY_CELL){
            let diagCells = [];
            diagCells[0]  =  getCellElement(0, 2);
            diagCells[1]  =  getCellElement(1, 1);
            diagCells[2]  =  getCellElement(2, 0);
            colorCellsBackground(diagCells, 'rgb(247, 253, 213)');
            return getCellValue(0,2);
    }
    return EMPTY_CELL;
}

// checkBackwardDiagonal
//
// Checks for winner on forward diagonal \ where 0,0 is first cell to check
// Returns: 'X' or 'O' or EMPTY_CELL if no forward diagonal winners
//
function checkBackwardDiagonal() {
    if (getCellValue(0,0) == getCellValue(1,1) &&
        getCellValue(1,1) == getCellValue(2,2) &&
        getCellValue(0,0) != EMPTY_CELL){
            let diagCells = [];
            diagCells[0]  =  getCellElement(0, 0);
            diagCells[1]  =  getCellElement(1, 1);
            diagCells[2]  =  getCellElement(2, 2);
            colorCellsBackground(diagCells, 'rgb(247, 253, 213)');
            return getCellValue(0,0);
        }

    return EMPTY_CELL;
}

function checkWinner() {

    let r = checkRows();
    let c = checkColumns();
    let f = checkForwardDiagonal();
    let b = checkBackwardDiagonal();

    if (r != EMPTY_CELL)
        return r;

    if (c != EMPTY_CELL)
        return c;

    if (f != EMPTY_CELL)
        return f;

    if (b != EMPTY_CELL)
        return b;

    return EMPTY_CELL;
}


//
// Utility Functions
//
function setBoard(text) {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            setCell(i,j,text);
        }
    }

}

function dumpBoard() {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            console.log(getCellValue(i,j));
        }
        console.log("---");
    }

}

function hasEmptyCell(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(getCellValue(i, j) == EMPTY_CELL){
                return true;
            }
        }
    }
    return false;
}

function colorCellsBackground(cells, color){
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = color;
    }

}