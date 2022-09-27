// // Exercicio 01

// let info = [{personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: true
// },
//   {
//     personagem:'Tio Patinhas',
//     origem:'Christmas on Bear Mountain',
//     nota:'Dell’s Four Color Comics #178',
//     recorrente: true
// }]


// for(let key in info){
//     console.log(info[0].personagem + ' e ' + info[1].personagem);
//     console.log(info[0].origem + ' e ' + info[1].origem);
//     console.log(info[0].nota + ', ' + info[1].nota);
//     if (info[0].recorrente && info[1].recorrente == true) {
//         console.log('Ambos Recorentes');
//     }
// }

// Gabarito da trybe
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };
  
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };
  
//   for (let properties in info) {
//     if (
//       properties === 'recorrente' &&
//       info[properties] === 'Sim' &&
//       info2[properties] === 'Sim'
//     ) {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[properties] + ' e ' + info2[properties]);
//     }
//   } Algumas Duvidas do raciciocinio




/////Exercicio 02

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

console.log(
    'O livro favarito de ' + leitor.nome, leitor.sobrenome + 'se chama "' +leitor.livrosFavoritos[0].titulo + '"'
);