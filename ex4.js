// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

let valorCarro = Number(prompt('digite o valor do carro:'));

let valorImposto = valorCarro*45/100;

let valorDistribuidor = valorCarro*28/100;

let valorTotal = valorCarro + valorImposto + valorDistribuidor;

alert(`${valorTotal} é o valor final`)