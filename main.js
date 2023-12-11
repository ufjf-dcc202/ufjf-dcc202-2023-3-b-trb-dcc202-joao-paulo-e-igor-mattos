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

    verificaTabuleiro(tabuleiroJ1);
    verificaTabuleiro(tabuleiroJ2);

    if(vezJogador === 1){
        console.log("vez do jogador1");
        jogaDado();
    } else {
        console.log("vez do jogador2");
        sorteiaDado();
    }
}

function jogaDado() {
    // Defina a função de manipulação do evento de clique
    function manipuladorDeClique(event) {
        // Executar a lógica desejada
        event.target.textContent = escolheNumDado();
        handleClick(celulas);

        // Remover o ouvinte de eventos após ser acionado
        dado1.removeEventListener("click", manipuladorDeClique);
    }

    // Adicionar o ouvinte de eventos ao elemento dado1
    dado1.addEventListener("click", manipuladorDeClique);
}

function sorteiaDado(){
    dado2.textContent = escolheNumDado();
    sorteiaColuna();
}

function handleClick(cell){
    Array.from(cell).forEach(function (elemento) {
        elemento.addEventListener('click', selecionaColuna);
    });
}

function sorteiaColuna(){

        let indice = Math.floor(Math.random() * 3);
        console.log(indice);

        if(indice == 0){
            if(tabuleiroJ2[0][0] != 0 && tabuleiroJ2[1][0] != 0 && tabuleiroJ2[2][0] != 0){
                sorteiaColuna();
            }else{
            for(let i=0; i<3; i++){
                if(tabuleiroJ2[i][0] == 0){
                    tabuleiroJ2[i][0] = parseInt(dado2.textContent);
                    i = 3;
                }
            }
            }
        }
        else if(indice == 1){
            if(tabuleiroJ2[0][1] != 0 && tabuleiroJ2[1][1] != 0 && tabuleiroJ2[2][1] != 0){
                sorteiaColuna();
            }
            else{
            for(let i=0; i<3; i++){
                if(tabuleiroJ2[i][1] == 0){
                    tabuleiroJ2[i][1] = parseInt(dado2.textContent);
                    i = 6;
                }
            }
            }
        } 
        else if(indice == 2){
            if(tabuleiroJ2[0][2] != 0 && tabuleiroJ2[1][2] != 0 && tabuleiroJ2[2][2] != 0){
                sorteiaColuna();
            }
            else{
            for(let i=0; i<3; i++){
                if(tabuleiroJ2[i][2] == 0){
                    tabuleiroJ2[i][2] = parseInt(dado2.textContent);
                    i = 9;
                }
            }
            }
        }
        atualizaTabuleiro(tabuleiroJ2, celulas2);
        let pontosJ2 = document.getElementById('p2');
        pontosJ2.textContent = `${pontuacaoJogador(tabuleiroJ2)} pontos`;
        vezJogador = vezJogador === 1 ? 2 : 1;
        jogo();
}

function selecionaColuna(event) {

    if(event.target.className == 'cell'){
        var indice = Array.from(celulas).indexOf(event.target);  

        if((indice >= 0 && indice < 2) || (indice > 0 && indice <= 2)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][0] == 0){
                    tabuleiroJ1[i][0] = parseInt(dado1.textContent);
                    i = 3;
                }
            }
        }
        else if((indice >= 3 && indice < 5) || (indice > 3 && indice <= 5)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][1] == 0){
                    tabuleiroJ1[i][1] = parseInt(dado1.textContent);
                    i = 6;
                }
            }
        } 
        else if((indice >= 6 && indice < 8) || (indice > 6 && indice <= 8)){
            for(let i=0; i<3; i++){
                if(tabuleiroJ1[i][2] == 0){
                    tabuleiroJ1[i][2] = parseInt(dado1.textContent);
                    i = 9;
                }
            }
        }
    }
   
    atualizaTabuleiro(tabuleiroJ1, celulas);
    let pontosJ1 = document.getElementById('p1');
    pontosJ1.textContent = `${pontuacaoJogador(tabuleiroJ1)} pontos`;
    vezJogador = vezJogador === 1 ? 2 : 1;
    pontosColuna(tabuleiroJ1);
    jogo();
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