const contadorDisplay = document.getElementById("contador");
const AumentarBtn = document.getElementById("aumentar");
const DiminuirBtn = document.getElementById("diminuir");
const ReiniciartBtn = document.getElementById("reset");

let contador = 0;

AumentarBtn.addEventListener("click", () => {
    contador++;
    updateDisplay();
});
DiminuirBtn.addEventListener("click", () => {
    contador--;
    updateDisplay();
});
ReiniciartBtn.addEventListener("click", () => {
    contador = 0;
    updateDisplay();
});

function mudarCor() {
    const elemento = document.getElementById("diminuir");
    if (elemento.style.backgroundColor === "rgb(164, 224, 164)") {
    elemento.style.backgroundColor = "rgb(219, 224, 219)";
    } else {
    elemento.style.backgroundColor = "rgb(219, 224, 219)";
    }
}

function updateDisplay() {
    contadorDisplay.textContent = contador;
}