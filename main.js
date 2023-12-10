const celulas = document.querySelectorAll('.cell');
var tabuleiro = [ 
[0,0,0],
[0,0,0],
[0,0,0] 
];

function getTable(){

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            tabuleiro[j][i] = parseInt(celulas[i * 3 + j].textContent);
        }
    }

    return tabuleiro;
}

somaColuna();

function somaColuna(){

    const table = getTable();

    let soma = [0, 0, 0];
    for(let j=0; j<3; j++){
        for(let i=0; i<3; i++){
            if(table[j][i] === table[j][i+1] && table[j][i+1] === table[j][i+2]){
                soma[i] = table[j][i] * 3 + table[j][i+1] * 3 + table[j][i+2] * 3;
            }
            else if(table[j][i] === table[j][i+1]){
                soma[i] = table[j][i] * 2 + table[j][i+1] * 2;
            }
            else if(table[j][i] === table[j][i+2]){
                soma[i] = table[j][i] * 2 + table[j][i+2] * 2;
            }
            else if(table[j][i+1] === table[j][i+2]){
                soma[i] = table[j][i] * 2 + table[j][i+2] * 2;
            }
        }
    }
    console.log(soma[0]);
}