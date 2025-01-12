// Função para solicitar o peso do usuário
const solicitarPeso = () => {
    return parseFloat(prompt("Digite o seu peso (em kg):"));
};

// Função para solicitar a altura do usuário
const solicitarAltura = () => {
    return parseFloat(prompt("Digite a sua altura (em metros):"));
};

// Função para calcular o IMC
const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
};

// Função para determinar a classificação do IMC
const classificarIMC = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
};

// Função para exibir o resultado final
const exibirResultado = () => {
    const peso = solicitarPeso();
    const altura = solicitarAltura();
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
};

// Chamada da função principal
exibirResultado();
