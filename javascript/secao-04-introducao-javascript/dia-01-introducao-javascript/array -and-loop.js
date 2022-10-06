// const lotteryNumbers = [14, 25, 35, 46, 43, 36];


// for (let value of lotteryNumbers) {
//     console.log([value]);

// // }


// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// Some todos os valores contidos no array e imprima o resultado;

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];

//     console.log("Esses são os numeros", numbers[index]);

// let resultadoSoma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultadoSoma += numbers[index];
// }

// console.log("Este é Resultado da soma", resultadoSoma);


// let media = resultadoSoma / numbers.length;

// console.log(media);

// if (media > 20) {
//     console.log("valor maior que 20");

// } else { console.log("valor menor ou igual a 20"); 
//     }


// let valorMaior = [0]

// for (let index = 0; index < numbers.length; index ++) {
//     if (numbers[index] > valorMaior) {
//         valorMaior = numbers[index]
//     }   
// }
//    console.log(valorMaior);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valorImpar = 0;

for (let index = 0; index < numbers.length; index++) {
    if (number[index] % 2 !== 0) {
        valorImpar ++;
    }
    else if (valorImpar === 0) {
        console.log("Nenhum valor impar encontrado");

    } else {
        console.log(valorImpar);
    }


    const n = `9` ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

const n = 5;

let resultado = 0;
for (let index = 0; index <= n; index += 1) {
    resultado += index
};
console.log(resultado)



