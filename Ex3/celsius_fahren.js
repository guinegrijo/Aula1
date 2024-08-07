const prompt = require('prompt-sync')()

let temp = parseFloat(prompt('Digite um grau celcios para converter: '))

console.log(`${temp} celcios em fahrenheit é: ${(temp * 9/5) + 32} `)