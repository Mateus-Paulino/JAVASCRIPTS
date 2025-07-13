// Se input for divisivel por 3 = Fizz
// Se input for divisivel por 5 = Buzz
// Se input for divisivel por 3 e 5 = FizBuzz
// Se input nao dor divisivel por 3 e 5 = Input
// Se input nao dor numero = Not a number

function fizzBuzz(input) {
    if (typeof input !== "number") return "Not a number";
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
}

let result = fizzBuzz(15);
console.log(result);
