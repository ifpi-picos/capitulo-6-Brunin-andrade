//  Função para solicitar um número ao usuário
const solicitarNumero = (mensagem) => {
    return parseFloat(prompt(mensagem));
};

//  Função para calcular a média de dois números
const calcularMedia = (num1, num2) => {
    return (num1 + num2) / 2;
};

//  Função principal para executar o programa
const executarPrograma = () => {
    const numero1 = solicitarNumero("Digite o primeiro número:");
    const numero2 = solicitarNumero("Digite o segundo número:");

    const media = calcularMedia(numero1, numero2);

    console.log(`A média entre ${numero1} e ${numero2} é: ${media}`);
};

//  Chamada da função principal
executarPrograma();
