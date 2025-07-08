const dropdowButton = document.getElementById("dropdownbutton");
const dropdownContent = document.getElementById("dropdowncontent");

dropdowButton.addEventListener("click", () => {
    dropdownContent.style.display = dropdownContent.style.display
    === "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
    if (!event.target.matches(".dropdown button")) {
        dropdownContent.style.display = "none";
    }
});