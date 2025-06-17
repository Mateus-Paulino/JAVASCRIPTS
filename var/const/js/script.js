const PI = 3.14;
console.log(PI);
/*CONST NÃO PODE SER REDECLARADA É PARA ALGO
QUE NÃO SE DEVE MUDAR, PoRÉM EM CONSTANT DE
OBJETOS{} E ARRAYS[] ABRE EXCESSÃO PODE SER MUDADAS O VALOR INTERNO*/
const nome = 'Jessica';

const pessoa = { nome: 'João'};
console.log(pessoa.nome);
pessoa.nome = 'José';
console.log(pessoa.nome);

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
numeros.push(6);
console.log(numeros);


// O LET PODE REDECLARAR 
let nomes = 'juliana';
nomes = 'Ronan'
console.log(nomes);

let contador = 0;

for (let i = 0; i < 5; i++) {
    contador += 1;
    console.log(contador);
}




