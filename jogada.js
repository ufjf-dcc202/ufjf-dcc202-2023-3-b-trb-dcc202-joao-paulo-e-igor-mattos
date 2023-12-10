export { getTable, escolheNumDado, atualizaTabuleiro, somaColuna, pontuacaoJogador };

function getTable(table){

    return table;
}

function atualizaTabuleiro(table, cell){

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            table[j][i] = parseInt(cell[i * 3 + j].textContent);
        }
    }
}

function somaColuna(table){

    const jogo = getTable(table);

    let soma = [0, 0, 0];
    for(let j=0; j<3; j++){
        if(jogo[0][j] === jogo[1][j] && jogo[1][j] === jogo[2][j]){
            soma[j] = jogo[0][j] * 3 + jogo[1][j] * 3 + jogo[2][j] * 3;
        }
        else if(jogo[0][j] === jogo[1][j]){
            soma[j] = jogo[0][j] * 2 + jogo[1][j] * 2 + jogo[2][j];
        }
        else if(jogo[0][j] === jogo[2][j]){
            soma[j] = jogo[0][j] * 2 + jogo[1][j] + jogo[2][j] * 2;
        }
        else if(jogo[1][j] === jogo[2][j]){
            soma[j] = jogo[0][j] + jogo[1][j] * 2 + jogo[2][j] * 2;
        }
        else{
            soma[j] = jogo[0][j] + jogo[1][j] + jogo[2][j];
        }
    }
    return soma;
}

function pontuacaoJogador(table){

    const colunas = somaColuna(table);
    const total = colunas[0] + colunas[1] + colunas[2];

    return total;
}

function escolheNumDado() {
    let dado = Math.floor(Math.random()* (6 - 1 + 1)) + 1;
    return dado;
}