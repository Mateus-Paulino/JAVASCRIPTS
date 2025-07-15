const arr = [[1, 4], [6, 7], [3, 4]];
console.log(arr);
function multipleAll(arr) {
    let result = 1;

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result *= arr[i][j]
        }
    }
    return result;
}

console.log(multipleAll(arr));