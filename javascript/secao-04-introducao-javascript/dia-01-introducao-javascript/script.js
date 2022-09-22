// const anguloA = 65;

// const anguloB = 100;

// const anguloC = 15;

// let somaAngulos = anguloA + anguloB + anguloC;

// let todosAngPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

// if (todosAngPositivos === true && somaAngulos === 180) {
//     console.log(true);
// } else { console.log(false); }




const chessPiece = "Peão"

switch (chessPiece.toLocaleLowerCase()) {
    case "rei": console.log('Apenas uma em qualquer da direções');
        break;
    case "bisbo": console.log('diagonal');
        break;
    case "rainha": console.log('Diagonal, horizontal e vertical');
        break;
    case "peão": console.log('Apenas uma casa para frente, no primeiro movimento podem ser duas casas');
        break;
    case "torre": console.log('Torre -> Horizontal e vertical');
        break;
    case "cavalo": console.log('Cavalo -> "L" pode pular sobre as peças');
        break;
    default: console.log('Peça Invalida!');
}