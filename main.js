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

atualizaTabuleiro(tabuleiroJ1, celulas);
atualizaTabuleiro(tabuleiroJ2, celulas2);

somaColuna(tabuleiroJ1);
somaColuna(tabuleiroJ2);

pontuacaoJogador(tabuleiroJ1);
pontuacaoJogador(tabuleiroJ2);

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