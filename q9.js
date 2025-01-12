// 🔵 1. Função que retorna o quadrado de um número
const calcularQuadrado = (numero) => numero * numero;

console.log(`O quadrado de 5 é: ${calcularQuadrado(5)}`);

// 🔵 2. Função que manipula variáveis globais e locais
const varGlobal = "Eu sou a variável Global";

const minhaVarLocal = () => {
    let varLocal = "Eu sou a variável Local";
    console.log(varLocal);
};

console.log(varGlobal); // Acessando a variável global
minhaVarLocal();        // Acessando a variável local através da função

try {
    console.log(varLocal);
} catch (error) {
    console.log("Erro: A variável 'varLocal' não pode ser acessada fora da função.");
}

// 🔵 3. Função que verifica o escopo de bloco
const verificarEscopo = () => {
    if (true) {
        let mensagem = "Variável declarada dentro do bloco 'if'";
        console.log(mensagem); // Acesso dentro do bloco - OK
    }

    try {
        console.log(mensagem);
    } catch (error) {
        console.log("Erro: A variável 'mensagem' não pode ser acessada fora do bloco.");
    }
};

verificarEscopo();
