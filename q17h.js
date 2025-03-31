function maiorNumeroDaLista(lista) {
    if (lista.length === 0) {
        return null;
    }

    let maior = lista[0];
    let indiceMaior = 0;

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
            indiceMaior = i;
        }
    }

    return indiceMaior;
}

function verificarParOuImpar(numero) {
    if (typeof numero !== "number") {
        return null;
    }
    
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

function diaDaSemanaDe(numero) {
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    if (numero >= 1 && numero <= 7) {
        return dias[numero - 1];
    } else {
        return "Número inválido";
    }
}

function somatorioLista(lista) {
    if (!Array.isArray(lista)) {
        return null;
    }

    if (lista.length === 0) {
        return 0;
    }

    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    return soma;
}

function contadorDePalavras(texto) {
    if (typeof texto !== "string") {
        return null;
    }

    let palavras = texto.trim().split(/\s+/);
    if (texto.trim() === "") {
        return 0;
    }

    return palavras.length;
}

function saudacaoPorHora(hora) {
    if (hora < 0 || hora > 23) {
        return "Hora inválida!";
    }

    if (hora >= 0 && hora <= 11) {
        return "Bom dia!";
    } else if (hora >= 12 && hora <= 17) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}

console.log(maiorNumeroDaLista([10, 20, 30, 40]));
console.log(verificarParOuImpar(5));
console.log(diaDaSemanaDe(3));
console.log(somatorioLista([1, 2, 3]));
console.log(contadorDePalavras("Olá, como você está?"));
console.log(saudacaoPorHora(14));
