export { sorteiaDado, verificaTabuleiro };

var celulas = document.querySelectorAll('.cell');
var celulas2 = document.querySelectorAll('.cell2'); 
var tabuleiroJ1 = [ 
    [0,0,0],
    [0,0,0],
    [0,0,0] 
];
var tabuleiroJ2 = [ 
    [0,0,0],
    [0,0,0],
    [0,0,0] 
];
var dado1 = document.getElementById('j1');
var dado2 = document.getElementById('j2');
let vezJogador = 1;
var vez = document.getElementById('vez');

function jogo(){
    console.log(vezJogador);
    verificaTabuleiro(tabuleiroJ1);
    verificaTabuleiro(tabuleiroJ2);

    if(vezJogador === 1){
        sorteiaDado(dado1);
        vez.textContent = 'Vez: Jogador 1';
        dado2.textContent = '';
    } else {
        vez.textContent = 'Vez: Jogador 2';
        dado1.textContent = '';
        setTimeout(function() {
            sorteiaDado(dado2);
        }, 500);     }
}

function sorteiaDado(dado){
    dado.textContent = escolheNumDado();
    if(vezJogador == 1){
        handleClick(celulas);
    } else {
        sorteiaIndice();
        }
    }
    

function handleClick(cell){
    if(vezJogador == 1){
        Array.from(cell).forEach(function (elemento) {
        elemento.addEventListener('click', selecionaColuna);
    });
    }

}

function sorteiaIndice(){
    let indice = Math.floor(Math.random() * 3);
    setTimeout(function() {
        sorteiaColuna(indice);
    }, 1000);     
}

function sorteiaColuna(indice){
    

    if(tabuleiroJ2[2][indice] != 0 && tabuleiroJ2[1][indice] != 0 && tabuleiroJ2[0][indice] != 0){
        indice = 0;
        while(tabuleiroJ2[2][indice] != 0){
            indice++;
        }     
    } else {
        for(let i=0; i<3; i++){
            if(tabuleiroJ2[i][indice] == 0){
                tabuleiroJ2[i][indice] = parseInt(dado2.textContent);
                break;
            }
    }
    }
        descartaDado(tabuleiroJ2, celulas2);
        atualizaTabuleiro(tabuleiroJ2, celulas2);
        let pontosJ2 = document.getElementById('p2');
        pontosJ2.textContent = `${pontuacaoJogador(tabuleiroJ2)} pontos`;
        pontosColuna(tabuleiroJ2, '.ptsCol2');
        vezJogador = vezJogador === 1 ? 2 : 1;
        jogo();
}

function selecionaColuna(event) {

    if(event.target.className == 'cell'){
        var indice = Array.from(celulas).indexOf(event.target);  

        if (colunaCheia(tabuleiroJ1, indice)) {
            alert("Essa coluna já está cheia. Escolha outra.");
            return;
        }

        if((indice >= 0 && indice < 2) || (indice > 0 && indice <= 2)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][0] == 0){
                    // tabuleiroJ1[i][0] = parseInt(dado1.textContent);
                    if(dado1.textContent == ''){
                        vezJogador = 1;
                        jogaDado();
                        gireODado();
                    } else {
                        tabuleiroJ1[i][0] = parseInt(dado1.textContent);
                    }
                    break;
                }
            }
        }
        else if((indice >= 3 && indice < 5) || (indice > 3 && indice <= 5)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][1] == 0){
                    //tabuleiroJ1[i][1] = parseInt(dado1.textContent);
                    if(dado1.textContent == ''){
                        vezJogador = 1;
                        jogaDado();
                        alert('Gire o dado!');
                    } else {
                        tabuleiroJ1[i][1] = parseInt(dado1.textContent);
                    }
                    break;
                }
            }
        } 
        else if((indice >= 6 && indice < 8) || (indice > 6 && indice <= 8)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][2] == 0){
                    // tabuleiroJ1[i][2] = parseInt(dado1.textContent);
                    if(dado1.textContent == ''){
                        vezJogador = 1;
                        jogaDado();
                        alert('Gire o dado!');
                    } else {
                        tabuleiroJ1[i][2] = parseInt(dado1.textContent);
                    }
                    break;
                }
            }
        }
}
    descartaDado(tabuleiroJ1, celulas);
    atualizaTabuleiro(tabuleiroJ1, celulas);
    let pontosJ1 = document.getElementById('p1');
    pontosJ1.textContent = `${pontuacaoJogador(tabuleiroJ1)} pontos`;
    pontosColuna(tabuleiroJ1, '.ptsCol');
    vezJogador = vezJogador === 1 ? 2 : 1;
    jogo();
}

