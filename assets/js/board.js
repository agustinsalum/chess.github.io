function drawBoard(size) {
    let board = "";
  
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            if ((x + y) % 2 == 0) {
                board += "⬜";
            } else {
                board += "⬛";
            }
        }
        board += "\n";
    }
    return board;
}

document.addEventListener("DOMContentLoaded", function() {
    const boardDiv = document.querySelector('.board');
    const size = 8; // size board
    
    const board = drawBoard(size);
    boardDiv.textContent = board;
});
