// 6. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let numero1 = Number(prompt("Digite o primeiro número"))
let operacao = prompt("Digite a operação matematica que deseja realizar:")
let numero2 = Number(prompt("Digite o segundo número"))
let resultado = 0

switch(operacao) {
    case "+":
        resultado = numero1 + numero2
        document.write(`A soma dos dois número é: ${resultado}`);
        break;
    case "-":
        resultado = numero1 - numero2
        document.write(`A subtração dos dois número é: ${resultado}`);
        break;    
    case "/":
        resultado = numero1 / numero2
        document.write(`A divisão dos dois número é: ${resultado}`);
        break;
    case "*":
        resultado = numero1 * numero2
        document.write(`A multiplicação dos dois número é: ${resultado}`);
        break;
}