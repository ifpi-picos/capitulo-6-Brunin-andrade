function entradaDeDados(numero){
    numero = Number(prompt("Digite o número: "))
    return [numero]
}

function quadradoDoNumero (index){
    let numero = index[0]
    let result = numero*numero
    return result
}

//o processamento final está na função saidaDeDados
function saidaDeDados(){
    let numero = entradaDeDados()
    let resultado = quadradoDoNumero(numero)
    console.log(resultado)
}

saidaDeDados()