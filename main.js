import {getTable, escolheNumDado, atualizaTabuleiro, somaColuna, pontuacaoJogador, pontosColuna} from './jogada.js';

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

jogo();

function jogo(){
    if(vezJogador === 1){
        console.log("vez do jogador1");
        jogaDado();
    } else {
        console.log("vez do jogador2");
        sorteiaDado();  
    }
}

function jogaDado() {
    function manipuladorDeClique(event) {
        event.target.textContent = escolheNumDado();
        handleClick(celulas);
        dado1.removeEventListener("click", manipuladorDeClique);
    }
    dado1.addEventListener("click", manipuladorDeClique);
}

function sorteiaDado(){
    dado2.textContent = escolheNumDado();
    sorteiaIndice();
}

function handleClick(cell){
    Array.from(cell).forEach(function (elemento) {
        elemento.addEventListener('click', selecionaColuna);
    });
}

function sorteiaIndice(){
    let indice = Math.floor(Math.random() * 3);
    sorteiaColuna(indice);
}

function sorteiaColuna(indice){

        for(let i=0; i<3; i++){
            if(tabuleiroJ2[i][indice] == 0){
                tabuleiroJ2[i][indice] = parseInt(dado2.textContent);
                break;
            }
        }
        descartaDado(tabuleiroJ2, celulas2);
        atualizaTabuleiro(tabuleiroJ2, celulas2);
        let pontosJ2 = document.getElementById('p2');
        pontosJ2.textContent = `${pontuacaoJogador(tabuleiroJ2)} pontos`;
        vezJogador = vezJogador === 1 ? 2 : 1;
        pontosColuna(tabuleiroJ2, '.ptsCol2');
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
                    tabuleiroJ1[i][0] = parseInt(dado1.textContent);
                    break;
                }
            }
        }
        else if((indice >= 3 && indice < 5) || (indice > 3 && indice <= 5)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][1] == 0){
                    tabuleiroJ1[i][1] = parseInt(dado1.textContent);
                    break;
                }
            }
        } 
        else if((indice >= 6 && indice < 8) || (indice > 6 && indice <= 8)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][2] == 0){
                    tabuleiroJ1[i][2] = parseInt(dado1.textContent);
                    break;
                }
            }
        }
}
    descartaDado(tabuleiroJ1, celulas);
    atualizaTabuleiro(tabuleiroJ1, celulas);
    let pontosJ1 = document.getElementById('p1');
    pontosJ1.textContent = `${pontuacaoJogador(tabuleiroJ1)} pontos`;
    vezJogador = vezJogador === 1 ? 2 : 1;
    pontosColuna(tabuleiroJ1, '.ptsCol');
    jogo();
}

function colunaCheia(tabuleiro, indice) {

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


    if (tabuleiro[2][coluna] === 0) {
        return false;
    }
    return true; 
}

function descartaDado(table, cell){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(tabuleiroJ1[i][j] == tabuleiroJ2[i][j]){
                if(vezJogador == 1){
                    tabuleiroJ2[i][j] = 0;
                }else if(vezJogador == 2){
                    tabuleiroJ1[i][j] = 0;
                }
            }
        }
    }
    atualizaTabuleiro(table, cell);
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
        fimDeJogo();
    }
}

function fimDeJogo(){
    const totalJ1 = pontuacaoJogador(tabuleiroJ1);
    const totalJ2 = pontuacaoJogador(tabuleiroJ2);

    let campeao = document.getElementById('vencedor');

    if(totalJ1 > totalJ2){
        alert('Jogador 1!');
    } else if(totalJ2 > totalJ1) {
        alert('Jogador 2!');
    } 
}