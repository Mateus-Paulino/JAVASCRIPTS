document.getElementById("generateStory").addEventListener("click", function() {
    let name = document.getElementById("name").value.trim();
    let place = document.getElementById("place").value.trim();
    let object = document.getElementById("object").value.trim();
    let action = document.getElementById("action").value.trim();
    let storyDiv = document.getElementById("story");

    console.log(name,place,object,action);

    if (name === "" || place === "" || object === "" || action === "") {
        alert("Please fill in all fields");
    }

    let stories = [
        `Um dia, ${name} foi a ${place} e encontrou um ${object} misterioso. Sem pensar, ${name} decidiu ${action}, e algo mágico aconteceu! One day, ${name} went to ${place} and found a mysterious ${object}. Without thinking, ${name} decided to ${action}, and something magical happened!`,
        `No coração de ${place}, ${name} descobriu um ${object} escondido. A curiosidade tomou conta, ${name} começou a ${action}, e a aventura começou! In the heart of ${place}, ${name} discovered a hidden ${object}. Curiosity got the better of him, ${name} began the ${action}, and the adventure began!`,
        `${name} estava caminhando por ${place} quando, de repente, um ${object} apareceu. Sem hesitar, ${name} escolheu ${action}, o que levou a uma experiência inesquecível! ${name} was walking through ${place} when suddenly an ${object} appeared. Without hesitation, ${name} chose ${action}, which led to an unforgettable experience!`,
        `Enquanto explorava ${place}, ${name} viu um ${object} brilhante. Assim que o tocaram, foram transportados para um novo mundo, onde tiveram que ${action} para encontrar o caminho de volta para casa! While exploring ${place}, ${name} saw a glowing ${object}. As soon as they touched it, they were transported to a new world, where they had to ${action} to find their way back home!`,
        `Uma noite em ${place}, ${name} encontrou um ${object} antigo. No momento em que tentaram ${action}, o objeto começou a brilhar, revelando um segredo oculto! One night in ${place}, ${name} found an ancient ${object}. The moment they attempted ${action}, the object began to glow, revealing a hidden secret!${name} was cleaning out the attic when he came across an old ${object}. Curious, he decided to ${action} it and suddenly found himself on a journey through time!`,
        `Em ${place}, ${name} recebeu um estranho ${object} de um velho sábio. Foi-lhe dito que, se ${action} acontecesse no momento certo, algo incrível aconteceria! In ${place}, ${name} received a strange ${object} from a wise old man. He was told that if ${action} happened at the right time, something amazing would happen!`,
        `${name} estava limpando o sótão quando se deparou com um velho ${object}. Curiosos, decidiram ${action} e, de repente, foram levados a uma viagem no tempo!  ${name} was cleaning out the attic when he came across an old ${object}. Curious, he decided to ${action} it and suddenly found himself on a journey through time!`,
    ];
    let randomStory = stories[Math.floor(Math.random() * stories.length)];
    console.log(randomStory);
    storyDiv.innerText = randomStory;
    storyDiv.style.display = "block";
});
