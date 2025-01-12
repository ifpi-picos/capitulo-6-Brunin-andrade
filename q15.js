// Função para gerar um número aleatório entre 0 e 100
function gerarNumAleatorio() {
    return Math.floor(Math.random() * 101);
}

// Função para exibir as regras do jogo
function regrasJogo() {
    console.log("////////////////////ADIVINHE O NUMERO!/////////////////////");
    console.log("TENTE ADIVINHAR O NÚMERO ENTRE 0 E 100");
    console.log("VOCÊ TEM 10 TENTATIVAS. BOA SORTE!");
}

// Função para solicitar o palpite do usuário
function entradaDeDados() {
    return Number(prompt("Digite o seu palpite: "));
}

// Função principal do jogo de adivinhação
function jogoAdivinhacao() {
    let num = gerarNumAleatorio();  // Número aleatório secreto
    let pontuacao = 100;  // Pontuação inicial
    let tentativas = 10;  // Máximo de tentativas
    let palpite = entradaDeDados();  // Primeiro palpite

    while (tentativas > 0) {
        if (palpite === num) {
            console.log("PARABÉNS! VOCÊ ACERTOU!");
            console.log("SUA PONTUAÇÃO FINAL FOI: ", pontuacao);
            console.log("O NÚMERO SECRETO ERA:", num);
            break;
        } else if (palpite < 0 || palpite > 100) {
            console.log("NÚMERO INVÁLIDO. TENTE NOVAMENTE COM UM NÚMERO ENTRE 0 E 100.");
        } else if (palpite < num) {
            console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO");
        } else {
            console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO");
        }

        pontuacao -= 10;  // Diminui a pontuação a cada tentativa
        tentativas--;  // Diminui o número de tentativas
        console.log(`Tentativas restantes: ${tentativas}. Pontuação: ${pontuacao}`);
        
        // Solicita um novo palpite
        palpite = entradaDeDados();
    }

    if (tentativas === 0) {
        console.log("GAME OVER! Você não conseguiu acertar o número.");
        console.log("O número secreto era: ", num);
    }
}

// Função para iniciar o jogo
function saidaDeDados() {
    regrasJogo();
    jogoAdivinhacao();
}

// Chama a função principal para iniciar o jogo
saidaDeDados();
