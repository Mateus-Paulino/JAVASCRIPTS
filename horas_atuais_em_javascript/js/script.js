const now = new Date();
console.log(now);


console.log(now.toDateString()); // only date

console.log(now.toTimeString()); // only hours

console.log("Year:", now.getFullYear()); // 2025
console.log("Month:", now.getMonth() + 1); // O mês é baseado em 0
console.log("Date", now.getDate()); // 17
console.log("Hours", now.getHours()) // 19Hrs
console.log("Minutes", now.getMinutes()); //22 min
console.log("Seconds", now.getSeconds()); // 58 sec