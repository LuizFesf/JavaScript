let valores = [8, 1, 7, 4, 2, 9]

console.log(`\n[${valores}]\n`)
valores.sort()

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let cont = 0;cont < valores.length;cont++)
{
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}
*/

for(let pos in valores)
{
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}