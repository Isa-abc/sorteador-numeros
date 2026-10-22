function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    // Verifica se os campos estão preenchidos
    if (!quantidade || !de || !ate) {
        alert('Insira números nos campos para continuar com o sorteio!');
        return;
    }

    if (quantidade <= 0 || quantidade >= 1000) {
        alert('A quantidade de números sorteados deve ser maior que 0 e menor que 1000!');
        return;
    }

    if (de <= 0 || de >= 1000) {
        alert('O valor do número inicial deve ser maior que 0 e menor que 1000!');
        return;
    }

    if (ate <= 0 || ate >= 1000) {
        alert('O valor do número final deve ser maior que 0 e menor que 1000!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        //Loop para que o computador continue sorteando um número caso o que ele tenha sorteado seja repetido.
        //Basicamente analisa se o número sorteado está nos incluídos e, caso esteja, sorteia novamente.
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    // Atualiza o conteúdo do elemento resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alterarStatusBotao();


}

// Função para gerar um número aleatório, usando o Math.random e arredonda os números aleatórios usando o Math.floor.
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

function alterarStatusBotao() {
    let botaoreiniciar = document.getElementById('btn-reiniciar');
    if (botaoreiniciar.classList.contains('container__botao-desabilitado')) {
        botaoreiniciar.classList.remove('container__botao-desabilitado');
        botaoreiniciar.classList.add('container__botao');
    } else {
        botaoreiniciar.classList.add('container__botao-desabilitado');
        botaoreiniciar.classList.remove('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: </label>';
    alterarStatusBotao();
}