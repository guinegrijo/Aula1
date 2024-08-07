const prompt = require('prompt-sync')()

let arrayNum = []

let tamanho = parseFloat(prompt('Digite o tamanho da lista que você quer: '))

if (tamanho < 0 || isNaN(tamanho)){
    console.log('Digite um número valido')
} else {
    for (i = 0; i < tamanho; i++){
        arrayNum.push(parseFloat(prompt(`Digite o numero para a posição ${i + 1}: `)))
    }
    
    console.log(`Sua lista: `)
    console.log(arrayNum)
}
