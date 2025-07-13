const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        //remoção da classe active
        headers.forEach(h => h.classList.remove("active"));
        header.classList.toggle("active");
    });
});