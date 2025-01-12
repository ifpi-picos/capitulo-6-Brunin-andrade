//  Função para somar dois números
const somar = (num1, num2) => num1 + num2;

//  Função para subtrair dois números
const subtrair = (num1, num2) => num1 - num2;

// Função para multiplicar dois números
const multiplicar = (num1, num2) => num1 * num2;

//  Função para dividir dois números
const dividir = (num1, num2) => {
    if (num2 === 0) {
        return "Erro: Divisão por zero não é permitida!";
    }
    return num1 / num2;
};

//  Função para exibir o resultado
const exibirResultado = (operacao, num1, num2, resultado) => {
    console.log(`O resultado de ${operacao} ${num1} e ${num2} é: ${resultado}`);
};

//  Função principal da calculadora
const calculadora = () => {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const operacao = prompt("Escolha a operação: (+, -, *, /)");

    let resultado;

    switch (operacao) {
        case "+":
            resultado = somar(num1, num2);
            exibirResultado("somar", num1, num2, resultado);
            break;
        case "-":
            resultado = subtrair(num1, num2);
            exibirResultado("subtrair", num1, num2, resultado);
            break;
        case "*":
            resultado = multiplicar(num1, num2);
            exibirResultado("multiplicar", num1, num2, resultado);
            break;
        case "/":
            resultado = dividir(num1, num2);
            exibirResultado("dividir", num1, num2, resultado);
            break;
        default:
            console.log("Operação inválida. Escolha entre +, -, * ou /.");
            break;
    }
};

//  Chamada da função principal para iniciar a calculadora
calculadora();