function retornaColuna(indice){

    let coluna;

    if((indice >= 0 && indice < 2) || (indice > 0 && indice <= 2)){
        coluna = 0;    
    }
    else if((indice >= 3 && indice < 5) || (indice > 3 && indice <= 5)){
        coluna = 1;
    }
    else if ((indice >= 6 && indice < 8) || (indice > 6 && indice <= 8)){
        coluna = 2;
    }

    return coluna;
}

function colunaCheia(tabuleiro, indice) {

    let coluna = retornaColuna(indice);


    if (tabuleiro[2][coluna] != 0 && tabuleiro[1][coluna] != 0 && tabuleiro[0][coluna] != 0) {
        return true;
    } 

    return false; 
}

function descartaDado(table, cell){
    for(let j=0; j<3; j++){
        for(let i=0; i<3; i++){
            for(let k=0; k<3; k++){
                if(tabuleiroJ1[i][j] == tabuleiroJ2[k][j]){
                    if(vezJogador == 1){
                        tabuleiroJ2[k][j] = 0;
                        atualizaTabuleiro(tabuleiroJ1, celulas);
                    }else if(vezJogador == 2){
                        tabuleiroJ1[i][j] = 0;
                        atualizaTabuleiro(tabuleiroJ2, celulas2);
                    }
                }
            }
        }
    }
}

function verificaTabuleiro(table){

    let contador = 0;

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(table[i][j] != 0){
                contador++;
            }
        }
    }

    if(contador == 9){
        fimDeJogo(table);
    }
}

function fimDeJogo(table){
    
    var modal = document.getElementById('id01');
    var vencedor = document.getElementById('winner');    

    if(table === tabuleiroJ1){
        modal.style.display = 'block';
        vencedor.textContent = 'Jogador 1 venceu!'
    } else if(table === tabuleiroJ2) {
        modal.style.display = 'block';
        vencedor.textContent = 'Jogador 2 venceu!'
    } 
    reiniciaJogo();
}

function reiniciaJogo(){
    vezJogador = 1;
     tabuleiroJ1 = [ 
        [0,0,0],
        [0,0,0],
        [0,0,0] 
    ];
     tabuleiroJ2 = [ 
        [0,0,0],
        [0,0,0],
        [0,0,0] 
    ];
    atualizaTabuleiro(tabuleiroJ1, celulas);
    atualizaTabuleiro(tabuleiroJ2, celulas2);
    let pontosJ1 = document.getElementById('p1');
    let pontosJ2 = document.getElementById('p2');
    pontosJ1.textContent = `${pontuacaoJogador(tabuleiroJ1)} pontos`;
    pontosJ2.textContent = `${pontuacaoJogador(tabuleiroJ2)} pontos`;

    let ptsCol = document.querySelectorAll('.ptsCol');
    let ptsCol2 = document.querySelectorAll('.ptsCol2');

    for (let i = 0; i < 3; i++) {
        ptsCol[i].textContent = '0';
        ptsCol2[i].textContent = '0';
    }
}

function getTable(table){

    return table;
}

function atualizaTabuleiro(table, cell){

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(table[j][i] == 0){
                cell[i * 3 + j].textContent = '';
            }
            else{
                cell[i * 3 + j].textContent = table[j][i];
            }
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
    let dado = Math.floor(Math.random()* 6) + 1;
    return dado;
}

function pontosColuna(table, ptsColClass) {
    let soma = somaColuna(table);
    let ptsCol = document.querySelectorAll(ptsColClass);

    for (let i = 0; i < 3; i++) {
        ptsCol[i].textContent = soma[i];
    }
}