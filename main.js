import {getTable, escolheNumDado, atualizaTabuleiro, somaColuna, pontuacaoJogador} from './jogada.js';

const celulas = document.querySelectorAll('.cell');
const celulas2 = document.querySelectorAll('.cell2'); 

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
const dado1 = document.getElementById('j1');
const dado2 = document.getElementById('j2');

jogaDado(dado1);

function jogaDado(dado){
    dado.addEventListener("click", function(event) {
        event.target.textContent = escolheNumDado();
        handleClick();
    });
}

function handleClick(){
    Array.from(celulas).forEach(function (elemento) {
        elemento.addEventListener('click', selecionaColuna);
    });
}

function selecionaColuna(event) {

    if(event.target.className == 'cell'){
        var indice = Array.from(celulas).indexOf(event.target);  
    }
    else if(event.target.className == 'cell2'){
        var indice = Array.from(celulas2).indexOf(event.target);  
    }

    const dado1 = document.getElementById('j1');

    if((indice >= 0 && indice < 2) || (indice > 0 && indice <= 2)){
        for(let i=0; i<3; i++){
            if(celulas[i].textContent == ''){
                celulas[i].textContent = dado1.textContent;
                i = 3;
            }
        }
    }
    else if((indice >= 3 && indice < 5) || (indice > 3 && indice <= 5)){
        for(let i=3; i<6; i++){
            if(celulas[i].textContent == ''){
                celulas[i].textContent = dado1.textContent;
                i = 6;
            }
        }
    } 
    else if((indice >= 6 && indice < 8) || (indice > 6 && indice <= 8)){
        for(let i=6; i<9; i++){
            if(celulas[i].textContent == ''){
                celulas[i].textContent = dado1.textContent;
                i = 9;
            }
        }
    }
}

function fimDeJogo(){
    const totalJ1 = pontuacaoJogador(tabuleiroJ1);
    const totalJ2 = pontuacaoJogador(tabuleiroJ2);

    let campeao = document.getElementById('vencedor');

    if(totalJ1 > totalJ2){
        campeao.textContent = 'Jogador 1!';
    } else if(totalJ2 > totalJ1) {
        campeao.textContent = 'Jogador 2!';
    } 
}