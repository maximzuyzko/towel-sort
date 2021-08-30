
module.exports = function towelSort (matrix) {
    let newArr = [];
    if (matrix === [] || matrix === undefined) return newArr;
    for (let i = 0; i < matrix.length; i++) {
        if (i === 1 && i !== 0 || i % 2 !== 0) {
            newArr = newArr.concat(matrix[i].reverse());
        } else {
            newArr = newArr.concat(matrix[i]);
        }
    }
    return newArr;
}
