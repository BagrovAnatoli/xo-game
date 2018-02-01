function getWinner() {
    var cellsD = document.querySelectorAll('.cell');
    var cells = [[], [], []];
    var i;
    var full = 0;
    for (i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var el = cellsD[i * 3 + j];
            if (el.classList.contains('x')) {
                cells[i][j] = 'x';
                full++;
            }
            if (el.classList.contains('o')) {
                cells[i][j] = 'o';
                full++;
            }

        }
    }

    if (
        ((cells[0][0] === cells[1][1]) && (cells[1][1] === cells[2][2])) ||
        ((cells[2][0] === cells[1][1]) && (cells[1][1] === cells[0][2]))
    ) {
        return cells[1][1];
    }

    for (i = 0 ; i < 3; i++) {
        if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i]) && cells[0][i] !== undefined) {
            return cells[0][i];
        }
        if ((cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2]) && cells[i][0] !== undefined) {
            return cells[i][0];
        }
    }
    if (full === 9){
        return 'no';
    }
    return undefined;
}