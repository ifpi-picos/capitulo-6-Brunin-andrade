function obterNome() {
    return prompt("Digite seu nome:");
}

function converterParaMaiusculo(nome) {
    return nome.toUpperCase();
}

function inverterNome(nome) {
    return nome.split("").reverse().join("");
}

function exibirInformacoes(nome) {
    const nomeMaiusculo = converterParaMaiusculo(nome);
    const nomeInvertido = inverterNome(nome);

    console.log(`Seu nome em maiúsculas: ${nomeMaiusculo}`);
    console.log(`Seu nome de trás para frente: ${nomeInvertido}`);
    console.log(`Seu nome tem ${nome.length} letras.`);
}

const nomeUsuario = obterNome();
exibirInformacoes(nomeUsuario);
