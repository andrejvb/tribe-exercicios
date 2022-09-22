// const anguloA = 65;

// const anguloB = 100;

// const anguloC = 15;

// let somaAngulos = anguloA + anguloB + anguloC;

// let todosAngPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

// if (todosAngPositivos === true && somaAngulos === 180) {
//     console.log(true);
// } else { console.log(false); }




// const chessPiece = "Peão"

// switch (chessPiece.toLocaleLowerCase()) {
//     case "rei": console.log('Apenas uma em qualquer da direções');
//         break;
//     case "bisbo": console.log('diagonal');
//         break;
//     case "rainha": console.log('Diagonal, horizontal e vertical');
//         break;
//     case "peão": console.log('Apenas uma casa para frente, no primeiro movimento podem ser duas casas');
//         break;
//     case "torre": console.log('Torre -> Horizontal e vertical');
//         break;
//     case "cavalo": console.log('Cavalo -> "L" pode pular sobre as peças');
//         break;
//     default: console.log('Peça Invalida!');



// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em 
// conceitos de A a F. Siga essas regras:
// // Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.








const nota = 91;


switch (nota) {
    case  90: console.log('a');
        break;
    case  80: console.log('b');
        break;
    case  70: console.log('c');
        break;
    case  60: console.log('d');
        break;
    case  50: console.log('e');

    default: console.log("f");
        

}
