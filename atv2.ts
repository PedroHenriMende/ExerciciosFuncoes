/*Nome: Pedro Henrique Mendes De Jesus
Exercício 2:
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.*/
console.clear();

const teclado = require (`prompt-sync`)();

function encontrarMenor(numero1:number, numero2:number, numero3:number): number {
    if (numero1 <= numero2 && numero1 <= numero3) {
        return numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        return numero2;
    } else {
        return numero3;
    }
}
let n1: number = parseFloat(teclado(`Digite o 1° numero`));
let n2: number = parseFloat(teclado(`Digite o 2° numero`));
let numero3: number = parseFloat(teclado(`Digite o 3° numero`));

let menorNumero = numero3, numero2, numero1
console.log("O menor número é:", menorNumero);