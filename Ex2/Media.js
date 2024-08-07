const prompt = require('prompt-sync')()

let num = parseFloat(prompt('Digite a primeira nota do aluno [0-10]: '))
let num2 = parseFloat(prompt('Digite a segunda nota do aluno [0-10]: '))
let num3 = parseFloat(prompt('Digite a terceira nota do aluno [0-10]: '))

let media = (num + num2 + num3) / 3

if (num >= 0 && num <= 10 && num2 >= 0 && num2 <= 10 && num3 >= 0 && num3 <= 10){
    if (media >= 0 && media < 4){
        console.log('O aluno está reprovado')
    } else if (media >= 4 && media < 6){
        console.log('O aluno está de recuperação')
    } else if (media >= 6 && media <= 10){
        console.log('O aluno está aprovado')
    } else {
        console.log('Digite a média do aluno entre 0-10')
    }
} else{
    console.log('Digite nota apenas entre 0-10')
}


