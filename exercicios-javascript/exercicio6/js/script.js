function mostrarEstrelas(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = "";
        for (let i = 0; i < linha; i++);
            padrao += "*";
    console.log(padrao);
    }   
}
mostrarEstrelas(5)