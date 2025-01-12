//  Função para solicitar o valor em Real
function entradaDeDados() {
    const real = Number(prompt("Digite o valor em Real: "));
    return real;
}

//  Função para converter Real para Dólar com uma taxa fixa (6.11)
function conversorRealParaDolar(valorReal) {
    const taxaCambio = 6.13;
    const dolar = valorReal / taxaCambio;
    return dolar;
}

//  Função para exibir o resultado da conversão
function saidaDeDados() {
    const valorReal = entradaDeDados();
    const resultado = conversorRealParaDolar(valorReal);
    console.log("O valor convertido em Dólar é: $", resultado.toFixed(2));
}

// Chamada da função principal
saidaDeDados();
