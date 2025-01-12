function verificarEscopo() {
    if (true) {
        let mensagem = "Variável declarada dentro do bloco 'if'";
        console.log(mensagem); // acesso dentro do bloco - OK
    }

    // tentativa de acessar a variável fora do bloco
    try {
        console.log(mensagem); // erro: mensagem não está definida
    } catch (error) {
        console.log("Erro: A variável 'mensagem' não pode ser acessada fora do bloco.");
    }
}

verificarEscopo();
