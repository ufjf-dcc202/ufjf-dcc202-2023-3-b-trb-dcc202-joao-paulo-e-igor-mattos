import { escolheNumDado } from "./jogada.js";

/*const vez = j1;

function setVezJogador(){
    const vezJogador = true;
    const vezMaquina = false;
    if()
}
*/

const estadoTabuleiro = {
    jogador1: [
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    jogador2: [
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
};

console.log(estadoTabuleiro);

function mostraDado(){
    const dado1 = document.querySelector('#j1');
    const dado2 = document.querySelector('#j2');
    dado1.textContent = escolheNumDado();
    dado2.textContent = escolheNumDado();
}

const dado1 = document.querySelector('#j1');
const dado2 = document.querySelector('#j2');
dado1.addEventListener('click', mostraDado);
dado2.addEventListener('click', mostraDado);



function somaPrimeiraCol() {
    var divs = document.querySelectorAll('#col-1');
    var soma1 = 0;

    var x0 = parseFloat(divs[0].textContent);
    var x1 = parseFloat(divs[1].textContent);
    var x2 = parseFloat(divs[2].textContent);

    if (x0 === x1 && x1 === x2) {
        soma1 = x0 * 3 + x1 * 3 + x2 * 3;
    } else if (x0 === x1) {
        soma1 = x0 * 2 + x1 * 2 + x2;
    } else if (x0 === x2) {
        soma1 = x0 * 2 + x2 * 2 + x1;
    } else if (x1 === x2) {
        soma1 = x1 * 2 + x2 * 2 + x0;
    } else {
        soma1 = x0 + x1 + x2;
    }


    console.log('A soma dos valores das primeira coluna é: ' + soma1);
    return soma1;
}

function somaSegundaCol() {
    var divs = document.querySelectorAll('#col-2');
    var soma2 = 0;

    var x0 = parseFloat(divs[0].textContent);
    var x1 = parseFloat(divs[1].textContent);
    var x2 = parseFloat(divs[2].textContent);
    if (x0 === x1 && x1 === x2) {
        soma2 = x0 * 3 + x1 * 3 + x2 * 3;
    } else if (x0 === x1) {
        soma2 = x0 * 2 + x1 * 2 + x2;
    } else if (x0 === x2) {
        soma2 = x0 * 2 + x2 * 2 + x1;
    } else if (x1 === x2) {
        soma2 = x1 * 2 + x2 * 2 + x0;
    } else {
        soma2 = x0 + x1 + x2;
    }
    console.log('A soma dos valores das segunda coluna é: ' + soma2);
    return soma2;
}

function somaTerceiraCol() {
    var divs = document.querySelectorAll('#col-3');
    var soma3 = 0;

    var x0 = parseFloat(divs[0].textContent);
    var x1 = parseFloat(divs[1].textContent);
    var x2 = parseFloat(divs[2].textContent);
    if (x0 === x1 && x1 === x2) {
        soma3 = x0 * 3 + x1 * 3 + x2 * 3;
    } else if (x0 === x1) {
        soma3 = x0 * 2 + x1 * 2 + x2;
    } else if (x0 === x2) {
        soma3 = x0 * 2 + x2 * 2 + x1;
    } else if (x1 === x2) {
        soma3 = x1 * 2 + x2 * 2 + x0;
    } else {
        soma3 = x0 + x1 + x2;
    }
    console.log('A soma dos valores das terceira coluna é: ' + soma3);
    return soma3;
}

const s1 = parseFloat(somaPrimeiraCol());
const s2 = parseFloat(somaSegundaCol());
const s3 = parseFloat(somaTerceiraCol());

function somaColunas(soma1, soma2, soma3) {
    var soma = 0;
    soma = soma1 + soma2 + soma3;
    console.log('A soma de todas as colunas é: ' + soma)
    return soma;
}

somaColunas(s1, s2, s3);

//////

function somaPrimeiraCol2() {
    var divs = document.querySelectorAll('#col2-1');
    var soma1 = 0;

    var x0 = parseFloat(divs[0].textContent);
    var x1 = parseFloat(divs[1].textContent);
    var x2 = parseFloat(divs[2].textContent);
    
    if (x0 === x1 && x1 === x2) {
        soma1 = x0 * 3 + x1 * 3 + x2 * 3;
    } else if (x0 === x1) {
        soma1 = x0 * 2 + x1 * 2 + x2;
    } else if (x0 === x2) {
        soma1 = x0 * 2 + x2 * 2 + x1;
    } else if (x1 === x2) {
        soma1 = x1 * 2 + x2 * 2 + x0;
    } else {
        soma1 = x0 + x1 + x2;
    }


    console.log('A soma dos valores das primeira coluna do jogo 2 é: ' + soma1);
    return soma1;
}

function somaSegundaCol2() {
    var divs = document.querySelectorAll('#col2-2');
    var soma2 = 0;

    var x0 = parseFloat(divs[0].textContent);
    var x1 = parseFloat(divs[1].textContent);
    var x2 = parseFloat(divs[2].textContent);
    if (x0 === x1 && x1 === x2) {
        soma2 = x0 * 3 + x1 * 3 + x2 * 3;
    } else if (x0 === x1) {
        soma2 = x0 * 2 + x1 * 2 + x2;
    } else if (x0 === x2) {
        soma2 = x0 * 2 + x2 * 2 + x1;
    } else if (x1 === x2) {
        soma2 = x1 * 2 + x2 * 2 + x0;
    } else {
        soma2 = x0 + x1 + x2;
    }
    console.log('A soma dos valores das segunda coluna é: ' + soma2);
    return soma2;
}

function somaTerceiraCol2() {
    var divs = document.querySelectorAll('#col2-3');
    var soma3 = 0;

    var x0 = parseFloat(divs[0].textContent);
    var x1 = parseFloat(divs[1].textContent);
    var x2 = parseFloat(divs[2].textContent);
    if (x0 === x1 && x1 === x2) {
        soma3 = x0 * 3 + x1 * 3 + x2 * 3;
    } else if (x0 === x1) {
        soma3 = x0 * 2 + x1 * 2 + x2;
    } else if (x0 === x2) {
        soma3 = x0 * 2 + x2 * 2 + x1;
    } else if (x1 === x2) {
        soma3 = x1 * 2 + x2 * 2 + x0;
    } else {
        soma3 = x0 + x1 + x2;
    }
    console.log('A soma dos valores das terceira coluna é: ' + soma3);
    return soma3;
}

const soma1 = parseFloat(somaPrimeiraCol2());
const soma2 = parseFloat(somaSegundaCol2());
const soma3 = parseFloat(somaTerceiraCol2());

function somaColunas2(soma1, soma2, soma3) {
    var soma = 0;
    soma = soma1 + soma2 + soma3;
    console.log('A soma de todas as colunas é: ' + soma)
    return soma;
}

somaColunas2(soma1, soma2, soma3);

var total1 = parseFloat(somaColunas(s1, s2, s3));
var total2 = parseFloat(somaColunas2(soma1, soma2, soma3));

var campeao = document.querySelector('#vencedor');

if(total1 > total2){
    campeao.textContent = 'Jogador 1!';
} else if(total2 > total1) {
    campeao.textContent = 'Jogador 2!';
} else {
    campeao.textContent = 'VENCEDOR!';
}

