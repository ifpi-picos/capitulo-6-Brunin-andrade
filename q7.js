let varGlobal = "Eu sou a variável Global";

function minhaVarLocal() {
    let varLocal = "Eu sou a variável Local";
    console.log(varLocal);
}

console.log(varGlobal); // Acessando a variável global
minhaVarLocal();        // Acessando a variável local através da função

// Tentativa de acessar varLocal fora da função (vai dar erro)
try {
    console.log(varLocal);
} catch (error) {
    console.log("Erro: A variável 'varLocal' não pode ser acessada fora da função.");
}
