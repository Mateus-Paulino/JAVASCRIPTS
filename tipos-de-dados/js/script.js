// Number (Numeros)
let idade = 25;
console.log(`idade: ${idade}`);
let preco = 9.99;
console.log(`preco: ${preco}`);
let temperatura = -10;
console.log(`temperatura: ${temperatura}`);

let soma = 10 + 5;
console.log(`soma: ${soma}`);
let subtracao = 10 - 5;
console.log(`subtracao: ${subtracao}`);
let multiplicacao = 10 * 2;
console.log(`multiplicacao: ${multiplicacao}`);
let divisao = 25 / 5;
console.log(`divisao: ${divisao}`);

let resto = 10 % 3;
console.log(`resto: ${resto}`);

//     10 / 3
//     9    3
//     1   => esse é o resto

let resto2 = 10 % 2;
console.log(`resto2: ${resto2}`);

//     10 / 2
//     10   5
//      0   => esse é o resto


// Strings
// "" '' ``
let nome = "Mateus";
let sobrenome = 'Paulino';
console.log(`nome: ${nome}`);
console.log(`sobrenome: ${sobrenome}`);
let mensagem = `Olá. ${nome}`;
console.log(`mensagem: ${mensagem}`);

let nomeCompleto = nome + " " + sobrenome;
console.log(`nomeCompleto: ${nomeCompleto}`);

let tamanho = nome.length;
console.log(`tamanho: ${tamanho}`);

let maiusculas = nome.toUpperCase();
console.log(`maiusculas: ${maiusculas}`);

let minusculas = nome.toLowerCase();
console.log(`minusculas: ${minusculas}`);


// Booleanos (boolean)
let ligado = true;
console.log(`ligado: ${ligado}`);
let desligado = false;
console.log(`desligado: ${desligado}`);

let maiorDeIdade = idade >= 18;
console.log(`maiorDeIdade: ${maiorDeIdade}`);

if (maiorDeIdade) {
    console.log('Pode entrar!');
} else {
    console.log('Acesso Negado');
}

// Arrays []
let frutas = ["banana", "maça", "melão"];
console.log(frutas);

let frutas2 = ["banana", "maça", "melão"];
console.log(`frutas2 ${frutas2}`);

let number = [1, 2, 3, 4, 5];
console.log(number);
console.log(`number ${number}`);

console.log(frutas[0]);
frutas[1] = "Pera";
console.log(frutas);

frutas.push("Uva");
console.log(frutas);

frutas.pop();
console.log(frutas);

console.log(frutas.length);
console.log(frutas.indexOf("Pera"));
console.log(frutas.join(", "));
let stringSo = frutas.join(", ");
console.log(stringSo.length);

// Objetos {}
let pessoa = {
    nome: "Mateus",
    idade: 24,
    casado: false,
    hobbies: ['Jogar', 'Programar']
};

console.log(pessoa.nome);
console.log(pessoa['idade']);
pessoa.idade = 30;
console.log(pessoa.idade);
pessoa.profissao = "Programador";
console.log(pessoa.profissao);

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

console.log(pessoa.hobbies[1]);

console.log(typeof 42);
console.log(typeof "Olá");
console.log(typeof true);
console.log(typeof [1, 2, 3, 4, 5]);   // Objeto de Array
console.log(typeof {nome: "Mateus"}); //  Objeto


function mostrarDados() {
    const produto = {
        nome: "Notebook Gamer",
        preco: 9500,
        estoque: true,
        cores: ["Preto", "Prata"],
    };

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Disponível: ${produto.estoque ? "Sim" : "Não"}</p>
        <p>Cores: ${produto.cores.join(", ")}</p
    `;
}


