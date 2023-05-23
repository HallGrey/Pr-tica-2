// 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldoInicial = 1000.00
let saque = Number(prompt("Quantos reais você deseja sacar (aceito somente números multiplos de 5)? R$"))

let taxaSaque = saque + 4.50
let saldoRestante = saldoInicial - taxaSaque

if (saque > 0 && saque % 5 === 0 && taxaSaque < saldoInicial){
    document.write(`Você sacou R$${taxaSaque.toFixed(2)} e restaram R$${saldoRestante.toFixed(2)} em sua conta`)
}else if (taxaSaque > saldoInicial){
    document.write("Você não possuí saldo suficiente para essa transação")
}else {
    document.write("Informação incorreta, digite novamente")
}


    