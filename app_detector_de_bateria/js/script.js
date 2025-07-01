const charge = document.getElementById("charge");
const chargeLevel = document.getElementById("charge-level");
const chargingStatus = document.getElementById("charging-status");

window.onload = () => {
    if (!navigator.getBattery) {
        chargingStatus.innerHTML = "Battery API is not supported in this browser.";
        return;
    }
};

navigator.getBattery().then((battery) => {
    function updateBattery() {
        const level = Math.floor(battery.level * 100);
        charge.style.width = `${level * 0.16}em`;
        chargeLevel.textContent = `${level}%`;

        if (level <= 20) {
            charge.style.backgroundColor = "#ff3b3b";
        } else if (level <= 50) {
            charge.style.backgroundColor = "#ffa500";
        } else if (level <= 80) {
            charge.style.backgroundColor = "#ffd700";
        } else {
            charge.style.backgroundColor = "#4caf50";
        }
        
        if (battery.charging) {
            charge.classList.add("active");
            chargingStatus.innerHTML = `Device is <span>Charging</span>`;
        } else {
            charge.classList.remove("active");
            chargingStatus.innerHTML = `Device is <span>Not Charging</span>`;
        }
    }
    updateBattery();

    battery.addEventListener("levelchange", updateBattery);
    battery.addEventListener("chargingchange", updateBattery);
});