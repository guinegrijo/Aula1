const prompt = require('prompt-sync')()

let num = parseFloat(prompt('Digite um número: '))

if ( num % 2 === 0 ){
    console.log(`O número é par`)
} else if (isNaN(num)  ){
    console.log('Digite um número valido')
} else if (num % 2 !== 0 ) {
    console.log(`O número é impar`)
} 