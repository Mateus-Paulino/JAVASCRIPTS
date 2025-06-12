    function LetsDoMath() {
    var numberA = parseInt(document.getElementById("namA").value); 
    var numberB = parseInt(document.getElementById("namB").value); 

    console.log(numberA + numberB);

    var total = document.getElementById("total");

    switch(type) {
            case "add":total.innerHTML = "Total is: " + (numberA + numberB);
            break;
            case "subtract":total.innerHTML = "Total is: " + (numberA - numberB);
            break;
            case "multiply":total.innerHTML = "Total is: " + (numberA * numberB);
            break;
            case "divide":
            var decimal = parseFloat(numberA / numberB).toFixed(2);    
            total.innerHTML = "Total is: " + decimal;
            break;
    }
    
}