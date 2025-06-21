function mostrarMensagem() {
    console.log('Primeira Mensagem');
    console.log('Segunda Mensagem');
    console.log('Terceira Mensagem');
    console.log('Quarta Mensagem');
}

mostrarMensagem();

console.log('Fora da função!')


function esperar() {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver('Depois de 2 segundos...')
        }, 2000);
    });
}


async function executar() {
    console.log('Antes de esperar');
    const resultado = await esperar();
    console.log(resultado);
    console.log('Depois de esperar');
}

executar();

console.log('O código não está travado!')