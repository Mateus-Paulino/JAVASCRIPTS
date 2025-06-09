// Isso é um comentário de linha
let nome = 'Mattew'; // Isso é uma variável que recebe o valor Mattew

/*
    Este é um comentário  
    que ocupa várias linhas.
    Pode ser usado para documentação.
*/

let idade = 25;
let ligado = true;

console.log(nome);
console.log(idade);
console.log(ligado);

// Usando var (Antigo Evite!)
var nome2 = "Maiara";
nome2 = "Patrick";
console.log(nome2);
nome2 = "Jhonatas";
console.log(nome2);

let idade2 = 18;
idade2 = 21;
console.log(idade2);

const PI = 3.14;
console.log(PI);

const pessoa = {nome: "Maria"};
pessoa.nome = "Lucas";
console.log(pessoa);

/*
let mensagem = "Olá"; 
let Mensagem = "Outra";
let MENSAGEM = "Outra de outra";

console.log(mensagem);
console.log(Mensagem);
console.log(MENSAGEM);
*/

// letra _ ou $

// Exemplos válidos
let nomeUsuario;
let _idade;
let $valorTotal;

// Exemplos Inválidos
// let 1nome;
// let nome-usuario;
// let let;

// Declaração de Variáveis
const mensagem = "Olá, Mundo!"
let contador = 0;

// Função que usa variáveis
function mostrarMensagem() {
    contador ++; //incrementa o contador;
    console.log(mensagem + " Clique: " + contador);
    alert(mensagem);
}