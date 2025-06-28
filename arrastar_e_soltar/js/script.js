const arrastavel = document.querySelector(".arrastavel");
let offsetX = 0;
let offsetY = 0;
let foiArrastado = false;

arrastavel.addEventListener("mousedown", (event) => {
    foiArrastado = true;
    offsetX = event.clientX - arrastavel.offsetLeft
    offsetY = event.clientY - arrastavel.offsetTop
});

document.addEventListener("mousemove", (event) => {
    if(foiArrastado) {
        arrastavel.style.left = `${event.clientX - offsetX}px`
        arrastavel.style.top = `${event.clientY - offsetY}px`
    }
});

document.addEventListener("mouseup", (event) => {
    foiArrastado = false;
});