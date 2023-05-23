// 9. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidadeCarro = Number(prompt("Qual a velocidade do carro:"))
let acimaVelocidade = 0
let valorMulta = 0

if (velocidadeCarro > 80){
    acimaVelocidade = velocidadeCarro - 80
    valorMulta = acimaVelocidade * 5.00
    document.write(`Você foi multado e o valor da multa será de R$${valorMulta.toFixed(2)}`)
}else{
    document.write("Você estava dentro da velocidade permitida e não será multado")
}