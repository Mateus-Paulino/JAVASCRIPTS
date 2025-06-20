function buscarDados() {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver({ id: 1, nome: 'Jessica'}); 
        }, 1000);
    });
}

buscarDados()
    .then((dados) => {
        console.log('Dados', dados);
    })
    .catch((erro) => {
        console.log('Erro:', erro);
    });
    

async function mostrarDados() {
    try {
        const dados = await buscarDados();
        console.log('Dados:', dados);
    } catch(erro) {
        console.log('Erro:', erro);
    }
}
mostrarDados();


async function somar(a , b) {
    return a + b;
}

somar(2 , 3)
    .then(resultado => console.log(resultado));

async function exemplo() {
    const resultado = await somar(5, 10);
    console.log(resultado)
}
exemplo() // jeito certo de usar console log 
// async e await são calsalzinho nao pode separa-los usar assim 

async function buscarEstados() {
    try {
        const resposta = await fetch('https://servicosdados.ibge.com.br/api/v1/localidades/estados?orderBy=nome');
        const estados = await resposta.json();

        console.log('Estados:', estados);

        estados.forEach(estado => {
            console.log('Estado:', estado);
        });
    } catch (erro) {
        console.erro('Falha ao buscar estados:', erro);
    }
}
buscarEstados();
