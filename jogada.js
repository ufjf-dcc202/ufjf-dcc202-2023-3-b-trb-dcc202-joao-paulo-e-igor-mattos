export { escolheNumDado, atualizaTurno };

let turnoAtual = 2;

function escolheNumDado() {
    let dado = Math.floor(Math.random()* 6) + 1;
    if(turnoAtual === 2){
        console.log(`Jogador 2 lançou o dado e obteve ${dado}`);
    } else {
        console.log(`Jogador 1 lançou o dado e obteve ${dado}`);
    }

    turnoAtual = turnoAtual === 1 ? 2 :1;
    atualizaTurno();
}

function atualizaTurno() {
    const turno = document.querySelector('#vencedor');
    turno.textContent = turnoAtual === 2 ? 'Turno do Jogador 2' : 'Turno do Jogador 1';
}