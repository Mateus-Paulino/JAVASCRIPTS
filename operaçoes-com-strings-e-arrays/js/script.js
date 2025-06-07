let frase = "Olá Mundo! JavaScript é maravilhoso";
console.log(frase);


let palavras = frase.split(" ");
console.log(palavras);
//["Olá", "mundo!",  "JavaScript", "é", "maravilhoso"]


let data = "07-06-2025"
let partesData = data.split("-");
console.log(partesData);
//["06", "07", "2025"]

let array = ["JavaScript", "é", "incrível"];
let frases = array.join(" ")
console.log(frases);
// "JacaScript é incrível"

let nome = "Jesus";
console.log(nome.toUpperCase());
// "JESUS"
let names = "Mateus";
console.log(names.toLowerCase());
// "Mateus"

let texto = "Aprendendo JavaScript Hoje";
console.log(texto.includes("JavaScript"));
// true
console.log(texto.includes("Phyton"));
// false


//OPERAÇÕES COM ARRAYS
let numeros = [1, 2, 3, 4];
let dobrados = numeros.map((num) => num * 10);
console.log(dobrados);
// [20, 40, 60, 80] map()


let produtos = ["Espelho", "Pente", "celular"];
let listaHTML = produtos.map((produto) => `<li>${produto}</li>`).join("");
console.log(listaHTML);

function mostrarLista() {
    let produtos = ["Espelho", "Pente", "celular"];

    let listaHTML = produtos.map((produto) => `<li>${produto}</li>`).join("");
    console.log(listaHTML);
    document.getElementById("lista").innerHTML = listaHTML;
}

let idade = [18, 12, 44, 17, 30, 25];
let maiores = idade.filter((idade) => idade >= 18);
console.log(maiores);

let palavrascomA = ["abacaxi", "amor", "asteriscos", "alabama", "alô"];
let longas = palavrascomA.filter((palavra) => palavra.length > 7);
console.log(longas);

let numeros2 = [1, 2, 3, 4];
let soma = numeros2.reduce((total , num) => total + num, 0);
console.log(soma);

let notas = [7, 8, 6, 9];
let media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
console.log(media);

let usuarios = [
    {id: 1, nome: "Alerquina"}, //indice 0
    {id: 2, nome: "Coringa"},   //indice 1
    {id: 3, nome: "Batman"},   // indice 2
];

let usuario = usuarios.find((u) => u.id === 2);
console.log(usuario);

let indice = usuarios.findIndex((u) => u.nome === "Coringa");
console.log(indice);