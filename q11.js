//  Função para gerar um número aleatório entre 1 e 100
const gerarNumeroSecreto = () => Math.floor(Math.random() * 100) + 1;

//  Função para solicitar um palpite do usuário
const solicitarPalpite = (tentativa) => {
    return parseInt(prompt(`Tentativa ${tentativa}/10: Digite um número entre 1 e 100:`));
};

//  Função para verificar o palpite e fornecer uma dica
const verificarPalpite = (palpite, numeroSecreto) => {
    if (palpite === numeroSecreto) {
        return "Parabéns! Você acertou!";
    } else if (palpite > numeroSecreto) {
        return "Seu palpite é MAIOR que o número secreto.";
    } else {
        return "Seu palpite é MENOR que o número secreto.";
    }
};

//  Função principal do jogo
const executarJogoDeAdivinhacao = () => {
    const numeroSecreto = gerarNumeroSecreto();
    let tentativas = 0;

    while (tentativas < 10) {
        tentativas++;
        const palpite = solicitarPalpite(tentativas);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, digite um número válido entre 1 e 100.");
            tentativas--; // Não contar tentativa inválida
            continue;
        }

        const resultado = verificarPalpite(palpite, numeroSecreto);
        console.log(resultado);

        if (palpite === numeroSecreto) {
            console.log(`Você acertou em ${tentativas} tentativas!`);
            return;
        }
    }

    console.log(`Que pena! Você não acertou. O número secreto era ${numeroSecreto}.`);
};

// Chamada da função principal para iniciar o jogo
executarJogoDeAdivinhacao();
