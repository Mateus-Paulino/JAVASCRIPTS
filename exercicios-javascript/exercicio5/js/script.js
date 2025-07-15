const marks = [90, 95, 90];

//   media
//  0 -  59 : E
// 60 -  69 : D
// 70 -  79 : C
// 80 -  89 : B
// 90 - 100 : A

// usarei o loop for of porque é o melhor loop para arrays
// atribui e adiciona +=
function calculateGrade(array) {
    const average = calculateAverage(array);

    if (average < 60) return "E";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A CONGRATULATIONS!" 
}
function calculateAverage(array) {
    let sum = 0;
    for (let mark of array)
        sum += mark;
    return average = sum / array.length;
}

console.log(calculateGrade(marks));