import {verificaTabuleiro, sorteiaDado} from './jogada.js';

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

jogo();

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