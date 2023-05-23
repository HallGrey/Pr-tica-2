const idade = prompt("Idade:")
const peso = prompt("Peso:")

if (idade <= 12){
    document.write("Categoria Infantil")
}else if (idade <= 16 && peso <= 40){
    document.write("Categoria Juvenil Leve")
}else if (idade <= 16 && peso >= 40){
    document.write("Categoria Juvenil Pesado")
}else if (idade <= 24 && peso <= 45){
    document.write("Categoria Sênior Leve")
}else if (idade <= 24 && peso >= 45 && peso <= 60){
    document.write("Categoria Sênior Médio")
}else if (idade <= 24 && peso >= 60){
    document.write("Categoria Sênior Pesado")
}else{
    document.write("Categoria Veterano")
}