// Exercicio 01

let info = [{personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: true
},
  {
    personagem:'Tio Patinhas',
    origem:'Christmas on Bear Mountain',
    nota:'Dell’s Four Color Comics #178',
    recorrente: true
}]


for(let key in info){
    console.log(info[0].personagem + ' e ' + info[1].personagem);
    console.log(info[0].origem + ' e ' + info[1].origem);
    console.log(info[0].nota + ', ' + info[1].nota);
    if (info[0].recorrente && info[1].recorrente == true) {
        console.log('Ambos Recorentes');
    }
}