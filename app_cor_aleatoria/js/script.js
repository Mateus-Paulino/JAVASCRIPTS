const btn = document.getElementById("mudar");
btn.addEventListener("click", () => {
    const corAleatoria = getcorAleatoria();
    document.body.style.backgroundColor = corAleatoria;
});

function getcorAleatoria() {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${blue}, ${green}`;
}