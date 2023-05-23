// 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

let diaDaSemana = Number(prompt('digite o número do dia semana que você quer saber:'));

switch(diaDaSemana) {
    case 1:
        document.write("Domingo");
        break;
    case 2:
        document.write("Segunda-feira");
        break;    
    case 3:
        document.write("Terça-feira");
        break;
    case 4:
        document.write("Quarta-feira");
        break;
    case 5:
        document.write("Quinta-feira");
        break;
    case 6:
        document.write("Sexta-feira");
        break;
    case 7:
        document.write("Sábado");
        break;
}