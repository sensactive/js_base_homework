"use strict";

const letters = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];
const figuresBlack = [0, '', '', '', '', '', '', '', '', 0];
const figuresWhite = [0, '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', 0];

/**
 * Рисует шахматную доску в браузере
 */
function initChessBoard() {
    const containerElement = document.getElementById('chess');
    //По строкам.
    for (let row = 0; row < 10; row++) {
        //Создаем новую строку.
        const trElem = document.createElement('tr');
        //Добавляем строку в контейнер с игрой.
        containerElement.appendChild(trElem);
        //По колонкам.
        for (let col = 0; col < 10; col++) {
            //Создаём ячейку.
            const cell = document.createElement('td');
            if (row !== 0 && row % 10 !== 9 && col % 10 !== 9 && col !== 0) {
                    //Закрашиваем в четной строке нечетные ячейки черным, а чётные - серым.
                if (row % 2 === 0){
                    if (col % 2 === 1 ) {
                        cell.className = 'black';
                    } else {
                        cell.className = 'gray';
                    }
                    // Закрашиваем в нечетной строке четные ячейки черным, а нечетные - серым.
                } else {
                    if (col % 2 === 0) {
                        cell.className = 'black';
                    } else {
                        cell.className = 'gray';
                    }
                }
                //Заполняем буквами первую и последнюю строки.
            } else if ((row === 0 || row === 9) && col !== 0 && col !== 9) {
                cell.innerHTML = letters[col];
                //Заполняем цифрами первую и последнюю ячейку.
            } else if (row !== 0 && row !== 9) {
                cell.innerHTML = 9 - row;
            }
            //Добавляем ячейку в строку
            trElem.appendChild(cell);
        }
    }
}

function arrangeFigures() {
    const cells = document.getElementsByTagName('td');

}
initChessBoard();
arrangeFigures();


