let nome = prompt("What's your Name?");
if(!nome || nome.trim() === "") {
    nome = "Guest";
}

const greetingEl = document.getElementById("greeting");
const currentHour = new Date().getHours();

let greetingMessage = "";
if (currentHour < 12) {
    greetingMessage = `Good Morning, ${nome}`;
} else if (currentHour < 17) {
    greetingMessage = `Good Afternoon, ${nome}`;
} else if (currentHour < 21) {
    greetingMessage = `Good Evening, ${nome}`;
} else {
    greetingMessage = `Good Night, ${nome}`;
}

greetingEl.textContent = greetingMessage;
