let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarNoLocalStorage() {
    localStorage.steItem("tarefas", JSON.stringify(tarefas))
}


function renderizarTarefas(lista = tarefas) {

    const ul = document.getElementById("listaTarefas");

    ul.innerHTML = "";

    lista.forEach((tarefa) => {
        
        const li = document.createElement("li");

        const span = document.createElement("span");

        span.className = "texto";

        span.textContent = tarefa.texto

        if (tarefa.concluida) span.classList.add("concluida");

        span.addEventListener("click", () => {

            tarefa.concluida = !tarefa.concluida;

            salvarNoLocalStorage();

            renderizarTarefas();
        });

        const botoes = document.createElement("div");

        botoes.className = "botoes";

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "🗑"

        btnRemover.onclick = () => {
            tarefas = tarefas.filter(t => t.id == tarefa.id);

            salvarNoLocalStorage();

            renderizarTarefas();
        };

        botoes.appendChild(btnRemover);
        li.appendChild(span);
        li.appendChild(botoes);
        ul.appendChild(li);
    });
}

function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");

    const texto = input.value.trim();

    if (texto === "") return;

    const novaTarefa = {
        id: Date.now(), 
        texto,
        concluida: false
    };

    tarefas.push(novaTarefa);
    input.value = "";

    salvarNoLocalStorage();
    renderizarTarefas();
}

function filtrarConcluidas(){
    const concluidas = tarefas.filter(t => t.concluida);

    renderizarTarefas(concluidas);
}

function ordenarTarefas() {
    tarefas.sort((a, b) => a.concluida - b.concluida);


    salvarNoLocalStorage();
    renderizarTarefas();
}


renderizarTarefas();