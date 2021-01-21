// We are trying to rotate the elements of an array by a given integer, n

function rotation(array, n) {
    let newArray = [];
    let y = array ? array : 0
    for (var i = 0; i < y.length; i++) {
        var newData = (i + n) % y.length;
        newArray[i] = y[newData];
    }
    return newArray;
}
const rotate = [2, 3, 4, 5, 6]
console.log(rotation(rotate, 3));
