const array = ["Oi", 2, true, 3, "js"];

function countString(array) {
    let count = 0;

    for (let element of array)
        if (typeof element === "string")
            count++;
    return count;
}

let result = countString(array);
console.log(result);