// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// let testingScope = (escopo) => {
//     if (escopo === true) {
//       const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   Crie uma função que retorne um array em ordem crescente.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = (array) => {
//     for (let index = 1; index < array.length; index+=1) {
//         for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//             if (array[index] < array[secondIndex]) {
//                 let position = array[index];
//                 array[index] = array[secondIndex];
//                 array[secondIndex] = position;
//             }            
//         }        
//     }
//     return `Os números ${array} se encontram ordenados de forma crescente!`
// }
   

// console.log(sortOddsAndEvens(oddsAndEvens));

const sortArrayBonus = (array) => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
  };

console.log(sortArrayBonus(oddsAndEvens));


