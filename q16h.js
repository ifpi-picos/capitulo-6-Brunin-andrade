const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function pegarNome(jogador, continuar) {
    rl.question(`Nome do ${jogador}: `, (nome) => {
        continuar(nome.trim());
    });
}

function iniciarJogo() {
    console.log("Bora jogar Adivinhação!");

    pegarNome("primeiro jogador", (nome1) => {
        pegarNome("segundo jogador", (nome2) => {
            let numeroSecreto = gerarNumero();
            let jogadorAtual = nome1;
            let tentativas = { [nome1]: 0, [nome2]: 0 };
            let pontos = { [nome1]: 100, [nome2]: 100 };

            console.log("Número escolhido! Quem acerta primeiro?");

            function jogarRodada() {
                rl.question(`${jogadorAtual}, chute um número: `, (palpite) => {
                    palpite = parseInt(palpite);
                    tentativas[jogadorAtual]++;

                    if (palpite === numeroSecreto) {
                        console.log(`Boa, GG! Acertou o número ${numeroSecreto} em ${tentativas[jogadorAtual]} tentativa(s)!`);
                        console.log(`   Pontuação: ${pontos[jogadorAtual]}`);

                        rl.question("Querem jogar de novo? (s/n): ", (resposta) => {
                            if (resposta.toLowerCase() === "s") {
                                iniciarJogo();
                            } else {
                                console.log("Valeu por jogar!");
                                rl.close();
                            }
                        });
                    } else {
                        pontos[jogadorAtual]--;
                        console.log(`Errou! O número é ${palpite > numeroSecreto ? "menor" : "maior"}.`);
                        jogadorAtual = (jogadorAtual === nome1) ? nome2 : nome1;
                        jogarRodada();
                    }
                });
            }

            jogarRodada();
        });
    });
}

iniciarJogo();
