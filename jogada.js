export { escolheNumDado };

function escolheNumDado() {
    let dado = Math.floor(Math.random()* (6 - 1 + 1)) + 1;
    return dado;
}