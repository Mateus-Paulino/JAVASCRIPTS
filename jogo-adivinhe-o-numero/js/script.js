const NUMERO_MAXIMO = 100;
const TENTATIVAS_MAXIMAS = 10;


const gameForm = document.getElementById('game-form');
const maxAttempts = document.getElementById('max-attempts');
const gameFormContainer = document.getElementById('game-form-container');
const guessInput = document.getElementById('guess-input');
const errorMessages = document.getElementById('error-messages');
const submitButton = document.getElementById('submit-button');
const remainingAttempts = document.getElementById('remaining-attempts');
const progressBar = document.getElementById('progress-bar');
const previousGuesses = document.getElementById('previous-guesses');
const freedbackMessages = document.getElementById('freedback-messages');
const gameActions = document.getElementById('game-actions');
const restartButton = document.getElementById('restart-button');

let estadoDoJogo = {
    numeroSecreto:  0,
    tentativasRestantes: TENTATIVAS_MAXIMAS,
    numeroChutado: undefined,
    mensagem: '',
    jogoEncerrado: false,
    jogoVencido: undefined,
    historicoDeTentativas: []
};


document.addEventListener('DOMContentLoaded', () => {
    maxAttempts.textContent = TENTATIVAS_MAXIMAS;
    inicializarJogo();
});


function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * NUMERO_MAXIMO) + 1;
}

function inicializarJogo() {
    estadoDoJogo = {
        numeroSecreto:  gerarNumeroAleatorio(),
        tentativasRestantes: TENTATIVAS_MAXIMAS,
        numeroChutado: undefined,
        mensagem: '',
        jogoEncerrado: false,
        jogoVencido: undefined,
        historicoDeTentativas: []
    };

    atualizarUI();

    guessInput.value = '';
    errorMessages.textContent = '';
    guessInput.classList.remove('invalid');

    freedbackMessages.className = 'freedback-messages';
    freedbackMessages.style.display = 'none';

    gameActions.style.display = 'none';

    gameFormContainer.style.display = 'block';

    console.log('Número Secreto:', estadoDoJogo.numeroSecreto);

}

function validarChute(chute) {
    if (isNaN(chute)) {
        return {
            valido: false,
            mensagem: 'Por favor, Digite um número válido'
        };    
    }

    if (chute < 1 || chute > NUMERO_MAXIMO) {
        return {
            valido: false,
            mensagem: `O número deve estar entre 1 e ${NUMERO_MAXIMO}`
        };
    }
    return {
            valido : true,
            mensagem: `O numero deve estar entre 1 e ${NUMERO_MAXIMO}`
        };
}


function avaliarChute(chute) {
    const novoEstado = {...estadoDoJogo};

    novoEstado.numeroChutado = chute;

    novoEstado.historicoDeTentativas = [...estadoDoJogo.historicoDeTentativas, chute];

    novoEstado.tentativasRestantes--;

    if (chute === estadoDoJogo.numeroSecreto) {
        novoEstado.jogoEncerrado = true;
        novoEstado.jogoVencido = true;
        novoEstado.mensagem = 'Parabéns! Você acertou o Número!'
    } else if (novoEstado.tentativasRestantes === 0) {
        novoEstado.jogoEncerrado = true;
        novoEstado.jogoVencido = false;
        novoEstado.mensagem = `Fim de Jogo! O Número correto era ${estadoDoJogo.numeroSecreto}`;
    }
    else {
        novoEstado.mensagem = chute > estadoDoJogo.numeroSecreto
            ? 'Muito alto! Tente novamente.'
            : 'Muito baixo! Tente novamente.'
    }
    
    estadoDoJogo = novoEstado;
    
    atualizarUI();
}    

function atualizarUI() {
    remainingAttempts.textContent = estadoDoJogo.tentativasRestantes;

    const porcentagem = (estadoDoJogo.historicoDeTentativas.length / TENTATIVAS_MAXIMAS) * 100;
    
    progressBar.style.width = `${porcentagem}%`

    if (estadoDoJogo.historicoDeTentativas.length > 0) {
        previousGuesses.textContent = `Tentativas anteriores: ${estadoDoJogo.historicoDeTentativas.join(', ')}`
    } else {
        previousGuesses.textContent = 'Tentativas anteriores: ';
    }

    if (estadoDoJogo.jogoEncerrado) {
        freedbackMessages.textContent = estadoDoJogo.mensagem;

        if (estadoDoJogo.jogoVencido) {
            freedbackMessages.className = 'freedback-messages sucess';
        } else {
            freedbackMessages.className = 'freedback-messages error';
        }

        freedbackMessages.style.display ='block';
        gameActions.style.display = 'block';
        gameFormContainer.style.display = 'none';
    }
    else if (estadoDoJogo.mensagem) {
        freedbackMessages.textContent = estadoDoJogo.mensagem;
        freedbackMessages.className = estadoDoJogo.numeroChutado > estadoDoJogo.numeroSecreto
            ? 'freedback-messages error'
            : 'freedback-messages error';
        freedbackMessages.style.display = 'block';
    }
}

gameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    errorMessages.textContent = '';
    guessInput.classList.remove('invalid');


    const chute = parseInt(guessInput.value);

    const validacao = validarChute(chute);

    if(!validacao.valido) {
        errorMessages.textContent =  validacao.mensagem;
        guessInput.classList.add('invalid');
        return;
    }

    avaliarChute(chute);

    guessInput.value = '';
});

restartButton.addEventListener('click', inicializarJogo);