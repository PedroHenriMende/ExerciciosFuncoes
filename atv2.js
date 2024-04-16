/*Nome: Pedro Henrique Mendes De Jesus
Exercício 2:
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.*/
console.clear();
var teclado = require("prompt-sync")();
function encontrarMenor(numero1, numero2, numero3) {
    if (numero1 <= numero2 && numero1 <= numero3) {
        return numero1;
    }
    else if (numero2 <= numero1 && numero2 <= numero3) {
        return numero2;
    }
    else {
        return numero3;
    }
}
var n1 = parseFloat(teclado("Digite o 1\u00B0 numero"));
var n2 = parseFloat(teclado("Digite o 2\u00B0 numero"));
var numero3 = parseFloat(teclado("Digite o 3\u00B0 numero"));
var menorNumero = numero3, numero2, numero1;
console.log("O menor número é:", menorNumero);
