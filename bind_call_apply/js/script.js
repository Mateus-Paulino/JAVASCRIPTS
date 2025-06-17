/* call() - Call and Execute Function Immediately
// call() - Chama e executa a função imediatamente */

/* Calls a function immediately with a specified context
and arguments passed one by one
Chama uma função imediatamente com um contexto especificado
e argumentos passados ​​um por um */

// FunctionName.call(this.Arg, arg1, arg2,...) 
/*
const person = {
    name: "Paul"
}

function greet(age,city) {
    console.log(`Hi, my name is ${this.name}, ${age} years old, and i living in ${city}`);
}

greet.call(person, 45, "Mumbai");
*/

/* apply() - Like call() But with Array 
apply() - Como call() mas com Array
Calls a function immediately, like call(), but arguments are passed as an array.
Chama uma função imediatamente, como call(), mas os argumentos são passados ​​como um array. */

// functionName.apply(this.Arg, [arg1, arg2, ...]) 

const person = {
    name: "Paul"
}

function greet(age,city) {
    console.log(`Hi, my name is ${this.name}, ${age} years old, and i living in ${city}`);
}

//greet.apply(person, [45, "Mumbai"]);

// bind() - Bind Context But Don´t Call 
// bind() - Vincula contexto, mas não chama
// Returns a new function with the specific this context.
// Retorna uma nova função com o contexto this específico.
// Does nor call the function immediately - you can call later.
// Não chama a função imediatamente - você pode chamá-la mais tarde.

// cont newFunc = functionName.bind(thisArg, arg1, arg2, ..

const greetLater = greet.bind(person, 12, "Miami");

greetLater();