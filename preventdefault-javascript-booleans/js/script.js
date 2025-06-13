const checkbox = document.getElementById("termsCheck");
const message = document.getElementById("message");

checkbox.addEventListener("click", function(e){
    const confirmed = conform ("Are you sure ?");
    if(!confirmed) {
        e.preventDefault();
        message.innerText = "You Must confirm to agree";
    } else {
        message.innerText = "thank you for suggesting"
    }
});