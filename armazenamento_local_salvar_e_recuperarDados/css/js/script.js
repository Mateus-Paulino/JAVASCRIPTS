/* Local Storage is a part of the Web Storage API thats
websites to Store key-value pairs in a Web browser. 
O Armazenamento Local faz parte da API de Armazenamento Web
que permite que sites armazenem pares chave-valor
em um navegador da Web. */

/* The data saved in Local Storage remains evern after
Os dados salvos no armazenamento local permanecem para sempre
the browser is closed and reopened (unless clared manually).
o navegador é fechado e reaberto (a menos que seja declarado manualmente).

/* It can usually store around 5MB of data per domain 
(much more than cookies). 
Geralmente, ele pode armazenar cerca de 5 MB de dados por domínio
(muito mais do que cookies) */

/* To set data : localStorage.setItem("key");
Para definir dados: localStorage.setItem("key"); */
localStorage.setItem("age", "56");

/* To get data: localStorage.getItem("key");
Para obter dados: localStorage.getItem("key"); */
console.log(`Your name is ${localStorage.getItem("name")}`);

/* To remove data : localStorage.removeItem("key");
Para remover dados: localStorage.removeItem("key"); */
localStorage.removeItem("")

/* To clear all data : localStorage.clear();
Para limpar todos os dados: localStorage.clear(); */
localStorage.clear();

/* Only Strings can be stored. Use JSON.stringify() to 
store objects, and JSON.parse() to retrieve them.
Somente strings podem ser armazenadas. Use JSON.stringify()
para armazenar objetos e JSON.parse() para recuperá-los. */
let userDetail = {name: "Jorge", age:76};
localStorage.setItem("user", JSON.stringify(userDetail));

let storedUser = JSON.parse(localStorage.getItem("user"));