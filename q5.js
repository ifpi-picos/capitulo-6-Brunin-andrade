function mediaNotas (valor1, valor2, valor3){
    let media = Number((valor1+valor2+valor3)/3)
    let mediaFormatada = media.toFixed(2)
    return mediaFormatada
}

function entradaDeDados(num1, num2, num3){
    num1 = parseFloat(prompt("Digite a primeira nota: "))
    num2 = parseFloat(prompt("Digite a segunda nota: "))
    num3 = parseFloat(prompt("Digite a terceira nota: "))
    return [num1, num2, num3]
}

function saidaDeDados(){
    let notas = entradaDeDados()
    let media = mediaNotas(notas[0], notas[1], notas[2])
    console.log(media)
}

saidaDeDados()