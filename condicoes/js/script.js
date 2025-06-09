// if (se)

let idade = 18;

/*
if (idade >= 18) {
    console.log("Você é maior de idade!");
}
*/

// else (senão)
if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você ainda não é maior de idade!");
}

// else if (senão se)

let nota = 10;

if (nota >= 9) {
    console.log("Excelente!"); 
} else if (nota >= 7) {
    console.log("Bom!");
} else if (nota >= 5) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!");
}

// ==     Igual (valor)
// ===    Igual (valor e tipo)
console.log(5 === 5);

// !=     Diferente (valor)     
// !==    Diferente (valor)
console.log(5 !== '5');

// >      Maior que
console.log(2 > 5);     // false

// <      Menor que
console.log(10 < 5);   // false

// >=    Maior ou Igual
console.log(5 >= 5);  //  true

// <=   Menor ou Igual
console.log(10 <= 5); // false

// &&   E   (AND)
// ||   Ou  (OR)
// !    Não (NOT)

// O operador && (E AND) para que ele seja verdade ambos tem que ser verdadeiros.

/*
P && Q
V && V = V
F && V = F
F && F = F
*/

// O operador || (Ou OR) para que ele seja verdade basta que um seja verdadeiro.

/*
P || Q
V || V = V
F || V = V
F || F = F
*/

// O operador ! (Não NOT) O operador de negação ele nega o seu valor
// tornando true em false e o false em true

/*
!P
F = V
V = F
*/

let temIngresso = true;
let idade2 = 18;
// O operador && (E AND) para que ele seja verdade ambos tem que ser verdadeiros.
//       V      &&    F   = F
if (temIngresso && idade2 >= 18) {
    console.log("Entrada permitida no Show!");
//         V           &&     V = V
} else if (temIngresso && idade2 < 18) {
    console.log("Etrada permitida com Responsável!"); 
} else {
    console.log("Você não pode entrar!");
}

let temConvite = true;
let eVip = false;
// O operador || (Ou OR) para que ele seja verdade basta que um seja verdadeiro.
//   v           f      = v
if (temConvite || eVip) {
    console.log("Pode entrar!");
} else {
    console.log("Não pode entrar!"); 
}

// O operador ! (Não NOT) O operador de negação ele nega o seu valor
// tornando true em false e o false em true

let eBloqueado = false;
//  true
if (!eBloqueado) {
    console.log("Está bloquedo!");
} else {
    console.log("Não está bloqueado!");
}

let diaDaSemana = 'A';
let nomeDia;

switch(diaDaSemana) {
    case 'A':
        nomeDia = "Domingo";
        break;
    case 'B':
        nomeDia = "Segunda-feira";
        break;
    case 'C':
        nomeDia = "Terça-feira";
        break;
    case 'D':
        nomeDia = "Dia inválido";
        break;
}    

console.log(nomeDia);

let idade3 = 20;

let status = idade3 >= 18 ? "Adulto" : "Menor de idade";
console.log(status);

function verificarIdade() {
    const idade = document.getElementById("idadeInput");

    const idadeDigita = parseInt(idade.value.trim(), 10);

    if (isNaN(idadeDigita)) {
        alert("Por favor, digite um número válido...")
        return
    }

    idade.value = "";

    const resultado = document.getElementById("resultado");

    if (idadeDigita >= 65) {
        resultado.textContent = ("Idoso");
    } else if (idadeDigita >= 18) {
        resultado.textContent = ("Adulto");
    } else if (idadeDigita >= 12) {
        resultado.textContent = ("Adolescente");
    } else if (idadeDigita > 0) {
        resultado.textContent = ("Criança");
    } else {
        resultado.textContent = ("idade Inválida!")
    }
}


