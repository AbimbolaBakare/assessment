//This function is going to take two arguments: states - the array of integers containing the current states of the cells. 
// and days - an integer representing the number of days.


function stateOfCell(cells, days) {
    for (let i = 1; i <= days; i++) {
        let newCell = [];
        // Iterate the last status of the cells
        cells.forEach((cellState, index) => {
            //If on the first cell, we give a value of 0, else we get the value of the previous cell
            let leftCell = (index == 0) ? 0 : cells[index - 1];
            //If on the last cell, we give a value of 0, else we get the value of the next cell
            let rightCell = (index == cells.length - 1) ? 0 : cells[index + 1];

            // Then we write a condition that stores the new value on the temporary array '(newCell)' if both neighbours are equal i.e either both 0 or both 1
            // we store a 1 (inactive), if both neighborns are different from each other, we store 1 (active)
            newCell[index] = (leftCell == rightCell) ? 0 : 1;
        });

        // We then store the new value on the cell array for the new day
        cells = newCell
    }
    return cells;
};

const data = [1, 1, 1, 0, 1, 1, 1, 1]
console.log(stateOfCell(data, 2))