let currentText = 'X';
let end = false;
function cellClick(args) {
    if(end){
        return
    }
    const cell = args.target;
    var text = cell.innerText;
    if(text != EMPTY_CELL){
        return
    }
    cell.innerText = currentText;
    setStatus('Game in progress...');
    if(currentText == 'X'){
        currentText = 'O';
    }
    else{
        currentText = 'X';
    }
    if(checkWinner() != EMPTY_CELL){
        end = true;
        setStatus(checkWinner() + " wins!")
    }
    else if(!hasEmptyCell()){
        setStatus("It's a tie!");
    }
    
    //Check if active, if not, return
    
    //If active, check if current cell is empty, if not, return
    
    //if cell is empty, set the cell with current user's symbol

    //Check winner, if found, update status and return
    
    //If no winner, check if the game is over, if it's over, update status and return 
    
    //Set current user to next user
}

function resetGame() {
    setBoard(EMPTY_CELL);
    setStatus('Game in progress...');
    end = false;
     for (let i=0; i < 3; i++) {
         for (let j=0; j < 3; j++) {
             getCellElement(i,j).style.backgroundColor = 'white';
        }
    }
    
}

var howervar= document.getElementsByClassName("class-name");
if (howervar!= null) {
if (howervar[0] != null) {
howervar[0].style.backgroundColor = "#365890";
howervar[0].style.color = "#FFFFFF";
}
for (var i = 0; i < tbl.length; i++) { 
howervar[i].onmousemove = function () { this.style.backgroundColor = "#365890"; this.style.color = "#FFFFFF"; };
howervar[i].onmouseout = function () { this.style.backgroundColor = ""; this.style.color = ""; };
}
}